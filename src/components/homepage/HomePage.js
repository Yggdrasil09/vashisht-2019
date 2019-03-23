import React, { Component } from "react";
import { SectionsContainer, Section } from "react-fullpage";

import Home from "./Home";
import About from "./About";
import Teaser from "./Teaser";
import "./homepage.css";

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			initialActiveSection: null
		};
	}

	onScroll = (p) => {
		if (this.state.initialActiveSection === null) this.setState(() => ({ initialActiveSection: p.activeSection }));
	}

	render() {
		const { initialActiveSection } = this.state;

		let options = {
			sectionClassName: "section",
			anchors: ["Home", "About", "Teaser"],
			scrollBar: false,
			navigation: true,
			verticalAlign: false,
			arrowNavigation: true,
			recordHistory: false
		};

		return (
			<SectionsContainer {...options} activeSection={initialActiveSection} scrollCallback={this.onScroll}>
				<Section>
					<Home />
				</Section>
				<Section>
					<About />
				</Section>
				<Section>
					<Teaser />
				</Section>
			</SectionsContainer>
		);
	}
}

export default HomePage;
