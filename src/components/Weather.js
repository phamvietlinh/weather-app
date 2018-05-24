import React from "react";

const Weather = props => (
	<div>
		{
			props.country && <p className="weather__key">Location:
			<span className="weather__value"> {props.country} </span>
			</p>
		}
		{
			props.country && <p className="weather__key">Temperature:
			<span className="weather__value"> {props.temperature} </span>
			</p>
		}
		{
			props.country && <p className="weather__key">Humidity:
			<span className="weather__value"> {props.humidity} </span>
			</p>
		}
		{
			props.country && <p className="weather__key">Condition:
			<span className="weather__value"> {props.description} </span>
			</p>
		}
		{
			props.error && <p className="weather__key">Error:
			<span className="weather__value"> {props.error} </span>
			</p>
		}
	</div>
)

export default Weather;