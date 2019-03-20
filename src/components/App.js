import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "react-fullpage";

import "../styles/App.css";
import HomePage from "./homepage/HomePage";
import Coming from "./comming-soon/Coming";
import Navbar from "./Navbar";
import Teams from "./Teams/teams";

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
						<Route path="/" component={HomePage} exact />
						<Route path="/events" component={Coming} />
						<Route path="/talks" component={Coming} />
						<Route path="/team" component={Teams} />
						<Route path="/sponsors" component={Coming} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
