import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesState, fetchCountries } from "../../store/countriesSlice";
import { Col, Container, Row } from "react-bootstrap";
import "./countrieslist.css";
import Country from "../country/Country";
import Loader from "../loader/Loader";
import Placeholder from "react-bootstrap/Placeholder";

const CountriesList = () => {
  const [visibleCountries, setVisibleCountries] = useState(10); // Number of countries to show initially
  const dispatch = useDispatch();
  const { countries, continent, loading, error } = useSelector(countriesState);
  const [countriesLocal, setCountriesLocal] = useState([]);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (continent === "All") {
      setCountriesLocal(countries);
    } else {
      setCountriesLocal(
        countries?.filter((country) => country.region === continent)
      );
    }
    setVisibleCountries(10);
  }, [continent, countries]);

  const loadMoreCountries = () => {
    setVisibleCountries((prevVisibleCountries) => prevVisibleCountries + 10);
  };

  if (error) return <h1>Error: {error.message}</h1>;

  // Render loader while fetching data
  if (loading) return <Loader />;

  return (
    <section>
      <div className="countries-list mt-4">
        <Container>
          <Row>
            {countriesLocal
              ?.slice(0, visibleCountries)
              .map((country, index) => (
                <Col key={index} md={6} xs={12}>
                  <Country country={country} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
      <div id="loadmore-cont">
        <Container>
          <Row>
            <Col className="a-center">
              {visibleCountries < countriesLocal?.length && (
                <button
                  id="loadmore"
                  size="lg"
                  className=""
                  onClick={loadMoreCountries}
                  disabled={loading}
                >
                  Load More
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default CountriesList;
