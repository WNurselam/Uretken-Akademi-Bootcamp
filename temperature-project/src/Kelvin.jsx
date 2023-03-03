import React, { useState } from "react";
import { Col, Row } from "reactstrap";

const Kelvin = ({ temperature }) => {
  const [kelvinTemp, setKelvinTemp] = useState(273.15);

  return (
    <Col className="m-3  border p-5 shadow">
      <p>Kelvin - {kelvinTemp + temperature} °C</p>
      {kelvinTemp + temperature < 290 ? <span>Aşırı Sıcak</span> : "Çöl Sıcaklığı "}
    </Col>
  );
};

export default Kelvin;

