import React from "react";
import { useNavigate } from "react-router";
import "./CountryCard.css";
import Card from "react-bootstrap/Card";

export default function CountryCard({ country }) {
  let navigate = useNavigate();
  // const [currentCountry, setCurrentCountry] = useState("");
  return (
    <>
      <Card
        className="p-0 m-0 card"
        onClick={() => {
          navigate(`/detail/${country.name}`);
        }}
      >
        <Card.Img variant="top" src={country.flag} className="cardImg" />
        <Card.Body>
          <Card.Title className="cardTitle">{country.name}</Card.Title>
          <div>
            <span className="cardTextHead">Population :</span>
            <span className="cardTextinfo">
              {country.population.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="cardTextHead">Region : </span>
            <span className="cardTextinfo">{country.region}</span>
          </div>
          <div>
            <span className="cardTextHead">Capital : </span>
            <span className="cardTextinfo">{country.capital}</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
