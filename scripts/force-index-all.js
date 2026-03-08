/**
 * Google Indexing API - Force Re-Crawl ALL Pages
 *
 * Pings Google to immediately re-crawl every page on albadecor.co.uk
 * instead of waiting 4-6 weeks for natural crawl.
 *
 * Covers: homepage, main pages, all 12 service pages, all 10 location pages
 * Total: ~30 URLs (well within 200/day quota)
 *
 * SETUP: See scripts/INDEXING_README.md
 * RUN:   node scripts/force-index-all.js
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'service-account.json');

if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error('ERROR: service-account.json not found!');
  console.error('Follow setup instructions in scripts/INDEXING_README.md');
  process.exit(1);
}

const key = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf8'));
const BASE_URL = 'https://albadecor.co.uk';

// All pages from sitemap.ts
const ALL_PAGES = [
  // Homepage
  '',
  // Main pages
  '/about',
  '/contact',
  '/services',
  '/blog',
  '/gallery',
  '/locations',
  // Service pages (12)
  '/services/interior-painting',
  '/services/exterior-painting',
  '/services/cabinet-furniture-painting',
  '/services/decorative-finishes',
  '/services/wallpaper-services',
  '/services/wood-finishing',
  '/services/floor-sanding-varnishing',
  '/services/silicone-sealing',
  '/services/commercial-painting',
  '/services/residential-painting',
  '/services/spray-painting',
  '/services/color-consultation',
  // Location pages (10)
  '/locations/potters-bar',
  '/locations/barnet',
  '/locations/hadley-wood',
  '/locations/totteridge',
  '/locations/enfield',
  '/locations/cockfosters',
  '/locations/southgate',
  '/locations/winchmore-hill',
  '/locations/cuffley',
  '/locations/northaw',
];

const jwtClient = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

async function notifyGoogle(url) {
  try {
    const response = await google.indexing('v3').urlNotifications.publish({
      auth: jwtClient,
      requestBody: { url, type: 'URL_UPDATED' }
    });
    return { success: true, status: response.status };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('Alba Decor - Force Re-Index ALL Pages');
  console.log('=====================================\n');

  try {
    console.log('Authenticating with Google...');
    await jwtClient.authorize();
    console.log('Authentication successful!\n');

    const urls = ALL_PAGES.map(p => `${BASE_URL}${p}`);
    console.log(`${urls.length} pages to index:\n`);

    let success = 0;
    let fail = 0;

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const label = ALL_PAGES[i] || '/';
      process.stdout.write(`[${i + 1}/${urls.length}] ${label}... `);

      const result = await notifyGoogle(url);

      if (result.success) {
        console.log(`OK (${result.status})`);
        success++;
      } else {
        console.log(`FAILED: ${result.error}`);
        fail++;
      }

      // Rate limit: 1 second between requests
      if (i < urls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log('\n=====================================');
    console.log('RESULTS:');
    console.log(`  Success: ${success}`);
    console.log(`  Failed:  ${fail}`);
    console.log(`  Total:   ${urls.length}`);
    console.log('\nNEXT STEPS:');
    console.log('  1. Check Google Search Console > URL Inspection');
    console.log('  2. Monitor Crawl Stats for activity spike');
    console.log('  3. Expect re-indexing within 24-48 hours');
    console.log('  4. Delete old sitemap in GSC, resubmit corrected one');

  } catch (error) {
    console.error('\nFATAL ERROR:', error.message);
    console.error('\nTroubleshooting:');
    console.error('  1. Verify service account has Owner role in GSC');
    console.error('  2. Check Web Search Indexing API is enabled');
    console.error('  3. Ensure service-account.json is valid');
    process.exit(1);
  }
}

main();
