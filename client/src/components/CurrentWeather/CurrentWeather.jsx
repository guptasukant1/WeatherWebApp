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
					<p className="city">ND</p>
					<p className="weather-description">Sunny</p>
				</div>
				<img src="icons/01d.png" alt="weather" className="weather-icon" />
			</div>
			<div className="bottom">
				<p className="temperature">38°C</p>
				<div className="details">
					{/* <div className="param-row">
						<span className="param-label">Details</span>
					</div> */}
					<div className="param-row">
						<span className="param-label">Feels Like</span>
						<span className="param-value">36°C</span>
					</div>
					<div className="param-row">
						<span className="param-label">Wind Speed</span>
						<span className="param-value">5 km/h</span>
					</div>
					<div className="param-row">
						<span className="param-label">Humidity</span>
						<span className="param-value">15%</span>
					</div>
					<div className="param-row">
						<span className="param-label">Air Pressure</span>
						<span className="param-value">15 hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;