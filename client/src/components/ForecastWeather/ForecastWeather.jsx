import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from "react-accessible-accordion";

import "./ForecastWeather.css";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ForecastWeather = ({ data }) => {
	const dayInAWeek = new Date().getDay();
	const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(
		WEEK_DAYS.slice(0, dayInAWeek),
	);

	return (
		<>
			<label className="title">Daily</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, idx) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className="daily-item">
									<img
										src={`icons/${item.weather[0].icon}.png`}
										alt=""
										className="icon-small"
									/>
									<label className="day">{forecastDays[idx]}</label>
									<label className="description">
										{item.weather[0].description}
									</label>
									<label className="min-max">
										{Math.round(item.main.temp_min)}°C&nbsp;/&nbsp;
										{Math.round(item.main.temp_max)}°C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="daily-details-grid">
								<div className="daily-details-grid-item">
									<label>Feels Like</label>
									<label>{Math.round(item.main.feels_like)} °C</label>
								</div>
								<div className="daily-details-grid-item">
									<label>Wind Speed</label>
									<label>{Math.round(item.wind.speed)} Km/h</label>
								</div>
								<div className="daily-details-grid-item">
									<label>Humidity</label>
									<label>{Math.round(item.main.humidity)} %</label>
								</div>
								<div className="daily-details-grid-item">
									<label>Clouds</label>
									<label>{item.clouds.all} %</label>
								</div>
								<div className="daily-details-grid-item">
									<label>Pressure</label>
									<label>{Math.round(item.main.pressure)} hPa</label>
								</div>
								<div className="daily-details-grid-item">
									<label>Sea Level</label>
									<label>{item.main.sea_level} m</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

export default ForecastWeather;
