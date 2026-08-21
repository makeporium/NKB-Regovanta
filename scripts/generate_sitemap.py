import os
from datetime import datetime

routes_dir = os.path.join(os.getcwd(), 'src', 'routes')
files = os.listdir(routes_dir)

urls = set()
base_url = 'https://www.nkbregovanta.com'

for f in files:
    if not f.endswith('.tsx') or f.startswith('__') or 'copy' in f or 'README' in f:
        continue
    
    route = f[:-4]
    if route == 'index':
        url = base_url
    else:
        route = route.replace('_', '')
        if route.endswith('.index'):
            route = route[:-6]
        route = route.replace('.', '/')
        url = f'{base_url}/{route}'
    
    urls.add(url)

sorted_urls = sorted(list(urls))
today = datetime.now().strftime('%Y-%m-%d')

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for u in sorted_urls:
    if u == base_url:
        priority = '1.0'
    elif '/services' in u or '/industries' in u:
        priority = '0.9'
    elif '/case-studies' in u or '/insights' in u:
        priority = '0.8'
    else:
        priority = '0.7'
        
    xml_lines.append('  <url>')
    xml_lines.append(f'    <loc>{u}</loc>')
    xml_lines.append(f'    <lastmod>{today}</lastmod>')
    xml_lines.append('    <changefreq>weekly</changefreq>')
    xml_lines.append(f'    <priority>{priority}</priority>')
    xml_lines.append('  </url>')

xml_lines.append('</urlset>')

out_path = os.path.join(os.getcwd(), 'public', 'sitemap.xml')
with open(out_path, 'w', encoding='utf-8') as out:
    out.write('\n'.join(xml_lines))

print(f'Generated sitemap.xml with {len(sorted_urls)} URLs')
