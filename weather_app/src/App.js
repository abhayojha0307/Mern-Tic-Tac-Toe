import styled from "styled-components";
import City from "./component/City"
import Weather from "./component/Weather"
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
const CityComponnt = styled.div`  
    display:flex;
    flex-direction:column;
 `;

 
 const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

 const WeatherComponnt = styled.div`  
 display:flex;
 flex-direction:column;
`;
function App() {
  return (<
    Container>
    <AppLabel>Weather App</AppLabel>
    {/* <CityComponnt><City></City></CityComponnt> */}
    <WeatherComponnt><Weather></Weather></WeatherComponnt>
  </Container>
  )
}

export default App;
