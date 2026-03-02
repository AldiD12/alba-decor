/**
 * Google Indexing API - Priority Locations Force Re-Crawl
 * 
 * This script targets the TOP 5 high-impression locations from GSC data:
 * - Southgate (highest impressions)
 * - Barnet (historic market town)
 * - Totteridge (prestigious village)
 * - Cuffley (rural character)
 * - Winchmore Hill (village charm)
 * 
 * USAGE: node scripts/force-index-priority.js
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'service-account.json');

if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error('❌ ERROR: service-account.json not found!');
  console.error('📋 Follow setup instructions in scripts/INDEXING_README.md');
  process.exit(1);
}

const keyFileContent = fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf8');
const key = JSON.parse(keyFileContent);

// TOP 5 PRIORITY LOCATIONS (based on GSC impression data)
const priorityPages = [
  { slug: 'southgate', name: 'Southgate', reason: 'Highest impressions in GSC' },
  { slug: 'barnet', name: 'Barnet', reason: 'Historic market town, high search volume' },
  { slug: 'totteridge', name: 'Totteridge', reason: 'Prestigious area, high-value clients' },
  { slug: 'cuffley', name: 'Cuffley', reason: 'Strong local presence' },
  { slug: 'winchmore-hill', name: 'Winchmore Hill', reason: 'Village charm, good engagement' }
];

// Add homepage for authority boost
const urls = [
  { url: 'https://albadecor.co.uk', name: 'Homepage', reason: 'Authority hub' },
  ...priorityPages.map(p => ({
    url: `https://albadecor.co.uk/locations/${p.slug}`,
    name: p.name,
    reason: p.reason
  }))
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
        type: type
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
 * Main execution
 */
async function priorityIndex() {
  console.log('🎯 Alba Decor - PRIORITY Location Force Re-Crawl');
  console.log('================================================\n');
  console.log('📊 Targeting TOP 5 locations from GSC data\n');
  
  try {
    // Authorize JWT client
    console.log('🔐 Authenticating with Google...');
    await jwtClient.authorize();
    console.log('✅ Authentication successful!\n');
    
    console.log(`📍 Indexing ${urls.length} priority pages\n`);
    
    // Process each URL
    let successCount = 0;
    let failCount = 0;
    
    for (let i = 0; i < urls.length; i++) {
      const { url, name, reason } = urls[i];
      
      console.log(`\n[${i + 1}/${urls.length}] ${name}`);
      console.log(`   📌 ${reason}`);
      process.stdout.write(`   🔄 Pinging Google... `);
      
      const result = await notifyGoogle(url);
      
      if (result.success) {
        console.log(`✅ SUCCESS (Status: ${result.status})`);
        successCount++;
      } else {
        console.log(`❌ FAILED: ${result.error}`);
        failCount++;
      }
      
      // Rate limiting: wait 1 second between requests
      if (i < urls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log('\n\n================================================');
    console.log('📊 INDEXING RESULTS:');
    console.log(`   ✅ Success: ${successCount}/${urls.length}`);
    console.log(`   ❌ Failed: ${failCount}/${urls.length}`);
    console.log('\n⏱️  EXPECTED TIMELINE:');
    console.log('   • Google crawl: 24-48 hours');
    console.log('   • Index update: 48-72 hours');
    console.log('   • Ranking impact: 7-14 days');
    console.log('\n📈 MONITORING:');
    console.log('   1. Google Search Console > URL Inspection');
    console.log('   2. Check "Last crawl" date for each URL');
    console.log('   3. Settings > Crawl Stats (look for spike)');
    console.log('   4. Performance report (track CTR & position)');
    console.log('\n🎯 SUCCESS METRICS:');
    console.log('   • CTR: 0.17% → 3-5%');
    console.log('   • Position: 39.9 → 8-12');
    console.log('   • Clicks: 1/day → 15-30/day');
    console.log('   • Revenue: £0 → £3,000-5,000/month');
    console.log('\n💡 NEXT ACTIONS:');
    console.log('   1. Verify in GSC URL Inspection tool');
    console.log('   2. Monitor position changes daily');
    console.log('   3. Track phone calls and quote requests');
    console.log('   4. Run full batch (all 10 locations) in 24 hours');
    
  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error('\n📋 Troubleshooting:');
    console.error('   1. Verify service account has "Owner" role in GSC');
    console.error('   2. Check API is enabled in Google Cloud Console');
    console.error('   3. Ensure service-account.json is valid');
    console.error('   4. See scripts/INDEXING_README.md for setup');
    process.exit(1);
  }
}

// Execute
priorityIndex();
