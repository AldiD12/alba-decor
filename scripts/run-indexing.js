#!/usr/bin/env node

/**
 * Interactive Google Indexing Script Runner
 * 
 * This script helps you choose the right indexing script for your situation.
 * Run with: node scripts/run-indexing.js
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Alba Decor - Google Indexing Script Selector\n');
console.log('Choose the right script for your situation:\n');

const scenarios = [
  {
    id: '1',
    name: '⭐ PRIORITY PAGES (Recommended)',
    description: 'Homepage + Top 5 locations (6 URLs)',
    script: 'force-index-priority.js',
    when: 'After major SEO changes, weekly maintenance',
    quota: '3% of daily limit'
  },
  {
    id: '2', 
    name: '💰 HIGH-MARGIN SERVICES',
    description: 'Spray painting + exterior + cabinet services (5 URLs)',
    script: 'force-index-spray-authority.js',
    when: 'After service updates, pricing changes',
    quota: '2.5% of daily limit'
  },
  {
    id: '3',
    name: '🌐 ALL LOCATIONS',
    description: 'All 10 location pages (10 URLs)',
    script: 'force-index.js', 
    when: 'Monthly maintenance, location updates',
    quota: '5% of daily limit'
  },
  {
    id: '4',
    name: '🚨 COMPLETE SITE (Emergency)',
    description: 'All pages - locations + services (15-20 URLs)',
    script: 'force-index-all.js',
    when: 'Algorithm updates, major issues',
    quota: '7-10% of daily limit'
  },
  {
    id: '5',
    name: '📊 CHECK STATUS ONLY',
    description: 'View current indexing status without running scripts',
    script: null,
    when: 'Monitor results, check quota usage',
    quota: '0% - no API calls'
  }
];

scenarios.forEach(scenario => {
  console.log(`${scenario.id}. ${scenario.name}`);
  console.log(`   📄 ${scenario.description}`);
  console.log(`   ⏰ When: ${scenario.when}`);
  console.log(`   📊 Quota: ${scenario.quota}\n`);
});

rl.question('Enter your choice (1-5): ', (choice) => {
  const selected = scenarios.find(s => s.id === choice);
  
  if (!selected) {
    console.log('❌ Invalid choice. Please run the script again.');
    rl.close();
    return;
  }

  console.log(`\n✅ Selected: ${selected.name}`);
  console.log(`📄 ${selected.description}`);
  
  if (selected.script === null) {
    console.log('\n📊 CURRENT STATUS CHECK:');
    console.log('1. Go to Google Search Console');
    console.log('2. Check Settings > Crawl Stats for recent activity');
    console.log('3. Use URL Inspection tool on key pages');
    console.log('4. Monitor Performance report for ranking changes');
    console.log('\n💡 TIP: Look for "Last crawl" date changes within 24-48 hours');
    rl.close();
    return;
  }

  rl.question('\n⚠️  Are you sure you want to proceed? (y/N): ', (confirm) => {
    if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
      console.log('❌ Cancelled. No API calls made.');
      rl.close();
      return;
    }

    console.log(`\n🚀 Running: ${selected.script}`);
    console.log('⏳ This may take 30-60 seconds...\n');

    try {
      execSync(`node scripts/${selected.script}`, { stdio: 'inherit' });
      
      console.log('\n✅ SCRIPT COMPLETED SUCCESSFULLY!');
      console.log('\n📋 NEXT STEPS:');
      console.log('1. Wait 24-48 hours for Google to re-crawl');
      console.log('2. Check Google Search Console > URL Inspection');
      console.log('3. Monitor Settings > Crawl Stats for activity spike');
      console.log('4. Track Performance report for ranking changes');
      console.log('5. Measure CTR improvements over 7-14 days');
      
    } catch (error) {
      console.error('\n❌ SCRIPT FAILED!');
      console.error('Error:', error.message);
      console.log('\n🔧 TROUBLESHOOTING:');
      console.log('1. Check scripts/INDEXING_README.md for setup');
      console.log('2. Verify service-account.json exists and is valid');
      console.log('3. Ensure service account has Owner role in GSC');
      console.log('4. Check Google Cloud Console API is enabled');
    }
    
    rl.close();
  });
});