import React, { Component } from "react";

import "../styles/App.css";
import HomePage from "./HomePage";

class App extends Component {
	render() {
		return (
			<div className="container">
				<HomePage />
			</div>
		);
	}
}

export default App;
