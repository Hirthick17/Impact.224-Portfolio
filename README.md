<div align="center">
  <h1>⚡ Impact 224</h1>
  
  <p>
    <strong>A Dynamic Portfolio & CMS Platform for Digital Growth Agencies</strong>
  </p>

  <p>
    <a href="https://github.com/Hirthick17/Impact.224-Portfolio/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
    <a href="https://impact-224-portfolio.vercel.app"><img src="https://img.shields.io/badge/demo-live-brightgreen.svg" alt="Live Demo"></a>
    <a href="https://github.com/Hirthick17/Impact.224-Portfolio"><img src="https://img.shields.io/github/stars/Hirthick17/Impact.224-Portfolio?style=social" alt="GitHub Stars"></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react" alt="React"></a>
    <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-Powered-3ECF8E?logo=supabase" alt="Supabase"></a>
  </p>
</div>

<br />

## 🧐 About

**The Problem:** Most digital agencies struggle with outdated portfolios that require developer intervention for every content update. Static websites become stale, and managing client showcases becomes a bottleneck.

**The Solution:** Impact 224 is a fully dynamic portfolio platform with a built-in headless CMS powered by Supabase. Update your entire website—hero sections, services, projects, blog posts, pricing—through an intuitive admin interface. No code required. Changes go live instantly with real-time synchronization.

Built for **digital growth agencies** who need to move fast, showcase results, and maintain a premium brand presence without technical overhead.

---

## 📸 Demo

![Portfolio Demo](C:/Users/hirth/.gemini/antigravity/brain/ce9f387c-2cb2-4e06-aebb-962e5afee40f/portfolio_demo_1768488971344.webp)

*Watch the full demo: Navigate through services, projects, and dynamic content—all powered by real-time CMS updates.*

