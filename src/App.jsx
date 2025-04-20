import React, { use } from 'react'; // Importing necessary React hooks and components
import Header from './Header'; // Importing the Header component
import './App.css'; // Importing the CSS file for styling
import { Outlet } from 'react-router'; // Importing Outlet for nested routing
import { ThemeProvider } from '../contexts/themeContext'; // Importing the theme provider context

function App() {
  return (

    <ThemeProvider>
      {/* Wrapping the application with ThemeProvider for theme context */}
      <Header /> {/* Rendering the Header component */}
      <Outlet /> {/* Rendering nested routes */}
    </ThemeProvider>


  )
}

export default App; // Exporting the App component as default
