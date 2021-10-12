import './App.css';
import React from "react";
import WeatherCard from './WeatherCard.js'


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            city: null
        }
        this.card = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchCityWeather = this.fetchCityWeather.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let city = new FormData(event.target).get("city");
        document.getElementById('cityInput').value = "";
        this.fetchCityWeather(city);
    }

    fetchCityWeather(city) {
        fetch("https://wttr.in/" + city + "?format=j1")
            .then(response => response.json())
            .then(data => {
                const currData = data["current_condition"];
                const areaData = data["nearest_area"];
                const realCity = areaData[0]["areaName"][0]["value"] + ", " + areaData[0]["region"][0]["value"] + ", " + areaData[0]["country"][0]["value"];
                this.card.current.updateCard(currData, realCity);
            })
    }

    render() {
        return (
            <div className="App">
                <h1>TempCaster</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>City:
                        <input id="cityInput" name="city" type="text" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <WeatherCard ref={this.card} />
            </div>
        );
    }
}

export default App;
