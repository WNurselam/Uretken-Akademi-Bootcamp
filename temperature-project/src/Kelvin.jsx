import React, { useState } from "react";
import { Row } from "reactstrap";

const Kelvin = ({ temperature }) => {
  const [kelvinTemp, setKelvinTemp] = useState(273.12);
  return (
    <div>
      <Row>Kelvin - {kelvinTemp + temperature} °C</Row>
    </div>
  );
};

export default Kelvin;
