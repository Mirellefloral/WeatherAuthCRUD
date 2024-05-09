import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const WeatherIcons = {
  "01d": "../icons/sunny.svg",
  "01n": "../icons/night.svg",
  "02d": "../icons/day.svg",
  "02n": "../icons/cloudy-night.svg",
  "03d": "../icons/cloudy.svg",
  "03n": "../icons/cloudy.svg",
  "04d": "../icons/perfect-day.svg",
  "04n": "../icons/cloudy-night.svg",
  "09d": "../icons/rain.svg",
  "09n": "../icons/rain-night.svg",
  "10d": "../icons/rain.svg",
  "10n": "../icons/rain-night.svg",
  "11d": "../icons/storm.svg",
  "11n": "../icons/storm.svg",
};

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
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function Weather () {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <>
    <Header></Header>
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
    <Footer></Footer>
    </>
  );
}

export default Weather;





// const AppLabel = styled.span`
//   color: black;
//   margin: 20px auto;
//   font-size: 18px;
//   font-weight: bold;
// `;
// const CloseButton = styled.span`
//   padding: 2px 3px;
//   background-color: black;
//   border-radius: 50%;
//   color: white;
//   position: absolute;
// `;

// function Weather() {
//   const [city, updateCity] = useState();
//   const [weather, updateWeather] = useState();
//   const fetchWeather = async (e) => {
//     e.preventDefault();
//     const response = await Axios.get(
//       // `https://api.openweathermap.org/data/2.5/weather?q=${city}&f85134ff869720ae854d4734de8399ec`,

//       `https://api.openweathermap.org/data/2.5/weather?q=D${city}$1b52a2fd5df6620775094084de09c53a`,
     
//     );
//     updateWeather(response.data);
//   };
//   return (
//     <Container>
//       <AppLabel>React Weather App</AppLabel>
//       {city && weather ? (
//         <WeatherComponent weather={weather} city={city} />
//       ) : (
//         <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
//       )}
//     </Container>
//   );
// }

// export default Weather;















// import React, { useState } from "react";
// import styled from "styled-components";
// import Axios from "axios";
// import CityComponent from "./modules/CityComponent";
// import WeatherComponent from "./modules/WeatherInfoComponent";


// export const WeatherIcons = {
//   "01d": "../icons/sunny.svg",
//   "01n": "../icons/night.svg",
//   "02d": "../icons/day.svg",
//   "02n": "../icons/cloudy-night.svg",
//   "03d": "../icons/cloudy.svg",
//   "03n": "../icons/cloudy.svg",
//   "04d": "../icons/perfect-day.svg",
//   "04n": "../icons/cloudy-night.svg",
//   "09d": "../icons/rain.svg",
//   "09n": "../icons/rain-night.svg",
//   "10d": "../icons/rain.svg",
//   "10n": "../icons/rain-night.svg",
//   "11d": "../icons/storm.svg",
//   "11n": "../icons/storm.svg",
// };


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 800px;
//   margin: auto;
//   padding: 20px;
//   border-radius: 4px;
//   box-shadow: 0 3px 6px 0 #555;
//   font-family: Montserrat;
//   background: linear-gradient(rgb(253, 108, 188), rgb(6, 119, 224)); /* Add the desired background color gradient here */
// `;

// const AppLabel = styled.h1`
//   color: black;
//   margin-top: 20px;
//   font-size: 24px;
//   font-weight: bold;
// `;

// function Weather() {
//   const [city, updateCity] = useState();
//   const [weather, updateWeather] = useState();
//   const fetchWeather = async (e) => {
//     e.preventDefault();
//     const response = await Axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b52a2fd5df6620775094084de09c53a`,
//     );
//     updateWeather(response.data);
//   };
//   return (
//     <Container>
//       <AppLabel>React Weather App</AppLabel>
//       {city && weather ? (
//         <WeatherComponent weather={weather} city={city} />
//       ) : (
//         <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
//       )}
//     </Container>
//   );
// }

// export default Weather;
