import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import City from "./component/City";
import Weather from "./component/Weather";

const API_KEY = "258d733723f82a038c1a828caa37bb3c";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <Weather weather={weather}/>
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather}></City>
      )}
    </Container>
  );
}

export default App;
