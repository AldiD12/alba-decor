/**
 * Google Indexing API - Force Re-Crawl Script
 * 
 * This script pings Google to immediately re-crawl updated location pages
 * instead of waiting 4-6 weeks for natural crawl.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Cloud Console: https://console.cloud.google.com
 * 2. Create a new project or select existing
 * 3. Enable "Web Search Indexing API"
 * 4. Create Service Account:
 *    - Go to IAM & Admin > Service Accounts
 *    - Create Service Account
 *    - Grant "Owner" role
 *    - Create JSON key and download
 * 5. Add Service Account email to Google Search Console:
 *    - Go to GSC > Settings > Users and permissions
 *    - Add service account email as Owner
 * 6. Save the JSON key as 'service-account.json' in this directory
 * 7. Run: npm install googleapis
 * 8. Run: node scripts/force-index.js
 * 
 * LIMITS:
 * - 100 URLs per batch request
 * - 200 URLs per day (standard quota)
 * - Can request quota increase if needed
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'service-account.json');

if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error('❌ ERROR: service-account.json not found!');
  console.error('📋 Follow setup instructions in the script comments.');
  process.exit(1);
}

const keyFileContent = fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf8');
const key = JSON.parse(keyFileContent);

// Your location slugs (from lib/locations.ts)
const locationSlugs = [
  'potters-bar',
  'barnet',
  'hadley-wood',
  'totteridge',
  'enfield',
  'cockfosters',
  'southgate',
  'winchmore-hill',
  'cuffley',
  'northaw'
];

// JWT Client for authentication
const jwtClient = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

/**
 * Notify Google about URL updates
 */
async function notifyGoogle(url, type = 'URL_UPDATED') {
  try {
    const response = await google.indexing('v3').urlNotifications.publish({
      auth: jwtClient,
      requestBody: {
        url: url,
        type: type // URL_UPDATED or URL_DELETED
      }
    });
    
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Get current indexing status
 */
async function getIndexingStatus(url) {
  try {
    const response = await google.indexing('v3').urlNotifications.getMetadata({
      auth: jwtClient,
      url: url
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Main execution
 */
async function batchIndex() {
  console.log('🚀 Alba Decor - Google Indexing API Force Re-Crawl');
  console.log('================================================\n');
  
  try {
    // Authorize JWT client
    console.log('🔐 Authenticating with Google...');
    await jwtClient.authorize();
    console.log('✅ Authentication successful!\n');
    
    // Construct URL list
    const urls = locationSlugs.map(slug => 
      `https://albadecor.co.uk/locations/${slug}`
    );
    
    console.log(`📍 Found ${urls.length} location pages to index\n`);
    
    // Process each URL
    let successCount = 0;
    let failCount = 0;
    
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const locationName = locationSlugs[i]
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      
      process.stdout.write(`[${i + 1}/${urls.length}] ${locationName}... `);
      
      const result = await notifyGoogle(url);
      
      if (result.success) {
        console.log(`✅ Pinged (Status: ${result.status})`);
        successCount++;
      } else {
        console.log(`❌ Failed: ${result.error}`);
        failCount++;
      }
      
      // Rate limiting: wait 1 second between requests
      if (i < urls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log('\n================================================');
    console.log('📊 RESULTS:');
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log(`   📈 Total: ${urls.length}`);
    console.log('\n💡 NEXT STEPS:');
    console.log('   1. Check Google Search Console > URL Inspection');
    console.log('   2. Monitor "Crawl Stats" for spike in activity');
    console.log('   3. Expect re-indexing within 24-48 hours');
    console.log('   4. Track CTR improvements in GSC Performance report');
    console.log('\n🎯 TARGET: Position 39 → Position 8 | CTR 0.2% → 5%');
    
  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error('\n📋 Troubleshooting:');
    console.error('   1. Verify service account has "Owner" role in GSC');
    console.error('   2. Check API is enabled in Google Cloud Console');
    console.error('   3. Ensure service-account.json is valid');
    process.exit(1);
  }
}

// Execute
batchIndex();
