# 🚀 Quick Reference - When to Use Each Script

## 📱 EMERGENCY HOTLINE
```bash
# Interactive script selector (RECOMMENDED)
node scripts/run-indexing.js
```

## ⚡ QUICK DECISIONS

### 🔥 "I just made SEO changes to my top pages"
```bash
node scripts/force-index-priority.js
```
**Pages:** Homepage + Top 5 locations (6 URLs)  
**Time:** 30 seconds  
**Quota:** 3% daily limit  

### 💰 "I updated my service pricing/descriptions"
```bash
node scripts/force-index-spray-authority.js
```
**Pages:** Spray painting + exterior + cabinet services (5 URLs)  
**Time:** 25 seconds  
**Quota:** 2.5% daily limit  

### 🗓️ "It's monthly maintenance time"
```bash
node scripts/force-index.js
```
**Pages:** All 10 location pages (10 URLs)  
**Time:** 60 seconds  
**Quota:** 5% daily limit  

### 🚨 "My rankings crashed - HELP!"
```bash
node scripts/force-index-all.js
```
**Pages:** Everything - locations + services (15-20 URLs)  
**Time:** 90 seconds  
**Quota:** 7-10% daily limit  

## 📅 RECOMMENDED SCHEDULE

| Day | Script | Reason |
|-----|--------|--------|
| **Monday** | `force-index-priority.js` | Start week with top pages |
| **Wednesday** | `force-index-spray-authority.js` | Mid-week service refresh |
| **Friday** | Check GSC results | Monitor improvements |
| **Monthly** | `force-index.js` | Complete location refresh |

## 🎯 RESULTS TIMELINE

- **24 hours:** Google receives notifications
- **48 hours:** Pages get re-crawled  
- **72 hours:** Index updates with new content
- **7-14 days:** Ranking improvements visible

## ⚠️ GOLDEN RULES

1. **Never** run multiple scripts same day
2. **Always** wait 24 hours between runs
3. **Check** Google Search Console after each run
4. **Track** position changes in Performance report
5. **Ask** callers "How did you find us?" to measure impact

## 🆘 TROUBLESHOOTING

**Script fails?**
1. Check `service-account.json` exists
2. Verify GSC permissions (Owner role)
3. Confirm API enabled in Google Cloud

**No results after 48 hours?**
1. Use GSC URL Inspection tool
2. Check Crawl Stats for activity
3. Verify pages are indexable (not blocked)

## 📞 SUCCESS METRICS

**Track these in Google Search Console:**
- Position improvements (target: 37 → 8-12)
- CTR increases (target: 0.28% → 3-5%)  
- Impression growth (already 2000% ✅)
- Click growth (target: 71 → 750+ clicks)

**Business metrics:**
- Phone calls per week
- Quote requests by service type
- Revenue from organic search
- Average job value