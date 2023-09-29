import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container" style={{ margin: "0", padding: "0" }}>
      <img
        className="container_logo"
        style={{ width: "60%" }}
        src="https://kyrgyztest.gov.kg/wp-content/uploads/2018/12/%D0%9A%D0%B0%D1%80%D1%82%D0%B0-%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD%D0%B023111321.png"
      />
      <div className="container-box">
        <div>ГОСУДАРСТВЕННОЕ УЧРЕЖДЕНИЕ "КЫРГЫЗТЕСТ"</div>
      </div>
    </div>
  );
};

export default HomePage;
