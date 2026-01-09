# Impact 224 Admin CMS Interface

## 🚀 Quick Start

### Accessing the Admin Panel

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the admin login:**
   ```
   http://localhost:5173/#/admin/login
   ```

3. **Login with demo credentials:**
   - Email: `admin@demo.com`
   - Password: (any password)

## 📋 Features

### ✅ Complete Admin CMS
- **Authentication Layer** with demo sandbox mode
- **Dashboard** with health monitoring and module navigation
- **Universal Editor** for all pages (Home, About, Services, Pricing, Blog)
- **Real-Time Sync** across tabs using BroadcastChannel API
- **Schema-Driven** field rendering
- **Brutalist Design** matching the user-facing site

### 📄 Editable Pages

1. **Home** (`/admin/editor/home`)
   - Hero Module (tagline, headline, description, background image)
   - Trust Metrics (3 stat pairs)

2. **About** (`/admin/editor/about`)
   - Narrative (heading, sub-heading, vision, brand image)
   - Performance (3 stat pairs)
   - Promise (quote, author, promise image)
   - Personnel (team header, 4 member profiles)

3. **Services** (`/admin/editor/services`)
   - Main Page Header
   - Personal Branding (title, pitch, image, pricing)
   - Video Editing (title, pitch, image, pricing)
   - Website Development (title, pitch, image, pricing)

4. **Pricing** (`/admin/editor/pricing`)
   - Pricing Header
   - Personal Branding Tiers
   - Video Editing Tiers
   - Website Development Tiers (Basic + Standard)

5. **Blog** (`/admin/editor/blog`)
   - Page Header (badge, headings, newsletter CTA)
   - Post: 1 (title, author, date, read time, featured image)

## 🎨 Design System

- **Fonts**: Inter (same as user-facing site)
- **Colors**: 
  - Background: `#000000` (black), `#1a1a1a` (dark gray)
  - Accent: `#FACC15` (yellow)
  - Text: `#FFFFFF` (white), `#9CA3AF` (gray)
- **Components**: Dark brutalist theme with rounded inputs and yellow accents

## 💾 Data Storage

- **LocalStorage**: CMS data stored with keys like `cms_data_home`, `cms_data_about`, etc.
- **Real-Time Sync**: Changes broadcast to all open tabs instantly
- **Persistence**: Data persists across browser sessions

## 🔧 Technical Architecture

### File Structure
```
admin/
├── types.ts                    # TypeScript types
├── utils/
│   └── storage.ts             # LocalStorage & sync utilities
├── schemas/
│   ├── homeSchema.ts          # Home page schema
│   ├── aboutSchema.ts         # About page schema
│   ├── servicesSchema.ts      # Services page schema
│   ├── pricingSchema.ts       # Pricing page schema
│   └── blogSchema.ts          # Blog page schema
├── components/
│   ├── FieldRenderer.tsx      # Schema-driven field renderer
│   ├── StickyToolbar.tsx      # Editor toolbar
│   ├── SectionSidebar.tsx     # Section navigation
│   └── fields/
│       ├── TextField.tsx      # Text input
│       ├── HTMLField.tsx      # Multi-line text
│       └── ImageUploadField.tsx # Image upload
└── pages/
    ├── Login.tsx              # Authentication
    ├── Dashboard.tsx          # Command hub
    └── Editor.tsx             # Universal editor
```

### Data Flow
```
User edits field → React state updates → Save to LocalStorage → 
Broadcast via BroadcastChannel → Other tabs receive update → 
Re-render with new data
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Login with `admin@demo.com`
- [ ] Navigate to dashboard
- [ ] Click each module card to open editor
- [ ] Edit text fields and verify changes
- [ ] Upload images and verify preview
- [ ] Click "Publish Draft" and verify toast notification
- [ ] Open user-facing page in another tab
- [ ] Verify changes sync in real-time

## 🚀 Deployment

Currently using LocalStorage for demo purposes. For production:

1. **Backend Integration**: Replace LocalStorage with API calls
2. **Database**: Store CMS data in PostgreSQL/MongoDB
3. **Authentication**: Implement proper auth (JWT, OAuth)
4. **Image Storage**: Use Cloudinary/AWS S3 for images
5. **Deployment Trigger**: Connect "Production Build" button to GitHub Actions

## 📝 Notes

- **Sandbox Mode**: Currently in demo mode with no real authentication
- **Image Storage**: Images converted to base64 and stored in LocalStorage (not production-ready)
- **Cross-Tab Sync**: Works in modern browsers with BroadcastChannel support
- **Schema-Driven**: Easy to add new fields by updating schemas

## 🎯 Future Enhancements

- [ ] Add more field types (date picker, color picker, etc.)
- [ ] Implement draft/publish workflow
- [ ] Add version history
- [ ] Add media library for image management
- [ ] Add bulk operations
- [ ] Add search/filter in editors
- [ ] Add keyboard shortcuts
- [ ] Add undo/redo functionality
