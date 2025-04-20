import { useContext, useState } from 'react'; // Importing React hooks for state and context
import React from 'react'; // Importing React
import Searchfilter from './SearchBar'; // Importing the Searchfilter component for search functionality
import FilterBar from './FilterBar'; // Importing the FilterBar component for filtering options
import CountryContainer from './CountryContainer'; // Importing the CountryContainer component to display countries
import { themeContext } from '../contexts/themeContext'; // Importing the theme context for dark mode

export default function Home(){
    const [query, setQuery] = useState(""); // State to manage the search query
    const [isDark] = useContext(themeContext); // Accessing the dark mode state from the theme context

    return(
        <main className = {`${isDark ? 'dark' : ""}`}> {/* Applying dark mode class conditionally */}
        <div className="search-filter-container">
          <Searchfilter setQuery={setQuery}/> {/* Rendering the Searchfilter component */}
          <FilterBar setQuery={setQuery}/> {/* Rendering the FilterBar component */}
        </div>
        <CountryContainer query={query}/> {/* Passing the search query to the CountryContainer */}
      </main>
    )
}