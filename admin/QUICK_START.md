# 🚀 Quick Access Guide - Admin CMS

## Access the Admin Panel

### 1. Start Development Server
Your server is already running! If not:
```bash
npm run dev
```

### 2. Open Admin Login
Navigate to:
```
http://localhost:5173/#/admin/login
```

### 3. Login Credentials
- **Email**: `admin@demo.com`
- **Password**: (any password works in demo mode)

---

## 📍 Admin Routes

| Route | Description |
|-------|-------------|
| `/#/admin/login` | Login page |
| `/#/admin/dashboard` | Command hub with all modules |
| `/#/admin/editor/home` | Edit Home page |
| `/#/admin/editor/about` | Edit About page |
| `/#/admin/editor/services` | Edit Services page |
| `/#/admin/editor/pricing` | Edit Pricing page |
| `/#/admin/editor/blog` | Edit Blog page |

---

## ✨ What You Can Edit

### Home Page
- Hero tagline, headline, description
- Background image
- 3 trust metric stats

### About Page
- Company narrative
- Performance stats
- Promise quote
- Team members (4 profiles)

### Services Page
- Page header
- 3 service modules (Personal Branding, Video Editing, Website Development)

### Pricing Page
- Pricing header
- Tier configurations for each service

### Blog Page
- Page header
- Blog post metadata

---

## 🎯 Quick Tips

1. **Real-Time Sync**: Open the user-facing page in another tab to see changes instantly
2. **Save Changes**: Click "Publish Draft" button in the toolbar
3. **Navigate Sections**: Use the yellow sidebar to jump between sections
4. **Upload Images**: Click the upload area, max 2MB (PNG, JPG, WEBP)
5. **Logout**: Click "Terminate Session" in the dashboard

---

## 🎨 Design Features

- ✅ Same brutalist design as user-facing site
- ✅ Dark theme with yellow accents
- ✅ Inter font throughout
- ✅ Smooth transitions and hover effects
- ✅ Responsive layout

---

## 📝 Notes

- Data stored in browser LocalStorage
- Changes persist across sessions
- Cross-tab sync works in modern browsers
- Demo mode - no real authentication required

---

**Ready to edit your content!** 🎉
