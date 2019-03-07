import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import "../styles/HomePage.css";

class HomePage extends Component {
	render() {
		return (
			<main className="homepage-main">
				<div className="wrapper">
					<Grid divided="vertically" stackable>
						<Grid.Row columns={2}>
							<Grid.Column textAlign="center" verticalAlign="top" floated="right" width={8}>
								<img src={require("../resources/IIITDM@2x.png")} alt="iiitdm-text" className="iiitdm-text" /><br/>
								<img src={require("../resources/VashishtLogo@2x.png")} alt="vashisht-logo" className="vashisht-logo" /><br/>
								<img src={require("../resources/VashishtText@2x.png")} alt="vashisht-text" className="vashisht-text" />
							</Grid.Column>
							<Grid.Column width={4} textAlign="center">
								<img src={require("../resources/ComingSoonTape.png")} alt="vashisht-tape" className="vashisht-tape" />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</main>
		);
	}
}

export default HomePage;
