# Website Setup Guide

## New Features Added ✨

We've successfully implemented all four requested features:

### 1. 🗺️ Google Maps Integration
- **Portfolio with Interactive Map**: Projects are now displayed on an interactive Google Maps with custom markers
- **Location-based Filtering**: All projects have real coordinates for accurate positioning
- **Custom Markers**: Beautiful custom markers with project information popups
- **Switch Views**: Toggle between grid view and map view

### 2. 📅 Schedule Visit Form
- **Comprehensive Form**: Date/time picker, project type selection, contact details
- **Form Validation**: Real-time validation with proper error handling
- **API Integration**: Connected to `/api/schedule-visit` endpoint
- **Success/Error States**: Beautiful feedback for form submissions

### 3. 📈 Company Timeline
- **Interactive Timeline**: 25 years of company journey (2000-2024)
- **Expandable Sections**: Click to view detailed achievements for each year
- **Key Milestones**: Revenue milestones and growth indicators
- **Future Vision**: 2030 goals and expansion plans

### 4. ❓ FAQ Section
- **Categorized Questions**: Projects, Timeline, Pricing, Quality & Safety
- **Accordion UI**: Smooth expand/collapse animations
- **Construction-Specific**: Tailored questions for construction business
- **Contact CTA**: Direct path to expert consultation

## Setup Instructions

### Google Maps Setup (Required for Map View)

1. **Get Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.developers.google.com/)
   - Create a new project or select existing one
   - Enable "Maps JavaScript API"
   - Create credentials (API Key)
   - Optionally restrict the key to your domain

2. **Add Environment Variable:**
   Create a `.env.local` file in the project root:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Without API Key:**
   - Map view will show a placeholder with setup instructions
   - Grid view works perfectly without any setup

### Dependencies Installed
- `@googlemaps/react-wrapper`: React wrapper for Google Maps
- `@types/google.maps`: TypeScript types for Google Maps

### File Structure
```
src/
├── components/
│   ├── sections/
│   │   ├── FAQSection.tsx                    ✅ New
│   │   ├── ScheduleVisitSection.tsx          ✅ New  
│   │   ├── CompanyTimelineSection.tsx        ✅ New
│   │   └── PortfolioWithMapSection.tsx       ✅ New
│   └── ui/
│       └── GoogleMap.tsx                     ✅ New
├── app/
│   ├── api/
│   │   └── schedule-visit/
│   │       └── route.ts                      ✅ New
│   └── page.tsx                              ✅ Updated
```

## Features Overview

### Enhanced Portfolio Section
- **Dual View Mode**: Switch between grid and interactive map
- **Real Coordinates**: All 6 projects mapped to actual locations
- **Smart Filtering**: Filter by category affects both views
- **Enhanced Modal**: Improved project details with image gallery

### Schedule Visit Form
- **Smart Validation**: Email, phone, date validation
- **Project Selection**: Dropdown with all project types
- **Time Slots**: Predefined business hours
- **Success Handling**: Clear feedback and reset functionality

### Company Timeline
- **Visual Journey**: From 2000 to 2024 with future vision to 2030
- **Growth Metrics**: Projects, employees, built area progression
- **Interactive Design**: Click to expand/collapse detailed achievements
- **Milestone Tracking**: Key revenue milestones highlighted

### FAQ Section
- **Smart Categorization**: 4 main categories with color coding
- **Smooth Animations**: Framer Motion powered interactions
- **Construction Focus**: Industry-specific questions and answers
- **Expert CTA**: Direct contact option for complex queries

## Running the Project

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Add Environment Variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your actual API key
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

## Technical Implementation

### Google Maps Integration
- Uses `@googlemaps/react-wrapper` for proper React integration
- Custom styled map with construction-themed markers
- Info windows with project details and images
- Responsive design that works on all devices

### Form Handling
- React Hook Form for efficient form management
- Comprehensive validation with error states
- API endpoint ready for email integration
- Success/error feedback with proper UI states

### Timeline Animation
- Framer Motion for smooth scroll-triggered animations
- Responsive design for mobile and desktop
- Interactive expand/collapse functionality
- Future-ready design for adding more milestones

### FAQ System
- Accordion-style with smooth animations
- Category-based organization with visual indicators
- Search-friendly structure for SEO benefits
- Mobile-optimized touch interactions

## Next Steps

1. **Add Google Maps API Key** for full map functionality
2. **Integrate Email Service** for form submissions (optional)
3. **Add Analytics** to track user engagement
4. **SEO Optimization** for better search visibility
5. **Performance Optimization** for faster loading

## Support

All features are production-ready and thoroughly tested. The implementation follows modern React best practices with TypeScript for type safety.
