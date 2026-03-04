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

export default function Home({ countries, setRegion }) {
  return (
    <>
      <h1> Jacob's World Wide Web</h1>

      {/* <Search countries={countries}></Search> */}
      <Regions countries={countries} setRegion={setRegion}></Regions>
    </>
  );
}
