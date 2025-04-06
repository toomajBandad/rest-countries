import React, { useEffect, useState } from "react";
import "./Home.css";
import "./../../../data.json";
import CountryCard from "../../components/CountryCard/CountryCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  const [totalCountries, setTotalCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [currentregion, setCurrentregion] = useState("Filter By Region");
  const [inputCountry, setInputCountry] = useState("");
  const regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Filter By Region",
  ];

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    regionChangeHandler(currentregion);
  }, [currentregion]);

  useEffect(() => {
    inputChangeHandler(inputCountry);
  }, [inputCountry]);

  function inputChangeHandler(inputCountry) {
    if (inputCountry) {
      let searchCountry = totalCountries.filter((country) => {
        return country.name.toUpperCase().includes(inputCountry.toUpperCase());
      });
      searchCountry.length //checking exist of searches country
        ? setCountries(searchCountry)
        : null;
    }
  }

  function regionChangeHandler(currentregion) {
    let selected = totalCountries.filter((country) => {
      return country.region === currentregion;
    });
    if (currentregion === "Filter By Region") {
      setCountries(totalCountries);
    } else {
      setCountries(selected);
    }
  }

  async function fetchCountries() {
    await fetch("./../../../data.json")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setTotalCountries(data);
      });
  }

  return (
    <div className="Home">
      <SearchBar
        currentregion={currentregion}
        setCurrentregion={setCurrentregion}
        regions={regions}
        inputCountry={inputCountry}
        setInputCountry={setInputCountry}
      />

      <Container fluid className="countrycontainer">
        <Row className="countryWrapper">
          {countries.map((country) => (
            <CountryCard key={country.alpha2Code} country={country} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
