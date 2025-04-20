// import countryData from './countryData'; // Commented out as it's not being used
import CountryCard from './CountryCard'; // Importing the CountryCard component to display individual country details
import CountryContainerShimmer from './CountryContainerShimmer'; // Importing shimmer effect for loading state
import { useEffect, useState } from 'react'; // Importing React hooks for state and side effects

export default function CountryContainer({ query }) {
    const [allCountriesData, setAllCountriesData] = useState([]); // State to store all countries' data

    useEffect(() => {
        // Fetching data from the REST Countries API
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
          setAllCountriesData(data); // Updating state with fetched data
        });
    }, []); // Empty dependency array ensures this runs only once on component mount

    const countryList = allCountriesData.filter((country) => {
        // Filtering countries based on the search query (name or region)
        return country.name.common.toLowerCase().includes(query.toLowerCase()) || 
               country.region.toLowerCase().includes(query.toLowerCase());
    }).map((country) => {
        // Mapping filtered countries to CountryCard components
        return (
            <CountryCard key={country.name.common}
                countryName={country.name.common}
                population={country.population.toLocaleString('en-IN')} // Formatting population
                region={country.region}
                capital={country.capital?.[0]} // Handling cases where capital might be undefined
                flag={country.flags.svg}
            />
        )
    });

    // Show shimmer effect when data is being fetched or no countries match the query
    if (countryList.length === 0) {
        return <CountryContainerShimmer />; // Rendering shimmer effect
    }

    return (
        <div className="countries-container">
            {countryList} {/* Rendering the list of CountryCard components */}
        </div>
    )
}