import React, { useState } from "react";
import Carousel from "react-bootstrap-carousel";

const Slider = () => {
  const data = [
    {
      image: require("https://fhirgo.com/wp-content/uploads/2023/01/FHIRGO_slider3-scaled.jpeg"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require("https://fhirgo.com/wp-content/uploads/2023/01/FHIRGO_slider1-scaled.jpeg"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require("https://fhirgo.com/wp-content/uploads/2023/01/FHIRGO_slider2-scaled.jpeg"),
      caption: "Caption",
      description: "Description Here",
    },
  ];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
