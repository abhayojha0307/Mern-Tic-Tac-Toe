import styled from "styled-components"

const WeatherCondition=styled.span`
    display:flex;
    flex-direction:column;
    align-item:center;
    width:100%;
    justify-content:space-between;
    margin:30px auto`

const Condition=styled.span`
    margin:20px auto;
    font-size:14px;
    & span{
        font-size:28px;
    }
 ;`
 
const Location=styled.span`
    font-size:28px;
    font-weight:bold;
`
const WeatherInfo=styled.span`
    font-size:15px;
    font-weight:bold;
    margin:20px 25px 10px;
    text-align:left;
    width:90%;
`

const InfoContainer=styled.div`
    display:flex;
    margin:5px 10px;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    `;
const InfoLabel=styled.span`
    display:flex;
    flex-direction:column;
    font-size:14px;
    margin:15px;
    & span{
        font-size:12px;
        text-transform:capitalize
    }
`;


const WeatherInfoComponent=()=>{
    return (
        <InfoContainer>
            <InfoLabel>
            <span>Sunrise</span>
            </InfoLabel>
        </InfoContainer>
    )
}
const Weather=()=>{
    return(
        <>
        <WeatherCondition>
        <Condition><span>Temperature:</span> | Cloudy</Condition>
        <Location>London,GB</Location>
        <WeatherInfo>Weather Info</WeatherInfo>
        <weatherInfoContainer>
            <WeatherInfoComponent/>
            <WeatherInfoComponent/>
            <WeatherInfoComponent/>
            <WeatherInfoComponent/>
            </weatherInfoContainer>
        </WeatherCondition>
        </>
    )
}
export default Weather