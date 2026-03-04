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
import Home from "./Home";
import RegionDetail from "./RegionDetail";
import CountryDetail from "./CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,region")
      .then((res) => res.json())
      .then((data) => {
        return setCountries(data);
      });
  }, []);

  if (!countries) return <h1>LOADING...</h1>;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home countries={countries} setRegion={setRegion}></Home>}
        ></Route>
        <Route
          path="/region/:regionName"
          element={
            <RegionDetail countries={countries} region={region}></RegionDetail>
          }
        ></Route>
        <Route
          path="/name/:countryName"
          element={<CountryDetail></CountryDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
