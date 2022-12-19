import './App.css';
import Search from "./Search";
import Temperature from "./Temperature";
import City from "./City";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <City city="New York" />
        <WeatherInfo
          day="Tuesday"
          time="10:00"
          sky="Cloudy"
          img="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          humidity={80}
          wind={10}
        />
        <Temperature celsius={19} />
      </div>

      <a href='https://github.com/IreneTernovets/react-weather-app'>Open-sourced code on Git hub</a>
    </div>
  );
}


