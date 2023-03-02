import React, { useState } from "react";
import { Col, Row } from "reactstrap";

const Celcius = ({ temperature }) => {
  const [celcTemp, setCelcTemp] = useState(20);
  return (
    <div>
      <Col>Celcius-{celcTemp + temperature} °C </Col>
    </div>
  );
};

export default Celcius;
