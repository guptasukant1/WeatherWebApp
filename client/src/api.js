// export const url = "/cities";
export const geoAPIOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "739bea4d7amsh5cf233086ff6e89p198e6bjsneb7f345373d8",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

// try {
// 	const response = await fetch("/cities", geoAPIOptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }