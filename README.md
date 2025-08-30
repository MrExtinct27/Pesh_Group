# BuildCraft Construction Company Website

A modern, responsive construction company website built with Next.js 15, React 18, TypeScript, and Tailwind CSS. Features beautiful animations, professional design, and a comprehensive business showcase.

## 🚀 Features

### Design & User Experience
- **Modern Professional Design**: Clean, construction-focused aesthetic
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Custom Animations**: Fade-ins, slide-ups, floating elements, and hover effects
- **Gradient Themes**: Orange-to-red gradient matching construction industry colors

### Sections & Functionality
1. **Header Navigation**
   - Sticky navigation with mobile-responsive hamburger menu
   - Contact information in top bar
   - Smooth scroll navigation to sections
   - Professional logo and branding

2. **Hero Section**
   - Animated hero with construction-focused messaging
   - Statistics showcase (years of experience, projects completed)
   - Call-to-action buttons
   - Background image with overlay effects
   - Floating project cards with animations

3. **Services Section** (Similar to Regus structure)
   - 6 comprehensive construction services
   - Pricing information for each service
   - Feature highlights and descriptions
   - "Most Popular" service highlighting
   - Consultation call-to-action

4. **About Section**
   - Company story and history
   - Core values with icons and descriptions
   - Achievement statistics
   - Leadership team showcase
   - Company certifications and credentials

5. **Portfolio Section**
   - Filterable project gallery (All, Residential, Commercial, Industrial)
   - Project details including budget, timeline, and client information
   - High-quality project images
   - Animated filtering and layout transitions

6. **Consultation Section** (Similar to Regus expert consultation)
   - Professional consultation booking form
   - React Hook Form integration with validation
   - Project type and budget selection
   - Benefits of consultation highlighted
   - Success message handling

7. **Footer**
   - Company information and contact details
   - Service links and quick navigation
   - Social media integration
   - Business hours information
   - Legal links (Privacy Policy, Terms of Service)

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Next.js 15**: Latest Next.js with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animations and transitions
- **React Hook Form**: Form handling with validation
- **Lucide React**: Professional icon set
- **Custom CSS**: Additional styling for specialized animations
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Images**: Unsplash (high-quality construction/business images)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ (recommended 18.18.0 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd construction-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Brand Colors
The website uses an orange-to-red gradient theme. To customize colors, update the Tailwind configuration or modify the CSS variables in `globals.css`.

### Content Updates
- **Company Information**: Update in each component's content
- **Images**: Replace Unsplash URLs with your own professional images
- **Contact Details**: Update in Header and Footer components
- **Services**: Modify the services array in `ServicesSection.tsx`
- **Portfolio**: Update projects array in `PortfolioSection.tsx`

### Animations
All animations are built with Framer Motion and can be customized by modifying the motion components in each section.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with Header/Footer
│   └── page.tsx             # Main homepage with all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   └── sections/
│       ├── HeroSection.tsx        # Hero banner with animations
│       ├── ServicesSection.tsx    # Services showcase
│       ├── AboutSection.tsx       # Company information
│       ├── PortfolioSection.tsx   # Project gallery
│       └── ConsultationSection.tsx # Contact/booking form
```

## 🌟 Key Features Highlights

### Professional Design
- Construction industry-focused color scheme
- Professional typography with Inter font
- High-quality imagery and visual hierarchy
- Consistent branding throughout

### Interactive Elements
- Smooth scroll navigation
- Animated counters and statistics
- Hover effects on cards and buttons
- Mobile-friendly touch interactions

### Form Functionality
- Professional consultation booking form
- Client-side validation with error handling
- Success message with auto-reset
- Responsive form layout

### Performance Optimized
- Next.js optimization features
- Image optimization and lazy loading
- Efficient animations with Framer Motion
- Minimal bundle size with tree shaking

## 🚀 Deployment

The website can be deployed on any platform that supports Next.js:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**BuildCraft Construction Co.** - Building Your Dreams Into Reality Since 1999