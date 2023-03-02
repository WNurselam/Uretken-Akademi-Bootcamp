import React, { useState } from 'react'
import { Row } from 'reactstrap'

const Fahrenheit = ({temperature}) => {

  const [fahrenTemp,setFahrenTemp] = useState(32)
  return (
    <div> 
        <Row>Fahrenheit - {fahrenTemp+temperature} °C</Row>
    </div>
  )
}

export default Fahrenheit