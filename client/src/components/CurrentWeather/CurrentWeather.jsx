import "./CurrentWeather.css";

const CurrentWeather = ({data}) => {
	return (
		// <div className="weather">
		// 	<div className="top">
		// 		<p className="city">ND</p>
		// 		<p className="weather-description">Sunny</p>
		// 	</div>
		// 	<img src='icons/01d.png' alt="weather" className="weather-icon" />
		// </div>
		<div className="weather">
			<div className="top">
				<div>
					<p className="city">{data.city}</p>
					<p className="weather-description">{data.weather[0].description}</p>
				</div>
				<img src={`icons/${data.weather[0].icon}.png`} alt="weather-icon" className="weather-icon" />
			</div>
			<div className="bottom">
				<p className="temperature">{Math.round(data.main.temp)}°C</p>
				<div className="details">
					{/* <div className="param-row">
						<span className="param-label">Details</span>
					</div> */}
					<div className="param-row">
						<span className="param-label">Feels Like</span>
						<span className="param-value">{Math.round(data.main.feels_like)}°C</span>
					</div>
					<div className="param-row">
						<span className="param-label">Wind Speed</span>
						<span className="param-value">{Math.round(data.wind.speed)} km/h</span>
					</div>
					<div className="param-row">
						<span className="param-label">Humidity</span>
						<span className="param-value">{Math.round(data.main.humidity)}%</span>
					</div>
					<div className="param-row">
						<span className="param-label">Air Pressure</span>
						<span className="param-value">{Math.round(data.main.pressure)} hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;