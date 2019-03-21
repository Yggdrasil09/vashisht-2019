import React, { Component } from "react";

import "./talks.css";
class Talks extends Component {
	render() {
		return (
			<div className="talks1">
				<p>TALKS</p>
				<div className="hello">
					<img className="prakash" src={require("../../resources/talks/talk1.png")} alt="prakash" />
				</div>
			</div>
		);
	}
}

export default Talks;
