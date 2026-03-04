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

export default function Regions({ countries, setRegion }) {
  return (
    <>
      <div className="region-card-container">
        <div className="region-card">
          <Link to="/region/asia">
            <img
              onClick={() => setRegion("asia")}
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
              onClick={() => setRegion("africa")}
              className="mapImage"
              src="/africa.jpg"
              alt="Africa"
            ></img>
          </Link>
          <p>Africa</p>
        </div>
        <div className="region-card">
          <Link to="/region/america">
            <img
              onClick={() => setRegion("america")}
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
              onClick={() => setRegion("europe")}
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
              onClick={() => setRegion("oceania")}
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
