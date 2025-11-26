# TravelApp - Modern Travel Website

A beautiful, modern travel website built with React, Tailwind CSS, and Framer Motion. Features a clean UI, smooth animations, and fully responsive design.

## Features

- 🎨 **Modern UI Design** - Clean, aesthetic interface with gradients and soft shadows
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Powered by Framer Motion for delightful micro-interactions
- 🗺️ **Multiple Pages** - Home, Destinations, Destination Details, About, and Contact
- 🔍 **Search & Filter** - Find destinations by name, location, or price range
- 🎯 **Reusable Components** - Well-structured component architecture

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
travelApp/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── DestinationCard.jsx
│   │   └── DestinationGrid.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Destinations.jsx
│   │   ├── DestinationDetails.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/                # Sample data
│   │   └── destinations.js
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Pages

- **Home** (`/`) - Hero section, search bar, popular destinations, and features
- **Destinations** (`/destinations`) - Browse all destinations with search and filters
- **Destination Details** (`/destinations/:id`) - Detailed view of a specific destination
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and information

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette. The default theme uses sky blue colors.

### Destination Data

Modify `src/data/destinations.js` to add or update destination information.

### Styling

All styles use Tailwind CSS utility classes. Custom styles can be added in `src/index.css`.

## Backend Integration

The app is ready for backend integration. To connect to an API:

1. Replace the static data in `src/data/destinations.js` with API calls
2. Use `fetch` or a library like `axios` for HTTP requests
3. Add loading states and error handling
4. Update the search and filter logic to work with API responses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contributing

Feel free to submit issues and enhancement requests!

