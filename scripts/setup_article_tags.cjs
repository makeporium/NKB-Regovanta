const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zoihnehiptkfgxshtazi.supabase.co';
const supabaseKey = 'sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP';
const supabase = createClient(supabaseUrl, supabaseKey);

const tagsToEnsure = [
  { name: 'CDSCO Registration', slug: 'cdsco-registration' },
  { name: 'Medical Devices Rules 2017', slug: 'medical-devices-rules-2017' },
  { name: 'MD-15 Import License', slug: 'md-15-import-license' },
  { name: 'Authorised Indian Agent', slug: 'authorised-indian-agent' },
  { name: 'SUGAM Portal', slug: 'sugam-portal' },
  { name: 'Device Master File', slug: 'device-master-file' },
  { name: 'ISO 13485 Certification', slug: 'iso-13485-certification' },
  { name: 'CDSCO Consultant', slug: 'cdsco-consultant' },
  { name: 'Medical Device Registration', slug: 'medical-device-registration' },
  { name: 'CDSCO Import License', slug: 'cdsco-import-license' },
  { name: 'Post-Market Surveillance', slug: 'post-market-surveillance' },
  { name: 'Regulatory Consultant', slug: 'regulatory-consultant' },
  { name: 'Technical Documentation', slug: 'technical-documentation' },
  { name: 'Regulatory Compliance', slug: 'regulatory-compliance' },
  { name: 'Medical Devices', slug: 'medical-devices' }
];

async function run() {
  console.log('--- Ensuring Tags in blog_tags ---');
  for (const t of tagsToEnsure) {
    const { data: existing } = await supabase.from('blog_tags').select('id').eq('slug', t.slug).maybeSingle();
    if (!existing) {
      const { data: ins, error } = await supabase.from('blog_tags').insert({
        name: t.name,
        slug: t.slug,
        allow_indexing: true
      }).select();
      if (error) console.error('Error inserting tag:', t.name, error);
      else console.log('Created tag:', t.name, ins[0]?.id);
    } else {
      console.log('Tag exists:', t.name, existing.id);
    }
  }

  // Fetch all tags to get ID map
  const { data: allTags } = await supabase.from('blog_tags').select('id, name, slug');
  const tagMap = new Map();
  for (const t of allTags || []) {
    tagMap.set(t.slug, t.id);
  }

  // Fetch 3 posts
  const slugs = [
    'how-to-register-medical-device-in-india',
    'cdsco-consultant-medical-devices-india',
    'medical-device-regulatory-consultant-india'
  ];

  const postTagsMap = {
    'how-to-register-medical-device-in-india': [
      'cdsco-registration',
      'medical-devices-rules-2017',
      'md-15-import-license',
      'authorised-indian-agent',
      'sugam-portal',
      'device-master-file',
      'iso-13485-certification',
      'medical-devices'
    ],
    'cdsco-consultant-medical-devices-india': [
      'cdsco-consultant',
      'medical-device-registration',
      'medical-devices-rules-2017',
      'cdsco-import-license',
      'authorised-indian-agent',
      'sugam-portal',
      'iso-13485-certification',
      'post-market-surveillance'
    ],
    'medical-device-regulatory-consultant-india': [
      'regulatory-consultant',
      'cdsco-registration',
      'medical-devices-rules-2017',
      'authorised-indian-agent',
      'sugam-portal',
      'iso-13485-certification',
      'technical-documentation',
      'regulatory-compliance'
    ]
  };

  for (const slug of slugs) {
    const { data: post } = await supabase.from('blog_posts').select('id, title').eq('slug', slug).maybeSingle();
    if (!post) {
      console.warn('Post not found for slug:', slug);
      continue;
    }

    console.log(`Setting tags for ${post.title} (${post.id})...`);
    // Remove old tags for this post
    await supabase.from('blog_post_tags').delete().eq('post_id', post.id);

    const tagSlugs = postTagsMap[slug] || [];
    const rowsToInsert = tagSlugs
      .map(ts => tagMap.get(ts))
      .filter(Boolean)
      .map(tagId => ({
        post_id: post.id,
        tag_id: tagId
      }));

    if (rowsToInsert.length > 0) {
      const { error: insErr } = await supabase.from('blog_post_tags').insert(rowsToInsert);
      if (insErr) console.error('Error attaching tags for post:', slug, insErr);
      else console.log(`Attached ${rowsToInsert.length} tags to ${slug}`);
    }
  }

  console.log('--- Finished Setting Up Tags ---');
}

run();
