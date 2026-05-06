# 🌍 World on the Go

An interactive React application for exploring country data from around the world. Track visited countries, manage a gallery of country flags, and learn about geography with a clean, responsive interface.

## ✨ Features

- **📋 Comprehensive Country Directory**: Browse all available countries with detailed information
- **🗺️ Mark Countries as Visited**: Interactive buttons to mark countries you've visited
- **🚩 Flag Gallery**: Create and manage a personal collection of visited country flags
- **📊 Visit Statistics**: Real-time counters displaying:
  - Total countries available
  - Countries marked as visited
  - Countries not yet visited
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **⚡ Fast Data Loading**: Uses React Suspense for smooth asynchronous data fetching
- **🎨 Dynamic UI Feedback**: Visual indicators showing visited country status

## 🛠️ Tech Stack

### Frontend

- **React** 19.1.1 - UI library with modern hooks
- **React DOM** 19.1.1 - DOM rendering
- **Vite** 7.1.7 - Modern build tool and dev server

### Development Tools

- **ESLint** 9.36.0 - Code quality and linting
- **React Hooks Linter** 5.2.0 - Ensures proper hooks usage

### Styling

- CSS3 with Grid Layout for responsive design
- Custom styling with interactive state management

## 📁 Project Structure

```
react-World-on-the-go/
├── src/
│   ├── components/
│   │   ├── countries/
│   │   │   ├── Countries.jsx       # Main countries list component
│   │   │   └── Countries.css       # Grid layout and styling
│   │   └── Country/
│   │       ├── Country.jsx         # Individual country card component
│   │       └── Country.css         # Card styling
│   ├── App.jsx                    # Root component with API integration
│   ├── App.css                    # App-level styles
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── public/
│   └── CNAME                      # Domain configuration
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── README.md                      # This file
```

### Key Components

**Countries.jsx** - Manages the main state for visited countries and flags. Handles data fetching with React Suspense and renders the country grid with statistics.

**Country.jsx** - Individual country card displaying flag, basic info (name, capital, area, population), and interactive buttons for marking visited status and adding flags to gallery.

**App.jsx** - Root component that fetches country data from the API and provides it to child components via Suspense.

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/MSabbirHossen/React_Pracrice-World-on-the-go.git
   cd react-world-on-the-go
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

6. **Run linting**
   ```bash
   npm run lint
   ```

## 🔐 Environment Variables

No environment variables are required for basic functionality. The application uses the public Programming Hero API endpoint.

**API Endpoint Used:**

```
https://openapi.programming-hero.com/api/all
```

## 🌐 Live Demo

- **Netlify**: [https://react-practice-world-on-the-go.netlify.app/](https://react-practice-world-on-the-go.netlify.app/)
- **Surge**: [https://react-practice-world-on-the-go.sh](https://react-practice-world-on-the-go.sh)

## 📸 Key Features Showcase

### Country Cards

- Flag image display
- Country name and capital
- Land area classification (Big Land/Small Land)
- Population statistics
- Interactive visited status button
- Flag collection button

### Visited Countries Tracker

- Ordered list of marked countries
- Real-time counter
- Visual separation from unvisited countries

### Flag Gallery

- Visual collection of visited country flags
- Grid layout display
- Dynamic updates as flags are added

## 📈 Key Learnings & Highlights

This project demonstrates proficiency in:

- **React Hooks**: Effective use of `useState` and `use` hooks for state management
- **Async Data Handling**: React Suspense pattern for graceful data fetching and loading states
- **Component Architecture**: Modular, reusable component design with proper prop drilling
- **Responsive Design**: CSS Grid-based layouts that adapt to different screen sizes
- **API Integration**: Fetching and processing external API data
- **User Interface State**: Managing complex UI states (visited countries, flag gallery)
- **Modern Build Tools**: Working with Vite for optimized development and production builds

## 🔮 Future Improvements

- **Search & Filter**: Add search functionality to find countries by name or region
- **Continent Grouping**: Organize countries by continent or region
- **Country Details Modal**: Expand card view to show additional country information (languages, currency, timezone)
- **Persistent Storage**: Save visited countries to localStorage for session persistence
- **Sorting Options**: Sort countries alphabetically or by population/area
- **Dark Mode Toggle**: Add theme switching capability
- **Advanced Statistics**: Display statistics like total visited population, average area, etc.
- **Multiple Themes**: Different color schemes for the UI
- **Favorites Feature**: Mark favorite countries separately from visited ones
- **Export Functionality**: Export visited countries list or flag gallery

## 📝 License

This project is part of a practice curriculum and is available for educational purposes.

## 🤝 Contributing

Contributions and suggestions are welcome! Feel free to fork this project and submit pull requests.

---

**Built with ❤️ as a React learning project**
