import React, { useState } from "react";
import { Col, Row } from "reactstrap";

const Kelvin = ({ temperature }) => {
  const [kelvinTemp, setKelvinTemp] = useState(273.15);

  return (
    <Col className="m-3  border p-5 shadow">
      <p>Kelvin {Math.floor(kelvinTemp + temperature)} °C</p>
      {kelvinTemp + temperature > 30 ? <span>Sıcak</span> : "Soğuk "}
    </Col>
  );
};

export default Kelvin;

