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

export default function RegionDetail({ countries, region }) {
  const CountriesFiltered = countries.filter((country) => {
    return country.region.toLowerCase() === region;
  });
  console.log(CountriesFiltered);
  if (CountriesFiltered.length === 0) return <h1>Loading....</h1>;
  return (
    <>
      {CountriesFiltered.map((country) => {
        return (
          <div className="region-detail-card-wrapper">
            <div className="region-detail-card">
              <Link to={`/name/${country.name.common}`}>
                <img
                  className="temp"
                  src={country.flags.png}
                  alt={country.name.official}
                ></img>
              </Link>
              <h2 key={country.name.official}>{country.name.official}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}
