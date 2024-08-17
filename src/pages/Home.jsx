import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Welcome from "../components/welcome/Welcome";
import Banner from "../components/banner/Banner";
import Slider from "../components/slider/Slider";
import CountriesList from "../components/countriesList/CountriesList";
import flagsImage from'../components/banner/assets/flags.jpg';
import useAuth from "../hooks/useAuth";
import { userSignOut } from "../firebase/auth";
import Footer from "../components/footer/Footer";
function Home() {
  // userSignOut();
  const { user, loading, error } = useAuth();
  console.log(user, "Welcome");
  
  
  return (
    <>
      <Navigationbar />
      <Welcome />
      <Banner bimage={flagsImage}/>
      <Slider />
      {user && <CountriesList/>}
      <Footer/>
    </>
  );
}

export default Home;
