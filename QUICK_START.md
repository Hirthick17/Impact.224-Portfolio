# Quick Start Guide - Supabase Integration

## ⚡ Quick Setup (5 minutes)

### Step 1: Run SQL Schema in Supabase
1. Open [Supabase Dashboard](https://app.supabase.com)
2. Go to **SQL Editor**
3. Copy all content from `supabase-schema.sql`
4. Paste and click **RUN**
5. ✅ Verify `cms_content` table appears in **Table Editor**

### Step 2: Verify Environment Variables
Your `.env.local` should have:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> **Note:** If you just added these, restart the dev server:
> ```bash
> # Stop server (Ctrl+C) then:
> npm run dev
> ```

### Step 3: Seed the Database
1. Open http://localhost:3000/Impact.224-Portfolio
2. Open browser console (F12)
3. Run:
```javascript
await seedDatabase()
```

Expected output:
```
🌱 Starting database seeding...
Seeding home...
Seeding about...
...
✅ Database seeding complete!
```

### Step 4: Test It Works
- Navigate to different pages (Home, Services, Projects, etc.)
- Content should load from Supabase
- Open admin panel at `/admin/login`
- Edit some content and save
- Verify changes appear in Supabase dashboard

---

## 🔧 Troubleshooting

### Error: "Missing Supabase environment variables"
**Cause:** Vite hasn't loaded `.env.local` yet  
**Fix:** Restart the dev server (Ctrl+C, then `npm run dev`)

### Error: Content not loading
**Cause:** Database not seeded yet  
**Fix:** Run `await seedDatabase()` in browser console

### Error: "PGRST116" in console
**Cause:** SQL schema not run yet  
**Fix:** Run the SQL schema in Supabase dashboard first

### Real-time updates not working
**Cause:** Realtime not enabled in Supabase  
**Fix:** Go to Supabase → Database → Replication → Enable for `cms_content` table

---

## 📝 Available Console Commands

Once the app loads, these commands are available in browser console:

```javascript
// Seed database with default content
await seedDatabase()

// Migrate existing localStorage data to Supabase
await migrateToSupabase()
```

---

## ✅ Verification Checklist

- [ ] SQL schema run in Supabase
- [ ] Environment variables set in `.env.local`
- [ ] Dev server restarted after adding env vars
- [ ] Database seeded with `seedDatabase()`
- [ ] All pages load content correctly
- [ ] Admin panel can edit and save content
- [ ] Changes appear in Supabase dashboard

---

## 🎯 What Happens Now

### Content Loading
1. Page loads → Shows default content immediately
2. Fetches from Supabase in background (cached for 5 min)
3. Updates content when data arrives
4. Subscribes to real-time updates

### Content Saving (Admin Panel)
1. Edit content → Click Save
2. Saves to Supabase database
3. Also saves to localStorage (backup)
4. Broadcasts to all open tabs
5. Real-time subscriptions update all clients

---

## 📚 Full Documentation

- **Setup Guide:** `SUPABASE_SETUP.md`
- **Walkthrough:** See artifacts panel
- **SQL Schema:** `supabase-schema.sql`

Need help? Check the troubleshooting section above or review the full documentation.
