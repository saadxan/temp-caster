import './WeatherCard.css';
import React from "react";

class WeatherCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature : null,
            cloudCover : null,
            humidity : null,
            precipitation : null,
            uvIndex : null,
            visibility : null,
            weatherCode: null,
            weatherDescription: null,
            localDate: null,
            realCity: "Nowhere"
        }
        this.updateCard = this.updateCard.bind(this);
    }

    updateCard(currData, realCity) {
        this.setState({
            temperature : currData[0]["temp_F"],
            cloudCover : currData[0]["cloudcover"],
            humidity : currData[0]["humidity"],
            precipitation : currData[0]["precipInches"],
            uvIndex : currData[0]["uvIndex"],
            visibility : currData[0]["visibilityMiles"],
            weatherCode: currData[0]["weatherCode"],
            localDate: this.getDate(currData[0]["localObsDateTime"].split(" ")[0]),
            realCity: realCity
        });
    }

    getDate(date) {
        return new Date(date.substring(0, 4), date.substring(5, 7) - 1, date.substring(8, 10)).toDateString().valueOf();
    }

    render() {
        return (
            <div>
                {this.state.realCity !== "Nowhere" && (
                    <div>
                        <h3>{this.state.realCity}</h3>
                        <h6>{this.state.localDate}</h6>
                        <div className="WeatherCard">
                            <div className="Box TemperatureBox">
                                <h5>{this.state.temperature} ºF</h5>
                            </div>
                            <div className="Box CloudCoverBox">
                                <h5>{this.state.cloudCover}%</h5>
                            </div>
                            <div className="Box HumidityBox">
                                <h5>{this.state.humidity} %rh</h5>
                            </div>
                            <div className="Box PrecipitationBox">
                                <h5>{this.state.precipitation} in</h5>
                            </div>
                            <div className="Box UVIndexBox">
                                <h5>{this.state.uvIndex} kg/s^3</h5>
                            </div>
                            <div className="Box VisibilityBox">
                                <h5>{this.state.visibility} mi</h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default WeatherCard;