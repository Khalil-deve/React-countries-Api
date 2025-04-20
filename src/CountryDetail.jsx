import { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useParams } from "react-router";
import ShowError from "./showError.jsx";
import LoadingPage from "./loadingPage.jsx";
import CountryDetailsShimmer from "./CountryDetailsShimmer.jsx";
import { themeContext } from "../contexts/themeContext.jsx";

export default function CountryDetail() {
    const params = useParams();
    const countryName = params.country;
    console.log(countryName);
    const [countryData, setCountryData] = useState(null); // Start with null for better loading checks
    const [NotFound, setNotFound] = useState(false);
 
    const [isDark] = useContext(themeContext)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {
                console.log(data);
                setCountryData({
                    flag: data.flags.svg,
                    nativeName: Object.values(data.name?.nativeName || {})[0]?.common || data.name?.common || countryName,
                    population: data.population.toLocaleString('en-IN'),
                    region: data.region,
                    subRegion: data.subregion ? data.subregion : "N/A",
                    capital: data.capital ? data.capital[0] : "N/A",
                    topLevelDomain: data.tld.join(', '),
                    currencies: data.currencies
                        ? Object.values(data.currencies).map((currency) => currency.name).join(', ')
                        : "N/A",
                    languages: data.languages ? Object.values(data.languages).join(', ') : "N/A",
                    borders: []
                });
                const countryBorders = data.borders || [];
                Promise.all(countryBorders.map((border) => {
                    return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                        .then((res) => res.json())
                        .then(([CountryBorder]) => (CountryBorder.name.common))
                })).then((countryBorder) => {
                    setCountryData((prevState) => ({ ...prevState, borders: countryBorder }))
                })
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
                setNotFound(true);
            });
    }, [countryName]);

    if (NotFound) {
        return <ShowError />;
    }

    // if (!countryData) {
    //     return <CountryDetailsShimmer />;
    // }

    return (
        <main className={`${isDark ? 'dark': ""}`}>

            <div className="country-details-container">
                <span className="back-button" onPointerDown={() => window.history.back()} style={{backgroundColor : "#3a4141"}}>
                    <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                </span>

               {!countryData ? (<CountryDetailsShimmer />) : (<div className="country-details">
                    <img src={countryData.flag} alt={`${countryName} flag`} />
                    <div className="details-text-container">
                        <h1>{countryName}</h1>
                        <div className="details-text">
                            <p><b>Native Name:</b> {countryData.nativeName}</p>
                            <p><b>Population:</b> {countryData.population}</p>
                            <p><b>Region:</b> {countryData.region}</p>
                            <p><b>Sub Region:</b> {countryData.subRegion}</p>
                            <p><b>Capital:</b> {countryData.capital}</p>
                            <p><b>Top Level Domain:</b> {countryData.topLevelDomain}</p>
                            <p><b>Currencies:</b> {countryData.currencies}</p>
                            <p><b>Languages:</b> {countryData.languages}</p>
                        </div>

                        {Array.isArray(countryData.borders) && countryData.borders.length !== 0 && (
                            <div className="border-countries">
                                <b>Border Countries:</b>&nbsp;
                                {countryData.borders.map((border) => (
                                    <Link key={border} to={`/${border}`} style={{backgroundColor : "gray"}}>{border}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>)}
            </div>
        </main>
    );
}
