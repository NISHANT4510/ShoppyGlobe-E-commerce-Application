# ShoppyGlobe E-commerce Application

A modern React e-commerce application built with Redux Toolkit for state management. ShoppyGlobe provides a seamless shopping experience with features like:

- Product catalog powered by DummyJSON API
- Real-time product search and filtering
- Shopping cart with quantity management
- Responsive design using Tailwind CSS
- Error boundary and loading states
- Form validation in checkout process

The application demonstrates best practices in React development including:
- Component-based architecture 
- Custom hooks for business logic
- Lazy loading with Suspense
- Global state management with Redux
- Client-side routing with React Router


## Technologies Used

- React 19 (Latest features including Hooks and Suspense)
- Redux Toolkit for state management
- React Router v7 for navigation
- Tailwind CSS for styling
- Vite for build tooling
- DummyJSON API for backend integration

## Project Directory

```
.
├── public/              # Static public assets
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useProducts.js
│   ├── pages/          # Page components
│   │   ├── CheckoutPage.jsx
│   │   └── ProductDetailPage.jsx
│   ├── routes/         # Routing configuration
│   │   └── routes.jsx
│   ├── store/          # Redux store setup
│   │   ├── cartSlice.js
│   │   ├── productsSlice.js
│   │   └── store.js
│   ├── App.jsx         # Root component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/NISHANT4510/ShoppyGlobe-E-commerce-Application.git
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

## Live Demo

Experience ShoppyGlobe in action: [Live Demo](https://shoppy-globe-e-commerce-application-7ttk.vercel.app/)

Note: The demo is hosted on Vercel and may take a few seconds to load initially.

## Application Architecture

### Overview
The application follows a modular architecture with clear separation of concerns:

```
Frontend Architecture
├── Components Layer
│   ├── Presentational Components
│   └── Container Components
├── State Management Layer
│   ├── Redux Store
│   ├── Actions/Reducers
│   └── Selectors
├── Routing Layer
│   └── React Router
└── API Integration Layer
    └── DummyJSON API
```

### Key Architecture Features

1. **Components Layer**
   - Presentational components for UI rendering
   - Container components for business logic
   - Reusable UI components for consistency

2. **State Management**
   - Centralized Redux store
   - Separate slices for products and cart
   - Async thunks for API calls

3. **Routing**
   - Dynamic route configuration
   - Lazy-loaded components
   - Protected routes when needed

4. **API Integration**
   - Fetch API for backend communication
   - Error handling and loading states
   - Data transformation layer


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- DummyJSON API for providing test data
- React community for excellent documentation
- Contributors who have helped improve the project
