import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesState, fetchCountries } from "../../store/countriesSlice";
import { Col, Container, Row } from "react-bootstrap";
import './countrieslist.css';
import Country from "../country/Country";



const CountriesList = () => {
  const [visibleCountries, setVisibleCountries] = useState(10); // Number of countries to show initially

  const dispatch = useDispatch();
  const { countries, continent, loading, error } = useSelector(countriesState);
  const [countriesLocal, setCountriesLocal] = useState([]); // Number of countries to
  useEffect(() => {
    dispatch(fetchCountries());
    console.log('first');
  }, []);
  useEffect(() => {
    (continent === 'All') ? setCountriesLocal(countries) : setCountriesLocal(countries?.filter((country) => country.region === continent));
    console.log('second');
    setVisibleCountries(10);
  
  }, [continent, countries])
  

  // Handle "Load More" button click
  const loadMoreCountries = () => {
    setVisibleCountries((prevVisibleCountries) => prevVisibleCountries + 10); // Load 10 more countries
  };

  // Check if there is an error or loading state
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>loading</h1>;

  // Render the countries list with pagination and loading state
  return (
    <section>
      <div className="countries-list">
        <Container>
            {continent}
          <Row>
            {countriesLocal?.slice(0, visibleCountries).map((country, index) => (
              <Col key={index} md={6} xs={12}>
               <Country country={country}/>
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
                    <button id="loadmore" size="lg"  className="" onClick={loadMoreCountries} disabled={loading}>
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
