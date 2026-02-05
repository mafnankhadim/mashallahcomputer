# Printmax React App

A React conversion of the Printmax HTML template - A T-Shirt Printing Agency website.

## Project Structure

```
react-printmax/
├── public/
│   ├── assets/          # Copy from original assets folder
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── js/
│   │   └── webfonts/
│   └── venobox/         # Copy from original venobox folder
├── src/
│   ├── components/
│   │   ├── Header/          # Navigation/Header component
│   │   ├── HeroSection/     # Hero banner section
│   │   ├── FeatureArea/     # Core features section
│   │   ├── CollectionArea/  # Collection cards section
│   │   ├── AboutArea/       # About us section
│   │   ├── CollectionStyleTwo/ # Gallery collection
│   │   ├── CountdownArea/   # Sale countdown timer
│   │   ├── ProductSection/  # New arrivals carousel
│   │   ├── FeatureStyleTwo/ # Features with icons
│   │   ├── MarqueeArea/     # Scrolling text marquee
│   │   ├── PopularProducts/ # Popular items carousel
│   │   ├── TestimonialArea/ # Customer testimonials
│   │   ├── BrandArea/       # Brand logos carousel
│   │   ├── BlogArea/        # Latest blog posts
│   │   ├── Footer/          # Footer section
│   │   ├── Preloader/       # Loading animation
│   │   └── ScrollUp/        # Scroll to top button
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup Instructions

### 1. Copy Assets

Copy the following folders from the original HTML template to the `public` folder:

- `assets/` folder (css, fonts, images, js, webfonts)
- `venobox/` folder

### 2. Install Dependencies

```bash
cd react-printmax
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## Components

Each component is organized in its own folder with:

- `ComponentName.jsx` - React component
- `ComponentName.css` - Component-specific styles (main styles are in assets/css)
- `index.js` - Barrel export

## Features

- **Header**: Responsive navigation with mobile menu, cart sidebar, and info sidebar
- **Hero Section**: Main banner with animations and social links
- **Feature Area**: Core features display
- **Collection Area**: Product collection cards
- **About Area**: Company information with counters
- **Collection Style Two**: Gallery grid layout
- **Countdown Area**: Sale countdown timer (functional)
- **Product Section**: Owl carousel for products
- **Feature Style Two**: Features with icon cards
- **Marquee Area**: Scrolling text animation
- **Popular Products**: Featured items carousel
- **Testimonial Area**: Customer reviews carousel
- **Brand Area**: Partner logos carousel
- **Blog Area**: Latest blog posts grid
- **Footer**: Site footer with newsletter form
- **Preloader**: Loading animation
- **ScrollUp**: Back to top button

## Technologies

- React 18
- Vite
- React Router DOM
- jQuery (for Owl Carousel compatibility)
- Bootstrap 5
- Font Awesome
- Bootstrap Icons
- Flaticon
- Owl Carousel

## Notes

- The original CSS files are included via the index.html for maintaining the exact same styling
- jQuery-based carousels (Owl Carousel) are initialized in useEffect hooks
- The countdown timer is fully functional with React state
- All product data is stored in component arrays for easy modification

## Converting More Pages

To convert additional pages (about, shop, blog, etc.):

1. Create a new page component in `src/pages/`
2. Add route in App.jsx using React Router
3. Reuse existing section components as needed
