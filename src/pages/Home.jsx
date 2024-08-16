import { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Welcome from "../components/welcome/Welcome";
import Banner from "../components/banner/Banner";
import Slider from "../components/slider/Slider";
import CountriesList from "../components/countriesList/CountriesList";
function Home() {

  
  return (
    <>
      <Navigationbar />
      <Welcome />
      <Banner bimage="src\components\banner\assets\flags.jpg" />
      <Slider />
      <CountriesList/>
    </>
  );
}

export default Home;
