import React from "react";
import styled from "styled-components";

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;

const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoLabel>
        <span>{name}</span>
        {value}
      </InfoLabel>
    </InfoContainer>
  );
};
const Weather = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}:${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {` | ${weather?.weather[0].description}`}
        </Condition>
      </WeatherContainer>
      <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "Sunset" : "SunRise"}
          value={getTime(weather?.sys[isDay ? "sunrise" : "sunset"])}
        />

        <WeatherInfoComponent name="Humdity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="Wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure} />
        <WeatherInfoComponent
          name="Feels like"
          value={`${Math.floor(weather?.main?.feels_like - 273)}°C`}
        />
      </WeatherInfoContainer>
    </>
  );
};
export default Weather;
