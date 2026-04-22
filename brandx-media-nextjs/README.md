# BrandXMedia - Premium Digital Agency Website

A visually stunning, high-converting luxury digital agency website with advanced 3D anti-gravity animations and a fully functional backend powered by Supabase.

![BrandXMedia](https://img.shields.io/badge/Next.js-14-black) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8) ![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e) ![Three.js](https://img.shields.io/badge/Three.js-3D-000000)

## ✨ Features

### Frontend
- **3D Anti-Gravity Hero Section**: Built with React Three Fiber and Drei
- **Smooth Scrolling**: Powered by Lenis for buttery-smooth scroll experience
- **Advanced Animations**: Framer Motion for UI transitions and scroll-triggered effects
- **Interactive Components**: Hover effects, parallax, and depth-based animations
- **Dark Theme**: Premium luxury aesthetic with glassmorphism and gradients
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

### Backend (Supabase)
- **Authentication**: Secure admin login with role-based access
- **Dynamic Content**: Services, projects, testimonials, and pricing from database
- **Contact Form**: Stores inquiries directly in Supabase
- **Admin Dashboard**: Full CRUD operations for all content
- **Real-time Updates**: Instant UI updates on data changes

### Performance
- **Lazy Loading**: 3D components loaded dynamically with Next.js dynamic imports
- **Image Optimization**: Next.js Image component with configured domains
- **Code Splitting**: Automatic bundle optimization
- **Fast Page Loads**: Optimized for production deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier works perfectly)

### Installation

1. **Clone the repository**
   ```bash
   cd brandx-media-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**

   a. Create a new project at [https://supabase.com](https://supabase.com)
   
   b. Once your project is ready, go to the SQL Editor and run the schema:
      - Open `schema.sql` from the root directory
      - Copy the entire contents
      - Paste into the Supabase SQL Editor and click "Run"
   
   c. Enable Email Authentication:
      - Go to Authentication → Providers
      - Enable "Email" provider
      - Disable "Confirm email" if you want instant access (optional)
   
   d. Create an admin user:
      - Go to Authentication → Users
      - Click "Add user" → "Create new user"
      - Enter email and password (you'll use these to log into the admin dashboard)

4. **Configure environment variables**

   Create a `.env.local` file in the `brandx-media-nextjs` directory:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

   You can find these values in:
   - Go to your Supabase project dashboard
   - Click on "Project Settings" (gear icon)
   - Go to "API" section
   - Copy "Project URL" and "anon public" key

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
brandx-media-nextjs/
├── app/
│   ├── admin/                 # Admin dashboard pages
│   │   ├── inquiries/         # Manage contact form submissions
│   │   ├── projects/          # CRUD for portfolio projects
│   │   ├── services/          # CRUD for services
│   │   ├── testimonials/      # CRUD for testimonials
│   │   ├── layout.tsx         # Admin layout with auth
│   │   └── page.tsx           # Admin dashboard overview
│   ├── globals.css            # Global styles and Tailwind
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Main homepage
├── components/
│   ├── About.tsx              # About section
│   ├── ContactForm.tsx        # Contact form with Supabase
│   ├── Hero3D.tsx             # 3D anti-gravity hero section
│   ├── Navbar.tsx             # Navigation bar
│   ├── Pricing.tsx            # Pricing plans section
│   ├── Services.tsx           # Services grid with animations
│   └── SmoothScroll.tsx       # Lenis smooth scroll wrapper
├── lib/
│   └── supabase/
│       └── client.ts          # Supabase client configuration
├── public/                    # Static assets
├── .env.local                 # Environment variables (not in git)
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

The website follows the "Kinetic Editorial" design system:

- **Color Palette**: Deep obsidian tones with electric blue accents
- **Typography**: Inter font family with editorial hierarchy
- **Spacing**: Extreme whitespace for premium feel
- **Effects**: Glassmorphism, gradients, and tonal layering
- **Animations**: Smooth cubic-bezier transitions `(0.23, 1, 0.32, 1)`

### Colors
- Surface: `#131313`
- Primary Container: `#2e5bff` (Electric Blue)
- On Surface: `#e2e2e2`
- On Surface Variant: `#c4c5d9`

## 🛠 Admin Dashboard

Access the admin dashboard at: `http://localhost:3000/admin`

### Features:
- **Secure Login**: Supabase Authentication
- **Services Management**: Add, edit, and delete services
- **Projects Management**: Manage portfolio with images
- **Testimonials**: Add client testimonials
- **Inquiries**: View contact form submissions

### Default Admin Credentials:
Use the email and password you created in Supabase Authentication.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click "Deploy"

### Environment Variables for Production

Make sure to add the same `.env.local` variables to your Vercel project settings.

## 📊 Database Schema

The following tables are created in Supabase:

- **services**: Title, description, icon
- **projects**: Title, problem, solution, result, image_url
- **testimonials**: Name, role, content
- **inquiries**: Name, email, message, status
- **pricing_plans**: Name, price, features (JSON), is_popular

Row Level Security (RLS) is enabled with:
- Public read access for services, projects, testimonials, pricing
- Public insert access for inquiries (contact form)
- Full authenticated user access for admin operations

## 🎯 Customization

### Updating Content

**Via Admin Dashboard** (Recommended):
- Login to `/admin`
- Navigate to the section you want to update
- Add, edit, or delete content

**Via Supabase Dashboard**:
- Go to your Supabase project
- Navigate to "Table Editor"
- Edit tables directly

### Changing 3D Scene

Edit `components/Hero3D.tsx`:
- Modify `FloatingCard` positions, rotations, and colors
- Adjust lighting in `HeroScene`
- Change animation speeds in `useFrame`

### Modifying Colors

Update `tailwind.config.js` in the `theme.extend.colors` section.

## 🔧 Troubleshooting

### 3D Scene Not Loading
- Check browser console for Three.js errors
- Ensure all dependencies are installed: `npm install`
- Verify WebGL is enabled in your browser

### Supabase Connection Issues
- Verify `.env.local` has correct URL and anon key
- Check Supabase project is active
- Ensure schema.sql was run successfully

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version: `node -v` (should be 18+)

## 📦 Dependencies

### Core
- Next.js 14 - React framework
- React 18 - UI library
- TypeScript - Type safety

### 3D & Animations
- Three.js - 3D graphics
- @react-three/fiber - React renderer for Three.js
- @react-three/drei - Useful helpers for R3F
- Framer Motion - Animation library
- @studio-freight/lenis - Smooth scrolling

### Backend
- @supabase/supabase-js - Supabase client

### Styling
- Tailwind CSS - Utility-first CSS
- Lucide React - Icons
- clsx & tailwind-merge - Class merging

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Support

For questions or issues:
1. Check the Troubleshooting section above
2. Review Supabase documentation: https://supabase.com/docs
3. Next.js documentation: https://nextjs.org/docs

## 🎉 Credits

Built with ❤️ using:
- Next.js
- Supabase
- Three.js
- Framer Motion
- Tailwind CSS

---

**BrandXMedia** - Curating digital excellence.
