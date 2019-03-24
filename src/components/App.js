import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "react-fullpage";

import '../styles/App.css';
import HomePage from './homepage/HomePage';
import Coming from './comming-soon/Coming';
import Events from './Events/Events';
import Navbar from "./Navbar";
import Teams from "./Teams/teams";
import Talks from "./talks/talks";

class App extends Component {
	componentDidMount() {
		const ele = document.getElementById("ipl-progress-indicator");
		if (ele) {
			setTimeout(() => {
				ele.classList.add("available");
				setTimeout(() => {
					ele.outerHTML = "";
				}, 2000);
			}, 1000);
		}
	}
	render() {
		return (
			<BrowserRouter>
				<div className="main-div">
					<Header>
						<Navbar />
					</Header>
					<Switch>
						<Route path='/' component={HomePage} exact/>
						<Route path='/events' component={Events}/>						
						<Route path="/talks" component={Talks} />
						<Route path="/team" component={Teams} />
						<Route path="/sponsors" component={Coming} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
