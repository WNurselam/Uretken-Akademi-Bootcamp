import React, { useState } from "react";
import { Col } from "reactstrap";

const Celcius = ({ temperature }) => {
  const [celcTemp, setCelcTemp] = useState(0);
  
  

  return (
    <Col className="m-3 border p-5 shadow">
      <p>Celcius {celcTemp + temperature} °C </p>

        {
          celcTemp + temperature < 25 ? <span>Soğuk</span>:"Sıcak "
        }
    </Col>
  );
};

export default Celcius;
