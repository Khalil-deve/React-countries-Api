import { Link } from "react-router";

export default function CountryCard({ countryName, population, region, capital, flag }) {
    return (
        <Link className="country-card" to={countryName}>
           <div className="flag-container">
           <img src={flag} alt={countryName + "flag"} />
           </div>
            <div className="card-text">
                <h3 className="card-title">{countryName}</h3>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </Link>
    )
}
