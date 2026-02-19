# Google Indexing API - Force Re-Crawl Setup

## Why This Matters

After implementing the "God Tier" SEO fixes (Click Magnet titles, star ratings, cluster interlinking, hyper-local hooks), Google's index still holds the OLD version of your pages. 

**Without force re-crawl:** 4-6 weeks wait  
**With Indexing API:** 24-48 hours

## Setup Instructions

### Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing project
3. Enable the **Web Search Indexing API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Indexing API"
   - Click "Enable"

### Step 2: Create Service Account

1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name it: `alba-decor-indexing`
4. Grant role: **Owner**
5. Click "Done"
6. Click on the service account you just created
7. Go to "Keys" tab
8. Click "Add Key" > "Create new key"
9. Choose **JSON** format
10. Download the JSON file
11. Rename it to `service-account.json`
12. Move it to the `scripts/` directory

### Step 3: Add Service Account to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property: `albadecor.co.uk`
3. Go to "Settings" (gear icon)
4. Click "Users and permissions"
5. Click "Add user"
6. Paste the service account email (from the JSON file, looks like: `alba-decor-indexing@project-id.iam.gserviceaccount.com`)
7. Grant permission: **Owner**
8. Click "Add"

### Step 4: Install Dependencies

```bash
npm install googleapis
```

### Step 5: Run the Script

```bash
node scripts/force-index.js
```

## Expected Output

```
🚀 Alba Decor - Google Indexing API Force Re-Crawl
================================================

🔐 Authenticating with Google...
✅ Authentication successful!

📍 Found 10 location pages to index

[1/10] Potters Bar... ✅ Pinged (Status: 200)
[2/10] Barnet... ✅ Pinged (Status: 200)
[3/10] Hadley Wood... ✅ Pinged (Status: 200)
...

================================================
📊 RESULTS:
   ✅ Success: 10
   ❌ Failed: 0
   📈 Total: 10

💡 NEXT STEPS:
   1. Check Google Search Console > URL Inspection
   2. Monitor "Crawl Stats" for spike in activity
   3. Expect re-indexing within 24-48 hours
   4. Track CTR improvements in GSC Performance report

🎯 TARGET: Position 39 → Position 8 | CTR 0.2% → 5%
```

## Monitoring Results

### In Google Search Console:

1. **URL Inspection Tool**
   - Test any location URL
   - Should show "Last crawl: [recent date]"
   - Click "Request Indexing" if needed

2. **Crawl Stats**
   - Settings > Crawl Stats
   - Look for spike in crawl requests
   - Should see increase within 24 hours

3. **Performance Report**
   - Track impressions, clicks, CTR, position
   - Compare before/after metrics
   - Expected timeline: 7-14 days for full impact

## Quota Limits

- **Standard:** 200 URLs per day
- **Current usage:** 10 URLs (5% of daily quota)
- **Request increase:** If you add more locations

## Troubleshooting

### Error: "Permission denied"
- Verify service account email is added to GSC as Owner
- Check that API is enabled in Google Cloud Console

### Error: "Invalid credentials"
- Ensure `service-account.json` is in the correct location
- Verify JSON file is not corrupted

### Error: "Quota exceeded"
- You've hit the 200 URLs/day limit
- Wait 24 hours or request quota increase

## Alternative: Manual URL Inspection

If you can't set up the API, you can manually request indexing:

1. Go to Google Search Console
2. Use URL Inspection tool
3. Enter each location URL
4. Click "Request Indexing"
5. Repeat for all 10 locations

**Downside:** Manual process, slower, limited to 10-20 per day

## Files

- `force-index.js` - Main script
- `service-account.json` - Your credentials (DO NOT COMMIT TO GIT!)
- `.gitignore` - Should include `service-account.json`

## Security Note

⚠️ **NEVER commit `service-account.json` to Git!**

Add to `.gitignore`:
```
scripts/service-account.json
```
