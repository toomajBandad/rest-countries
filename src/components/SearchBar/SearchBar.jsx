import React, { useState } from "react";
import "./SearchBar.css";
import { IoMdSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

export default function SearchBar({
  currentregion,
  setCurrentregion,
  regions,
  inputCountry,
  setInputCountry,
}) {
  const [showregionItem, setShowregionItem] = useState(false);

  return (
    <div className="SearchBar">
      <div className="SearchBar__left">
        <div className="SearchBar__inputWrapper">
          <IoMdSearch className="inputIcon"/>
          <input
            type="text"
            className="SearchBar__input"
            placeholder="Search for a country..."
            value={inputCountry}
            onChange={(event) => {
              setInputCountry(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="SearchBar__right">
        <div
          className="SearchBar__region"
          onClick={() => setShowregionItem((prev) => !prev)}
        >
          <p className="m-0 p-0">{currentregion}</p>
          <FaAngleDown />
        </div>
        {showregionItem && (
          <div className="regionWrapper">
            {regions.map((item) => (
              <div
                key={item}
                className="regionItem"
                onClick={() => {
                  setCurrentregion(item);
                  setShowregionItem(false);
                }}
              >
                {item === "Filter By Region" ? "Remove Filter" : item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
