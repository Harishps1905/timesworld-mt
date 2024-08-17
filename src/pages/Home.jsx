import { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Welcome from "../components/welcome/Welcome";
import Banner from "../components/banner/Banner";
import Slider from "../components/slider/Slider";
import CountriesList from "../components/countriesList/CountriesList";
import flagsImage from "../components/banner/assets/flags.jpg";
import useAuth from "../hooks/useAuth";
import { userSignOut } from "../firebase/auth";
import Footer from "../components/footer/Footer";
import withAuth from "../hoc/withAuth";
import { Container, Row } from "react-bootstrap";

function Home() {
  // userSignOut();
  const { user, loading, error } = useAuth();
  const AuthCountriesList = withAuth(CountriesList);

  return (
    <>
      <Navigationbar />
      <Welcome />

      <Container>
        <Row>
          <Banner bimage={flagsImage} />
          <Slider />
        </Row>
      </Container>
      <AuthCountriesList />
      <Footer />
    </>
  );
}

export default Home;
