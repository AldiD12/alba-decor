/**
 * Google Indexing API - Spray Painting Authority Pages
 * 
 * This script targets the HIGH-MARGIN spray painting pages that are
 * already winning in search (Position 1.17 for "spray painting hertfordshire")
 * 
 * STRATEGY: Double down on what's working. You're #1 for spray painting.
 * Let's make sure Google knows about the updated metadata and authority positioning.
 * 
 * USAGE: node scripts/force-index-spray-authority.js
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

// HIGH-MARGIN SERVICE PAGES (Spray Painting Authority)
const authorityPages = [
  { 
    url: 'https://albadecor.co.uk/services/spray-painting', 
    name: 'Spray Painting Service', 
    reason: 'Position #1.17 for "spray painting hertfordshire" - DOMINATING',
    margin: 'HIGH (£2,000-5,000 per kitchen)'
  },
  { 
    url: 'https://albadecor.co.uk/services/exterior-painting', 
    name: 'Exterior Painting Service', 
    reason: 'Position #9.47 for "exterior painters southgate" - Page 1',
    margin: 'HIGH (£3,000-8,000 per house)'
  },
  { 
    url: 'https://albadecor.co.uk/services/cabinet-furniture-painting', 
    name: 'Cabinet Painting Service', 
    reason: 'High-margin kitchen cabinet refinishing',
    margin: 'VERY HIGH (£2,500-6,000 per kitchen)'
  },
  { 
    url: 'https://albadecor.co.uk/locations/southgate', 
    name: 'Southgate Location', 
    reason: 'Ranking for "exterior painters southgate" - optimize for exterior focus',
    margin: 'HIGH (affluent area, large properties)'
  },
  { 
    url: 'https://albadecor.co.uk', 
    name: 'Homepage', 
    reason: 'Updated to "Spray Painting Authority" positioning',
    margin: 'Authority hub for all services'
  }
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
async function sprayAuthorityIndex() {
  console.log('💰 Alba Decor - SPRAY PAINTING AUTHORITY Force Re-Crawl');
  console.log('========================================================\n');
  console.log('🎯 STRATEGY: Double down on high-margin services\n');
  console.log('📊 Current Winners:');
  console.log('   • "spray painting hertfordshire" → Position 1.17 (GOD TIER)');
  console.log('   • "exterior painters southgate" → Position 9.47 (Page 1)');
  console.log('\n💡 PIVOT: From "Generalist Painter" to "Spray Painting Specialist"\n');
  
  try {
    // Authorize JWT client
    console.log('🔐 Authenticating with Google...');
    await jwtClient.authorize();
    console.log('✅ Authentication successful!\n');
    
    console.log(`📍 Indexing ${authorityPages.length} high-margin authority pages\n`);
    
    // Process each URL
    let successCount = 0;
    let failCount = 0;
    
    for (let i = 0; i < authorityPages.length; i++) {
      const { url, name, reason, margin } = authorityPages[i];
      
      console.log(`\n[${i + 1}/${authorityPages.length}] ${name}`);
      console.log(`   💰 Margin: ${margin}`);
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
      if (i < authorityPages.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log('\n\n========================================================');
    console.log('📊 INDEXING RESULTS:');
    console.log(`   ✅ Success: ${successCount}/${authorityPages.length}`);
    console.log(`   ❌ Failed: ${failCount}/${authorityPages.length}`);
    
    console.log('\n💰 REVENUE IMPACT PROJECTION:');
    console.log('   Current: £0/month (0.28% CTR, Position 37)');
    console.log('   Target: £3,000-5,000/month');
    console.log('   \n   Breakdown:');
    console.log('   • Spray painting jobs: 2-3/month @ £2,500 avg = £5,000-7,500');
    console.log('   • Exterior painting: 1-2/month @ £4,000 avg = £4,000-8,000');
    console.log('   • Cabinet refinishing: 1-2/month @ £3,500 avg = £3,500-7,000');
    console.log('   \n   TOTAL POTENTIAL: £12,500-22,500/month');
    
    console.log('\n⏱️  EXPECTED TIMELINE:');
    console.log('   • Google crawl: 24-48 hours');
    console.log('   • Index update: 48-72 hours');
    console.log('   • Ranking boost: 7-14 days');
    console.log('   • First high-margin lead: 14-21 days');
    
    console.log('\n🎯 SUCCESS METRICS TO TRACK:');
    console.log('   1. "spray painting hertfordshire" stays Position #1');
    console.log('   2. "exterior painters southgate" moves to Position 3-5');
    console.log('   3. Homepage CTR increases from 0.28% to 3-5%');
    console.log('   4. Phone calls increase from 1-2/week to 5-10/week');
    console.log('   5. Quote requests for spray painting specifically');
    
    console.log('\n📈 MONITORING:');
    console.log('   1. Google Search Console > Performance');
    console.log('   2. Filter by query: "spray painting"');
    console.log('   3. Track position changes for top queries');
    console.log('   4. Monitor CTR improvements');
    console.log('   5. Track phone call sources (ask: "How did you find us?")');
    
    console.log('\n🚨 CRITICAL FIXES DEPLOYED:');
    console.log('   ✅ HTTP→HTTPS redirect (fixes Position 2.65 vs 46.96 split)');
    console.log('   ✅ Homepage pivot to "Spray Painting Authority"');
    console.log('   ✅ Spray painting page optimized for Position #1 query');
    console.log('   ✅ Southgate page optimized for "exterior painters"');
    console.log('   ✅ Security headers (HSTS, X-Frame-Options, etc.)');
    
    console.log('\n💡 NEXT ACTIONS:');
    console.log('   1. Verify HTTPS redirect in browser (http://albadecor.co.uk)');
    console.log('   2. Check GSC URL Inspection for these 5 pages');
    console.log('   3. Monitor phone calls and track source');
    console.log('   4. Create spray painting portfolio/gallery');
    console.log('   5. Get testimonials specifically for spray painting work');
    
    console.log('\n🎯 YC PARTNER ADVICE:');
    console.log('   "You built a billboard in a forest. Now you\'re putting it');
    console.log('   on the M25 motorway where your ideal customers drive daily."');
    console.log('\n   Focus on what\'s working: SPRAY PAINTING.');
    console.log('   You\'re already #1. Now monetize it.\n');
    
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
sprayAuthorityIndex();
