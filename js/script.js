//

$(document).ready(function () {
	$.ajax({
		method: "GET",
		url: "http://api.weatherapi.com/v1/forecast.json",
		data: {
			key: "4337f73aa1334df8bb7133720232812",
			q: "Amsterdam",
			days: 5,
			aqi: "no",
			alerts: "no",
		},
		success: function (response) {
			console.log(response.current.temp_c);
			console.log(response);
			$(".trenutnaTemp").text(response.current.temp_c + "˚");
			$("#uslovi").text(response.current.condition.text);
			$("#condition1").text(response.current.condition.text);
			console.log(response.forecast.forecastday[0].day.maxtemp_c)
			$("#hiLow1").text("H:"+
				response.forecast.forecastday[0].day.maxtemp_c + "˚" +" "+
					"L:" +
					response.forecast.forecastday[0].day.mintemp_c + "˚"
			);
			$("#grad").text(response.location.name);
			$("#city1").text(
				
				response.location.name + "," + response.location.country
			);
			//

			$("#yestedayTemp").text(
				response.forecast.forecastday[0].day.avgtemp_c + "˚"
			);
			$("#icon1").attr(
				"src",
				response.forecast.forecastday[0].day.condition.icon
			);
			$("#rain1").text(
				response.forecast.forecastday[0].day.daily_chance_of_rain + "%"
			);

			//
			$("#icon2").attr("src", response.current.condition.icon);
			$("#rain2").text(
				response.forecast.forecastday[0].day.daily_chance_of_rain + "%"
			);
			//
			$("#tomorrowTemp").text(
				response.forecast.forecastday[1].day.avgtemp_c + "˚"
			);
			$("#icon3").attr(
				"src",
				response.forecast.forecastday[1].day.condition.icon
			);
			$("#rain3").text(
				response.forecast.forecastday[1].day.daily_chance_of_rain + "%"
			);
			//
			$("#dayAtferTemp").text(
				response.forecast.forecastday[2].day.avgtemp_c + "˚"
			);
			$("#icon4").attr(
				"src",
				response.forecast.forecastday[2].day.condition.icon
			);
			$("#rain4").text(
				response.forecast.forecastday[2].day.daily_chance_of_rain + "%"
			);
			//
		},
	});
});
$(document).ready(function () {
	$.ajax({
		method: "GET",
		url: "http://api.weatherapi.com/v1/forecast.json",
		data: {
			key: "4337f73aa1334df8bb7133720232812",
			q: "Rotterdam",
			days: 5,
			aqi: "no",
			alerts: "no",
		},
		success: function (response) {
			console.log(response)
			$("#condition2").text(response.current.condition.text);
			$("#cityTemp2").text(response.current.temp_c + "˚");
			$("#hiLow2").text("H:"+
				response.forecast.forecastday[0].day.maxtemp_c + "˚" +" "+
					"L:" +
					response.forecast.forecastday[0].day.mintemp_c + "˚"
			);
			$("#city2").text(
				
				response.location.name + "," + response.location.country
			);
		},
	});
});
$(document).ready(function () {
	$.ajax({
		method: "GET",
		url: "http://api.weatherapi.com/v1/forecast.json",
		data: {
			key: "4337f73aa1334df8bb7133720232812",
			q: "Eindhoven",
			days: 5,
			aqi: "no",
			alerts: "no",
		},
		success: function (response) {
			console.log(response)
			$("#condition3").text(response.current.condition.text);
			$("#cityTemp3").text(response.current.temp_c + "˚");
			$("#hiLow3").text("H:"+
				response.forecast.forecastday[0].day.maxtemp_c+ "˚" +" "+
					"L:" +
					response.forecast.forecastday[0].day.mintemp_c+ "˚"
			);
			$("#city3").text(
				
				response.location.name + "," + response.location.country
			);
		},
	});
});