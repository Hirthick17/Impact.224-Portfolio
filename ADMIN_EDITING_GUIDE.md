# How to Edit Content in Admin Interface - Complete Guide

**Last Updated:** 2026-01-08  
**Your Server:** http://localhost:3001/Impact.224-Portfolio

---

## 📋 Quick Overview

The admin interface allows you to edit all website content without touching code. Changes are saved to the Supabase database and appear instantly on your live website.

---

## 🚀 Step-by-Step Guide

### **Step 1: Access the Admin Interface**

1. Open your browser
2. Go to: **http://localhost:3001/Impact.224-Portfolio/admin**
3. You'll see the lock icon in the navigation bar - click it

**Login Credentials:**
- Email: `admin@demo.com`
- Password: `password`

---

### **Step 2: View the Control Console (Dashboard)**

After logging in, you'll see the **CONTROL CONSOLE** with various "Engine Rooms":

```
┌─────────────────────────────────────┐
│        CONTROL CONSOLE              │
├─────────────────────────────────────┤
│  📄 LANDING PAGE                    │
│  💰 PRICING ENGINE                  │
│  📊 PROJECT PORTFOLIO               │
│  📝 ABOUT SECTION                   │
│  🛠️ SERVICE MODULES                 │
│  📰 GROWTH BLOG                     │
└─────────────────────────────────────┘
```

Each card represents a different page you can edit.

**Dashboard Features:**
- **STATUS**: Shows "ONLINE" when system is operational
- **PAGES**: Number of pages you can edit (12)
- **ACTIVITY**: System activity percentage (99.9%)
- **USERS**: Concurrent admin users (1 - you!)

---

### **Step 3: Select a Page to Edit**

Click on any engine room card to edit that page. For example:

**Pricing Engine** → Edits the `/pricing` page  
**Landing Page** → Edits the home page  
**Project Portfolio** → Edits the `/projects` page

---

### **Step 4: Use the Editor Interface**

Once you click a page, you'll see the editor with:

**Left Sidebar - Sections:**
- Lists all editable sections of the page
- Click any section to view its fields
- Example: "Page Header", "Pricing Tiers", "Features"

**Main Area - Fields:**
- Shows all editable fields for the selected section
- Different field types:
  - **Text**: Simple text input
  - **HTML**: Rich text editor
  - **Image**: Upload images
  - **List**: Add/remove items

**Top Right:**
- **"Publish Draft"** button - Click to save your changes
- **"Back to Console"** button - Return to dashboard

---

### **Step 5: Edit Content**

**Example: Changing the Pricing Page Subtitle**

1. Click on **"Pricing Engine"** from dashboard
2. The left sidebar shows sections:
   - 📄 Page Header ← Click this
   - 💰 Pricing & Packages
   - ... more sections
3. In the main area, you'll see fields:
   - **Page Title**: "PRICING & PACKAGES"
   - **Page Subtitle**: "Scale Your Business Profits"
4. Click in the "Page Subtitle" field
5. Edit the text (e.g., add " - Updated Demo")
6. Your change: `"Scale Your Business Profits - Updated Demo"`

---

### **Step 6: Save Your Changes**

1. Click the **"Publish Draft"** button in the top right
2. You'll see a yellow notification: ✓ **Draft saved successfully!**
3. Your changes are now saved to the database

**Behind the Scenes (Console Logs):**
If you open browser console (F12), you'll see:
```
🎨 [ADMIN UI] Content change initiated
💾 [STORAGE] Preparing to save to database...
🗄️ [DATABASE] Starting upsert operation...
🔄 [DATABASE] Cache invalidated for pricing
✅ [DATABASE] Update complete!
✅ [STORAGE] Successfully saved to database
```

---

### **Step 7: Verify Your Changes**

**Method 1: Navigate Directly**
1. Open a new tab
2. Go to the live page: **http://localhost:3001/Impact.224-Portfolio/pricing**
3. You'll see your updated content!

**Method 2: Use Navigation**
1. Click "Back to Console" in the admin
2. Click the Impact.224 logo to go to the home page
3. Navigate to the page you edited using the menu

**Example Result:**
The pricing page now shows:
```
Scale Your Business Profits - Updated Demo
```

---

## 📊 Page Editing Reference

| Engine Room | Edits This Page | Example Fields |
|-------------|----------------|----------------|
| **Landing Page** | `/` (Home) | Hero title, tagline, CTA buttons |
| **About Section** | `/about` | Mission, vision, team info |
| **Service Modules** | `/services` | Service cards, descriptions |
| **Pricing Engine** | `/pricing` | Pricing tiers, features, prices |
| **Project Portfolio** | `/projects` | Project titles, images, stats |
| **Growth Blog** | `/blog` | Blog posts, categories |

