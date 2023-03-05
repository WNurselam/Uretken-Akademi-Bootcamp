import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import Header from "./Header";
import Celcius from "./Celcius";

import "./App.css";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

function App() {
  const [temperature, setTemperature] = useState(0);

  const increacseTemp = () => {
    setTemperature((temperature) => temperature + 1);
  };
  const decreaseTemp = () => {
    setTemperature((temperature) => temperature - 1);
  };
  return (
    <div className="App">
      <h1>Hava Nasil </h1>
      <p>Şuan sıcaklık {temperature} °C</p>
      <Button className="m-2" size="lg" onClick={increacseTemp}>
        Sıcaklık Artır
      </Button  >
      <Button size="lg" className="bg-primary" onClick={decreaseTemp}>
        Sıcaklık Azalt
      </Button>
      <Header />
      <Row className="border border-light shadow-lg p-5">
        <Celcius temperature={temperature} />
        <Fahrenheit temperature={temperature} />
        <Kelvin temperature={temperature} />
      </Row>
    </div>
  );
}

export default App;
