import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import city_list from "./city_list";

const API_KEY = "0be264e4766c82d8a6b26dd78ab07825";


class App extends React.Component {
	
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined,
	}

	getWeather = async (e) => {
		e.preventDefault();
		var findIndex = (city_list, city) => {
		    var result = -1;
		    city_list.forEach((city_element, index) => {
		        if(city_element.name.toLowerCase() === city.toLowerCase()){
		            result = index
		        }
		    })

		    return result
		}
		const city = e.target.elements.city.value;
		
		
		if(city){
			const city_id = city_list[findIndex(city_list, city)].id;
			// console.log(city_id);
			const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&APPID=${API_KEY}`);
			const data = await api_call.json();
			// console.log(data);
			this.setState({
				temperature: data.list[0].main.temp,
				country: data.city.country,
				humidity: data.list[0].main.humidity,
				description: data.list[0].weather[0].description,
				error: ""
			})
		}else {
			this.setState({
				temperature: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: "Please enter the value."
			})
		}
	}		

	render(){
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Titles />
									
								</div>
								<div className="col-xs-7 form-container">
									<Form getWeather={this.getWeather}/>
									<Weather temperature={this.state.temperature}
												country={this.state.country}
												humidity={this.state.humidity}
												description={this.state.description}
												error={this.state.error} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default App;