---

## 🎯 Common Editing Tasks

### **Update a Title**
1. Go to the relevant page engine
2. Click "Page Header" section
3. Find "Page Title" field
4. Type new title
5. Click "Publish Draft"

### **Change an Image**
1. Navigate to the section with the image
2. Click "Choose File" next to the image field
3. Select your image (MAX 2MB for most fields)
4. Click "Publish Draft"

### **Edit Rich Text (HTML fields)**
1. Click in the HTML field
2. You can write plain text or use HTML tags
3. Click "Publish Draft"

### **Add/Edit a List Item**
1. For fields that support multiple items
2. Click "Add Item" or edit existing
3. Fill in the details
4. Click "Publish Draft"

---

## ⚡ Pro Tips

### **1. Changes are Instant**
- Once you click "Publish Draft", changes go live immediately
- No need to rebuild or redeploy
- Refresh the frontend page to see updates

### **2. Multiple Sections**
- Some pages have many sections (e.g., Projects has 4)
- Make sure to edit ALL relevant sections
- Example: Projects has `project1`, `project2`, `project3` sections

### **3. Data Validation**
- Some fields have character limits
- Images have size limits (usually 2MB)
- The system will warn you if something is wrong

### **4. Undo Changes**
- If you make a mistake, just edit the field again
- Re-type the correct content
- Click "Publish Draft" again

### **5. Console Logging**
- Open browser console (F12) to see detailed logs
- Helps debug if something doesn't save
- Shows exactly when data hits the database

---

## 🔍 Troubleshooting

### **Changes Not Appearing?**

**Solution 1: Hard Refresh**
- Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- This clears the cache and reloads the page

**Solution 2: Check Console Logs**
- Press F12 to open developer tools
- Look for the 3-stage logging (🎨 → 💾 → 🗄️)
- If you don't see all 3 stages, there's an issue

**Solution 3: Check Supabase**
- Go to your Supabase dashboard
- Open Table Editor → `cms_content`
- Find the row for your page (e.g., `page_id = 'pricing'`)
- Check the `updated_at` timestamp

### **Can't See All Sections?**

Some pages need complete data for all sections:
- **Projects**: Needs `pageHeader`, `project1`, `project2`, `project3`
- If sections are missing, some content won't display

**Fix:**
Run the seed script to fill in missing data:
```bash
npm run seed
```

Or visit: http://localhost:3001/Impact.224-Portfolio/seed

---

## 📱 Where Changes Appear

| You Edit... | It Updates... |
|-------------|---------------|
| **Pricing → Page Header** | Pricing page title/subtitle |
| **Pricing → Pricing Tiers** | Individual pricing cards |
| **Projects → project1** | First project card |
| **Projects → pageHeader** | Projects page title |
| **Home → Hero Section** | Homepage hero area |
| **Services → service1** | Service detail page 1 |

---

## 🎨 Field Types Explained

### **Text Fields**
- Plain text only
- Examples: Titles, names, short descriptions
- Character limits vary

### **HTML Fields**
- Supports HTML tags
- Examples: Long descriptions, formatted content
- Use `\n` for new lines in plain text mode

### **Image Fields**
- Upload: PNG, JPG, WEBP
- Max size: Usually 2MB
- Can use URLs or upload files

### **List Fields**
- Multiple items
- Add/remove with buttons
- Examples: Feature lists, bullet points

---

## 🚀 Quick Start Checklist

- [ ] Navigate to http://localhost:3001/Impact.224-Portfolio/admin
- [ ] Login with `admin@demo.com` / `password`
- [ ] Click an engine room (e.g., "Pricing Engine")
- [ ] Select a section from the left sidebar
- [ ] Edit a field in the main area
- [ ] Click "Publish Draft"
- [ ] See the ✓ success message
- [ ] Verify on the live page

---

## 📞 Need Help?

**Check your console logs:**
- Press F12
- Look for errors or warnings
- The 3-stage logging should appear on save

**Database verification:**
- Go to Supabase dashboard
- Check `cms_content` table
- Look for your `page_id` row

**Start fresh:**
- Visit `/seed` page to reset all content
- Or run `npm run seed` in terminal

---

**Remember:** Your server is on **port 3001**, not 3000!

**Admin URL:** http://localhost:3001/Impact.224-Portfolio/admin  
**Live Site:** http://localhost:3001/Impact.224-Portfolio

---

*Last verified: 2026-01-08 22:26 IST*  
*All systems operational ✅*
