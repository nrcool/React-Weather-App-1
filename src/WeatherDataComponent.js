import React, { Component } from "react";

export default class WeatherDataComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //controlling render method
    if (
      nextProps.temp === this.props.temp &&
      nextProps.city === this.props.city
    ) {
      return false;
    }
    return true;
  }

  render() {
    console.log("render from WeatherComponent");
    return (
      <div className="weather-component">
        <div>
          <p>Feels like {this.props.feelsLike}</p>
          <p>{this.props.city}</p>
          <img
            src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="description">
          <div className="temp">
            <h1>{this.props.temp} C°</h1>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/4498/4498691.svg?token=exp=1618924223~hmac=d49890b702527d89a43db8ca4f542d57"
              width="50"
              height="50"
              alt=""
            />
          </div>
          <div className="content">
            <p><img src="https://www.flaticon.com/svg/vstatic/svg/4370/4370768.svg?token=exp=1618925688~hmac=ef442fe7ab7ada8cfffd9ec7659e0da5" alt="" width="20"/>{this.props.humidity} %</p>
            <p><img src="https://www.flaticon.com/svg/vstatic/svg/1085/1085640.svg?token=exp=1618925488~hmac=591d076bb0d7393e2b23b1511643274c" alt="" width="20"/> {this.props.pressure} </p>
            <p>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/3815/3815449.svg?token=exp=1618925074~hmac=18afd7ba815a7657d30248d91c84f3da"
                alt=""
                width="20"
              />{" "}
              {this.props.maxTemp}C°
            </p>
            <p>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/3815/3815449.svg?token=exp=1618925074~hmac=18afd7ba815a7657d30248d91c84f3da"
                alt=""
                width="20"
              />{" "}
              {this.props.minTemp}C°
            </p>
          </div>
        </div>
      </div>
    );
  }
}