**🔗 Live Site:** [https://impact-224-portfolio.vercel.app](https://impact-224-portfolio.vercel.app)

---

## ✨ Features

* 🎨 **Premium Design System** – Modern, dark-mode-ready UI with smooth animations and glassmorphism effects
* ⚡ **Real-Time CMS** – Edit content through admin panel; changes sync instantly across all pages
* 🗄️ **Supabase Backend** – Scalable PostgreSQL database with Row Level Security and real-time subscriptions
* 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile with TailwindCSS
* 🚀 **Lightning Fast** – Vite build system with optimized bundle splitting and lazy loading
* 🔐 **Secure Admin Panel** – Protected routes with environment-based authentication
* 📝 **Dynamic Blog System** – Full markdown support with SEO optimization and category filtering
* 💼 **Project Showcase** – Client case studies with before/after metrics and image galleries
* 💰 **Pricing Management** – Editable service tiers and pricing tables through CMS
* 🌐 **SEO Optimized** – Meta tags, Open Graph, and structured data for better discoverability
* 📧 **Newsletter Integration** – EmailJS-powered contact forms and newsletter subscriptions
* 🎯 **Type-Safe** – Full TypeScript implementation with strict type checking

---

## 🛠️ Tech Stack

### Frontend
* [React 19.2.3](https://react.dev/) – UI library with latest concurrent features
* [TypeScript 5.8.2](https://www.typescriptlang.org/) – Type-safe development
* [React Router 7.10.1](https://reactrouter.com/) – Client-side routing
* [TailwindCSS](https://tailwindcss.com/) – Utility-first styling
* [Lucide React](https://lucide.dev/) – Beautiful icon library
* [Vite 6.2.0](https://vitejs.dev/) – Next-generation build tool

### Backend & Services
* [Supabase](https://supabase.com/) – PostgreSQL database, authentication, and real-time subscriptions
* [EmailJS](https://www.emailjs.com/) – Email service for contact forms

### Deployment
* [Vercel](https://vercel.com/) – Production hosting with automatic deployments
* [GitHub Pages](https://pages.github.com/) – Alternative static hosting

---

## 🏁 Getting Started

### Prerequisites

* **Node.js** >= v16.x
* **npm** or **yarn**
* **Supabase Account** (free tier available)

### Installation

```bash
# Clone the repository
git clone https://github.com/Hirthick17/Impact.224-Portfolio.git
cd Impact.224-Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

> **Get your Supabase credentials:**
> 1. Create a project at [supabase.com](https://supabase.com)
> 2. Go to **Settings** → **API**
> 3. Copy the **Project URL** and **anon/public key**

### Database Setup

1. Open your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run the schema file:

```bash
# Copy contents of supabase-schema.sql and execute in Supabase SQL Editor
```

4. Enable **Realtime** for the `cms_content` table:
   - Go to **Database** → **Replication**
   - Enable replication for `cms_content`

### Seed Database

```bash
# Start the development server
npm run dev

# Open browser console at http://localhost:5173
# Run the seeding command:
await seedDatabase()
```

---

## 🚀 Usage

### Development

```bash
npm run dev
# Opens at http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📂 Project Structure

```
Impact.224-Portfolio/
├── admin/                    # CMS Admin Panel
│   ├── components/          # Admin UI components
│   ├── schemas/             # Content schemas & validation
│   ├── types.ts             # TypeScript interfaces
│   └── utils/               # Storage & helper functions
├── components/              # Reusable UI components
│   ├── Layout.tsx           # Main layout wrapper
│   └── UIComponents.tsx     # Design system components
├── context/                 # React Context providers
│   ├── CMSContext.tsx       # Content management state
│   └── ThemeContext.tsx     # Dark mode & theming
├── lib/                     # Core services
│   ├── supabase.ts          # Supabase client config
│   └── cms-service.ts       # CMS CRUD operations
├── pages/                   # Route components
│   ├── Home.tsx             # Landing page
│   ├── Services.tsx         # Services showcase
│   ├── Projects.tsx         # Portfolio gallery
│   ├── Blog.tsx             # Blog listing
│   ├── About.tsx            # About page
│   ├── Contact.tsx          # Contact form
│   └── Pricing.tsx          # Pricing tables
├── scripts/                 # Utility scripts
│   ├── seed-database.ts     # Database seeding
│   └── migrate-to-supabase.ts
├── public/                  # Static assets
├── .env.local               # Environment variables (not committed)
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

---

## 🎨 Admin Panel

Access the admin interface at `/admin/login` to manage all content:

### Editable Sections

* **Home Page** – Hero, services intro, why choose us, projects showcase, blog highlights
* **Services** – Service details, pricing, features, testimonials
* **Projects** – Case studies, metrics, images, client testimonials
* **Blog** – Posts, categories, SEO metadata, featured images
* **Pricing** – Service tiers, pricing tables, feature lists
* **About** – Team info, mission, values, statistics
* **Global** – Footer, newsletter CTA, contact information

### How It Works

1. Navigate to any page section in the admin panel
2. Edit content using the intuitive form interface
3. Click **Save** – changes are instantly pushed to Supabase
4. All connected clients receive real-time updates via WebSocket subscriptions
5. Content is cached for 5 minutes to optimize performance

---

## 🛣️ Roadmap

- [x] Core CMS functionality with Supabase integration
- [x] Real-time content synchronization
- [x] Admin panel with full CRUD operations
- [x] Blog system with markdown support
- [x] Project showcase with case studies
- [x] Dark mode support
- [x] Responsive design for all devices
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics dashboard
- [ ] Image upload & optimization
- [ ] Role-based access control (RBAC)
- [ ] Version history & content rollback
- [ ] A/B testing for landing pages

---

## 📖 Documentation

* **[Quick Start Guide](QUICK_START.md)** – Get up and running in 5 minutes
* **[Supabase Setup](SUPABASE_SETUP.md)** – Detailed database configuration
* **[Admin Editing Guide](ADMIN_EDITING_GUIDE.md)** – How to use the CMS
* **[Deployment Guide](.agent/workflows/deploy.md)** – Deploy to production

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Hirthick17**

* GitHub: [@Hirthick17](https://github.com/Hirthick17)
* Portfolio: [https://impact-224-portfolio.vercel.app](https://impact-224-portfolio.vercel.app)

---

## 🙏 Acknowledgments

* [Supabase](https://supabase.com/) for the amazing backend-as-a-service platform
* [Vercel](https://vercel.com/) for seamless deployment
* [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
* [Lucide](https://lucide.dev/) for beautiful open-source icons
* [Unsplash](https://unsplash.com/) for high-quality stock images

---

<div align="center">
  <p>Built with ❤️ for digital agencies who demand excellence</p>
  <p>
    <a href="https://impact-224-portfolio.vercel.app">View Live Demo</a> •
    <a href="https://github.com/Hirthick17/Impact.224-Portfolio/issues">Report Bug</a> •
    <a href="https://github.com/Hirthick17/Impact.224-Portfolio/issues">Request Feature</a>
  </p>
</div>
