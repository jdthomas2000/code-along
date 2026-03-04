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

export default function RegionDetail({
  countries,
  region,
  zoom,
  coords,
  setCoords,
  setZoom,
}) {
  const CountriesFiltered = countries.filter((country) => {
    return country.region.toLowerCase() === region;
  });
  if (CountriesFiltered.length === 0) return <h1>Loading....</h1>;
  return (
    <>
      <div className="banner">
        <Link
          to="/"
          onClick={() => {
            setZoom(2);
            setCoords([20, 0]);
          }}
        >
          <button>Home</button>
        </Link>
        <h1> {region.toUpperCase()}</h1>
      </div>
      <WorldMap coords={coords} zoom={zoom}></WorldMap>
      <div className="region-detail-card-wrapper">
        {CountriesFiltered.map((country) => {
          return (
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
          );
        })}
      </div>
    </>
  );
}
