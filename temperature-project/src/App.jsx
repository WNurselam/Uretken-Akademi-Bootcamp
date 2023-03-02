import { useState } from "react";
import { Button, Col } from "reactstrap";
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
  return (
    <div className="App">
      <h1>Hava Nasil </h1>
      <p>Şuan sıcaklık {temperature} °C</p>
      <Button onClick={increacseTemp}>Sıcaklık Artır</Button>
      <Header />
      <Celcius temperature={temperature} />
      <Fahrenheit temperature={temperature} />
      <Kelvin temperature={temperature} />
    </div>
  );
}

export default App;
