import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import "./../../../data.json";
import { FaArrowLeft } from "react-icons/fa";

export default function Details() {
  let navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState({});
  const [allCountries, setAllCountries] = useState([]);
  const [bordersCountry, setBordersCountry] = useState([]);

  useEffect(() => {
    getallCountries();
  }, []);

  useEffect(() => {
    borderCountryHandler(selectedCountry);
  }, [selectedCountry]);

  function borderCountryHandler(selectedCountry) {
    if (selectedCountry.borders) {
      let neighbors = selectedCountry.borders;
      let nei = [];
      neighbors.map((item) => {
        allCountries.forEach((country) => {
          if (item === country.alpha3Code) {
            nei.push(country);
          }
        });
      });
      setBordersCountry(nei);
      console.log(nei);
    }
  }

  const params = useParams();

  async function getallCountries() {
    await fetch("./../../../data.json")
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data);
        data.map((country) => {
          if (country.name === params.country) {
            setSelectedCountry(country);
            console.log(country);
          }
        });
      });
  }

  return (
    <div className="Details">
      <div className="backBtnContainer">
        <button className="backBtn" onClick={() => navigate("/")}>
          <FaArrowLeft className="backBtn__icon" />
          Back
        </button>
      </div>
      <div className="Details__container">
        <div className="Details__left">
          <div className="flagContainer">
            <img className="Details__flag" src={selectedCountry.flag} />
          </div>
        </div>
        <div className="Details__right">
          <div className="Details__title">{selectedCountry.name}</div>
          <div className="Details__infos">
            <div className="left">
              <div>
                <span>Native Name : </span>
                {selectedCountry.nativeName}
              </div>
              <div>
                <span>Population : </span>
                {selectedCountry.population}
              </div>
              <div>
                <span>Region : </span>
                {selectedCountry.region}
              </div>
              <div>
                <span>Sub region : </span>
                {selectedCountry.subregion}
              </div>
              <div>
                <span>Capital : </span>
                {selectedCountry.capital}
              </div>
            </div>
            <div className="right">
              <div>
                <span>Top Level Domain : </span>
                {selectedCountry.topLevelDomain
                  ? selectedCountry.topLevelDomain[0]
                  : "no"}
              </div>
              <div>
                <span>Currencies : </span>
                {selectedCountry.currencies
                  ? selectedCountry.currencies[0].name
                  : "no"}
              </div>
              <div>
                <span>Languages : </span>
                {selectedCountry.languages
                  ? selectedCountry.languages.map((item) => (
                      <i key={item.iso639_1}>{item.name}</i>
                    ))
                  : "no"}
              </div>
            </div>
          </div>
          <div className="Details__border">
            <div>
              Border Countries :
              {bordersCountry.length ? (
                bordersCountry.map((country) => (
                  <button
                    className="borderCountryBtn"
                    key={country.name}
                    onClick={() => {
                      navigate(`/detail/${country.name}`);
                      setSelectedCountry(country);
                      console.log(country.name);
                    }}
                  >
                    {country.name}
                  </button>
                ))
              ) : (
                <p>Do not have any borders country</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
