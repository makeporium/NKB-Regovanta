import fs from 'fs';
import * as cheerio from 'cheerio';

const urls = [
    { key: 'class_a_import', url: 'https://mdrconsultants.in/all_data.php?id=CLA_cdsco_1' },
    { key: 'predicate_devices', url: 'https://mdrconsultants.in/all_data.php?id=IMP_cdsco_5' },
    { key: 'investigational_devices', url: 'https://mdrconsultants.in/all_data.php?id=IMP_cdsco_4' },
    { key: 'novel_ivds', url: 'https://mdrconsultants.in/all_data.php?id=IMP_cdsco_3' },
    { key: 'ivd_clinical_performance', url: 'https://mdrconsultants.in/all_data.php?id=IMP_cdsco_2' },
    { key: 'ivd_testing', url: 'https://mdrconsultants.in/all_data.php?id=IMP_cdsco_1' },
    { key: 'personal_use', url: 'https://mdrconsultants.in/all_data.php?id=PER_cdsco_1' },

    { key: 'mfg_class_c_d', url: 'https://mdrconsultants.in/all_data.php?id=MAN_cdsco_3' },
    { key: 'mfg_class_a_b', url: 'https://mdrconsultants.in/all_data.php?id=MAN_cdsco_2' },
    { key: 'mfg_class_a_gsr', url: 'https://mdrconsultants.in/all_data.php?id=MAN_cdsco_1' },
    { key: 'loan_class_c_d', url: 'https://mdrconsultants.in/all_data.php?id=LOA_cdsco_2' },
    { key: 'loan_class_a_b', url: 'https://mdrconsultants.in/all_data.php?id=LOA_cdsco_1' },

    { key: 'md_42', url: 'https://mdrconsultants.in/all_data.php?id=MD-_cdsco_1' },
    { key: 'non_conviction', url: 'https://mdrconsultants.in/all_data.php?id=NON_cdsco_1' },
    { key: 'market_standing', url: 'https://mdrconsultants.in/all_data.php?id=MAR_cdsco_1' },
    { key: 'neutral_code', url: 'https://mdrconsultants.in/all_data.php?id=NEU_cdsco_1' },
    { key: 'free_sale', url: 'https://mdrconsultants.in/all_data.php?id=FRE_cdsco_1' }
];

async function scrape() {
    const results = {};
    for (const item of urls) {
        console.log(`Fetching ${item.key}...`);
        try {
            const res = await fetch(item.url);
            const html = await res.text();
            
            // The content is strangely embedded in an inner HTML document in their PHP script.
            // Let's try to parse the whole thing and look for the dynamic content block.
            // Looking at the fetched sample, it's inside `<div class="page-wrapper">` 
            // and then inside another `<!DOCTYPE html><html>...<body>`
            
            const $ = cheerio.load(html);
            // In the outer page, it looks like: .page-wrapper -> HTML comment -> inner HTML
            // Alternatively, just grab text from .page-wrapper
            let contentText = $('.page-wrapper').text().trim();
            
            // Clean up the text by removing excessive whitespace
            contentText = contentText.replace(/\s+/g, ' ');
            
            // If it failed to extract, try a broader fallback
            if (!contentText || contentText.length < 50) {
                contentText = $('body').text().replace(/\s+/g, ' ').substring(0, 1000); // emergency fallback
            }

            results[item.key] = contentText;
        } catch (e) {
            console.error(`Failed to fetch ${item.key}:`, e);
            results[item.key] = "FAILED TO FETCH";
        }
        // Small delay to prevent rate limiting
        await new Promise(r => setTimeout(r, 500));
    }

    fs.writeFileSync('scraped_content.json', JSON.stringify(results, null, 2));
    console.log("Done scraping 17 pages.");
}

scrape();
