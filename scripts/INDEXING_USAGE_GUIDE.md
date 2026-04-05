# Google Indexing Scripts - Usage Guide

## 📋 AVAILABLE SCRIPTS

You have 4 indexing scripts, each for different scenarios:

### 1. `force-index-priority.js` ⭐ **MOST IMPORTANT**
**When to use:** After major SEO changes to top-performing pages
**Pages:** Homepage + Top 5 locations (Southgate, Barnet, Totteridge, Cuffley, Winchmore Hill)
**Usage:** `node scripts/force-index-priority.js`
**Quota:** 6 URLs (3% of daily limit)

### 2. `force-index-spray-authority.js` 💰 **HIGH-MARGIN FOCUS**
**When to use:** After updating service pages or pricing
**Pages:** Spray painting, exterior painting, cabinet painting services + Southgate
**Usage:** `node scripts/force-index-spray-authority.js`
**Quota:** 5 URLs (2.5% of daily limit)

### 3. `force-index.js` 🌐 **COMPLETE COVERAGE**
**When to use:** Monthly maintenance or after site-wide changes
**Pages:** All 10 location pages
**Usage:** `node scripts/force-index.js`
**Quota:** 10 URLs (5% of daily limit)

### 4. `force-index-all.js` 🚀 **NUCLEAR OPTION**
**When to use:** Major site redesign or algorithm updates
**Pages:** All pages (locations + services + homepage)
**Usage:** `node scripts/force-index-all.js`
**Quota:** 15-20 URLs (7-10% of daily limit)

## ⏰ WHEN TO USE EACH SCRIPT

### 🔥 IMMEDIATE (Within 24 hours)
**Trigger:** Critical changes that affect rankings
- Title tag changes
- Meta description updates
- Schema markup additions
- URL structure changes
- Major content updates

**Script to use:** `force-index-priority.js`
**Why:** Gets your most important pages re-crawled fast

### 📅 WEEKLY (Every Monday)
**Trigger:** Regular maintenance and monitoring
- New blog posts published
- Service page updates
- Pricing changes
- New testimonials added

**Script to use:** `force-index-spray-authority.js`
**Why:** Keeps high-margin service pages fresh

### 🗓️ MONTHLY (First Monday of month)
**Trigger:** Comprehensive site maintenance
- Location page content updates
- Seasonal content changes
- New service areas added
- Performance optimizations

**Script to use:** `force-index.js`
**Why:** Ensures all location pages stay current

### 🚨 EMERGENCY (Algorithm updates or major issues)
**Trigger:** Google algorithm changes or ranking drops
- Core algorithm updates
- Major competitor changes
- Sudden ranking drops
- Site-wide technical issues

**Script to use:** `force-index-all.js`
**Why:** Forces complete site re-evaluation

## 📊 QUOTA MANAGEMENT

**Daily Limit:** 200 URLs per day
**Current Usage:**
- Priority script: 6 URLs (3%)
- Spray authority: 5 URLs (2.5%)
- All locations: 10 URLs (5%)
- Complete site: 20 URLs (10%)

**Safe Usage Pattern:**
- Monday: Priority script (6 URLs)
- Wednesday: Spray authority (5 URLs)
- Friday: Check results, run additional if needed
- Monthly: Full location script (10 URLs)

**Total Weekly:** 11-21 URLs (5-10% of quota)

## 🎯 RECOMMENDED SCHEDULE

### Week 1 (After Major Changes)
```bash
# Monday - Critical pages
node scripts/force-index-priority.js

# Wednesday - High-margin services
node scripts/force-index-spray-authority.js

# Friday - Check GSC for results
```

### Week 2-3 (Monitoring Phase)
```bash
# Monday only - Priority pages
node scripts/force-index-priority.js

# Check Google Search Console daily
# Monitor position changes
```

### Week 4 (Monthly Maintenance)
```bash
# Monday - All locations
node scripts/force-index.js

# Wednesday - Services (if needed)
node scripts/force-index-spray-authority.js
```

## 🔍 HOW TO MONITOR RESULTS

### 1. Google Search Console (24-48 hours)
- Go to URL Inspection tool
- Test any indexed URL
- Look for "Last crawl" date change
- Check "Coverage" report for indexing status

### 2. Crawl Stats (48-72 hours)
- Settings > Crawl Stats
- Look for spike in crawl requests
- Monitor pages crawled per day

### 3. Performance Report (7-14 days)
- Track impressions, clicks, CTR, position
- Filter by specific queries
- Compare before/after metrics

## ⚠️ IMPORTANT WARNINGS

### DON'T Overuse Scripts
- **Never** run multiple scripts same day
- **Never** exceed 50 URLs per day
- **Never** run scripts for minor changes

### DO Monitor Results
- **Always** check GSC after 24 hours
- **Always** track position changes
- **Always** measure CTR improvements

### Emergency Situations Only
- Site completely de-indexed
- Major algorithm penalty
- Competitor suddenly outranking you
- Technical issues affecting all pages

## 🚀 QUICK REFERENCE

### Most Common Scenario: "I updated my homepage and top location pages"
```bash
node scripts/force-index-priority.js
```

### Service Update: "I changed pricing on spray painting services"
```bash
node scripts/force-index-spray-authority.js
```

### Monthly Maintenance: "It's been a month since last full indexing"
```bash
node scripts/force-index.js
```

### Crisis Mode: "My rankings dropped across the board"
```bash
node scripts/force-index-all.js
```

## 📞 SUPPORT

If scripts fail or you need help:
1. Check `scripts/INDEXING_README.md` for setup
2. Verify service account permissions in GSC
3. Check Google Cloud Console API quotas
4. Review error messages in terminal output

**Remember:** These scripts are powerful tools. Use them strategically, not reactively.