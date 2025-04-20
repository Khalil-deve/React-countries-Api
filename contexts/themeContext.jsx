import { createContext, useState } from "react";

// Creating a context for theme management
export const themeContext = createContext();

export const ThemeProvider = (({children}) => {
    // Initializing state for dark mode using localStorage to persist the theme preference
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode'))); 
    
    return (
        // Providing the theme context to all child components
        <themeContext.Provider value={[isDark, setIsDark]}>
            {children} {/* Rendering child components */}
        </themeContext.Provider>
    )
})