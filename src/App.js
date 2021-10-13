import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
            <div className="App bg-opacity-100">
                <h1>TempCaster</h1>
                <form id="submitForm" onSubmit={this.handleSubmit}>
                    <label>City:</label>
                    <input id="cityInput" className="form-control-sm" name="city" type="text" placeholder="Enter city here" />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <WeatherCard ref={this.card} />
            </div>
        );
    }
}

export default App;
