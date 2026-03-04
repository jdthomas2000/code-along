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

export default function Regions({
  countries,
  setRegion,
  coords,
  setCoords,
  zoom,
  setZoom,
}) {
  return (
    <>
      <div className="region-card-container">
        <div className="region-card">
          <Link to="/region/asia">
            <img
              onClick={() => {
                setCoords([34, 100]);
                setZoom(3);
                return setRegion("asia");
              }}
              className="mapImage"
              src="/asia.jpg"
              alt="asia"
            ></img>
          </Link>
          <p>Asia</p>
        </div>
        <div className="region-card">
          <Link to="/region/africa">
            <img
              onClick={() => {
                setCoords([2, 16]);
                setZoom(3);
                return setRegion("africa");
              }}
              className="mapImage"
              src="/africa.jpg"
              alt="Africa"
            ></img>
          </Link>
          <p>Africa</p>
        </div>
        <div className="region-card">
          <Link to="/region/americas">
            <img
              onClick={() => {
                setCoords([15, -90]);
                setZoom(3);
                return setRegion("americas");
              }}
              className="mapImage"
              src="/americas.jpg"
              alt="America"
            ></img>
          </Link>
          <p>America</p>
        </div>
        <div className="region-card">
          <Link to="/region/europe">
            <img
              onClick={() => {
                setCoords([54, 15]);
                setZoom(4);
                return setRegion("europe");
              }}
              className="mapImage"
              src="/europe.jpg"
              alt="europe"
            ></img>
          </Link>
          <p>Europe</p>
        </div>
        <div className="region-card">
          <Link to="/region/oceania">
            <img
              onClick={() => {
                setCoords([-25, 135]);
                setZoom(4);
                return setRegion("oceania");
              }}
              className="mapImage"
              src="/oceania.jpg"
              alt="oceania"
            ></img>
          </Link>
          <p>Oceania</p>
        </div>
      </div>
    </>
  );
}
