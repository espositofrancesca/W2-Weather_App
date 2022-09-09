import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import City from "./City";
import Error from "./Error";
import {  format } from 'date-fns'

import MySearchbar from "./MySearchbar";

const MyBody = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false)

  const endpoint = "http://api.openweathermap.org/data/2.5/weather?q=";
  const key = "0025fd0fbf473655a76bf71f1eb0a0a7";

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        endpoint + query + "&appid=" + key + "&lang=IT&units=metric"
      );
      if (response.ok) {
        const data = await response.json();
        setCity(data);
        setError(false)
        console.log(data);
      } else {
        console.log("Error");
        setError(true)
      }
    } catch (error) {
        setError(true)
      console.log(error.value);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h2 className="text-center mt-4 ">What's the weather like today? </h2>
          <p className="text-center">{format(new Date(), 'd MMMM yyyy - HH:mm')}</p>
        </Col>
        <Col xs={10} className="mx-auto">
          <MySearchbar fetch={handleSubmit} val={query} change={handleChange} />
        </Col>
      </Row>
      {city && !error ? (
        <Col
          xs={10}
          className="mx-auto home d-flex align-items-center justify-content-center"
        >
          <City data={city} />
        </Col>
      ) : !error && (
        <Row>
          <Col
            xs={10}
            className="mx-auto home d-flex align-items-center justify-content-center"
          >
            <h1 className="text-center">Benvenuto nella tua app meteo! </h1>
          </Col>
        </Row>
      )}
      {error && <Error/>}
    </Container>
  );
};

export default MyBody;
