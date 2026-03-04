import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  data,
  useLocation,
} from "react-router-dom";
import Regions from "./Regions";
import Search from "./Search";
import WorldMap from "./WorldMap";

export default function Home({
  countries,
  setRegion,
  coords,
  setCoords,
  zoom,
  setZoom,
}) {
  return (
    <>
      <div className="banner">
        <Link to="/">
          <button>Home</button>
        </Link>
        <h1> Jacob's World Wide Web</h1>
      </div>
      <WorldMap zoom={zoom} coords={coords}></WorldMap>

      <Search countries={countries}></Search>
      <Regions
        countries={countries}
        setRegion={setRegion}
        coords={coords}
        setCoords={setCoords}
        zoom={zoom}
        setZoom={setZoom}
      ></Regions>
    </>
  );
}
