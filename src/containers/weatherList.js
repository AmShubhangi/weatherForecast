import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {

    renderWeather(cityData) {
        const id = cityData.city.id;
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={id}>
                <td>
                    {/* <GoogleMap lng={lon} lat={lat} /> */}
                    {name}
                </td>
                <td>
                    <Chart data={temps} color="green" units='K' />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units='hPa' />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(k)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather: weather };
}

export default connect(mapStateToProps)(WeatherList);

