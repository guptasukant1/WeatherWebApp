// export const url = "/cities";
export const geoAPIOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "739bea4d7amsh5cf233086ff6e89p198e6bjsneb7f345373d8",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_KEY = "02bc6df42c7ff9f6e829feb2d72ac8fb";

// try {
// 	const response = await fetch("/cities", geoAPIOptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }