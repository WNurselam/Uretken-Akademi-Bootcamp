import React, { useState } from "react";
import { Col } from "reactstrap";

const Fahrenheit = ({ temperature }) => {
  const [fahrenTemp, setFahrenTemp] = useState(32);
  return (
    <Col className="m-3  border p-5 shadow">
      <p> Fahrenheit {fahrenTemp + temperature} °C</p>

      {fahrenTemp + temperature > 35 ? <span> Sıcak</span> : "Soğuk "}
    </Col>
  );
};

export default Fahrenheit;
