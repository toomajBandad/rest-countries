import React from "react";
import "./TopHeader.css";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export default function TopHeader({ darkTheme, setDarkTheme }) {
  return (
    <div className="TopHeader">
      <div className="TopHeader__left">
        <div className="TopHeader__title">Where in the world ? </div>
      </div>
      <div className="TopHeader__right">
        <div
          className="TopHeader__theme"
          onClick={() => {
            setDarkTheme((prev) => !prev);
            console.log(darkTheme);
          }}
        >
          <span>
            {darkTheme && <MdOutlineWbSunny className="TopHeader__theme__icon " />}
            {!darkTheme && <IoMoonOutline className="TopHeader__theme__icon " />}
          </span>
          {!darkTheme ? "Dark Mode" : "Light Mode"}
        </div>
      </div>
    </div>
  );
}
