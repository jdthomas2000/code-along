import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  data,
  useLocation,
  useParams,
} from "react-router-dom";
import WorldMap from "./WorldMap";

export default function CountryDetail({ setCoords, setZoom, coords, zoom }) {
  const [countryData, setCountryData] = useState(null);

  const { countryName } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        const country = data[0];
        setCountryData(country);
        if (country) {
          setCoords(country.latlng);
          setZoom(6);
        }
      });
  }, [countryName, setCoords, setZoom]);

  if (!countryData) return <h1>No Deets Avail</h1>;

  return (
    <>
      <Link
        to="/"
        onClick={() => {
          setZoom(3);
          setCoords([20, 0]);
        }}
      >
        <button>Home</button>
      </Link>
      <WorldMap coords={coords} zoom={zoom}></WorldMap>
      <div className="country-info">
        <h1>{countryData.name.official}</h1>
        <h2>{countryData.capital[0]}</h2>
        <p>{countryData.region}</p>
        <p>{countryData.subregion}</p>
        <p>{countryData.population}</p>
        <p>Currency:</p>
        <ul>
          {countryData.currencies
            ? Object.values(countryData.currencies).map((currency) => (
                <li key={currency.name}>{currency.name}</li>
              ))
            : "N/A"}
        </ul>
        <p>Languages:</p>
        <ul>
          {countryData.languages
            ? Object.values(countryData.languages).map((lang) => (
                <li key={lang}>{lang}</li>
              ))
            : "N/A"}
        </ul>

        <div className="flags">
          <img src={countryData.flags.png} alt={countryData.flags.alt}></img>
          <img
            src={countryData.coatOfArms.png}
            alt={countryData.flags.alt}
          ></img>
        </div>
      </div>
    </>
  );
}
