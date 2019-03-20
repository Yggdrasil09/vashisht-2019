import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

import "./team.css";
class CardWebops extends Component {
	render() {
		return (
			<div className="card">
				<img className="photo" alt="teams" src={this.props.image} />
				<div>
					<h1>{this.props.name}</h1>
					<h1>{this.props.number}</h1>
					<Row className="media1">
						<a href={this.props.github} target="_blank" rel="noopener noreferrer">
							<span className="media">
								<i className="fab fa-github fa-2x" />
							</span>
						</a>
						<a href={this.props.instagram} target="_blank" rel="noopener noreferrer">
							<span className="media">
								<i className="fab fa-instagram fa-2x" />
							</span>
						</a>
						<a href={this.props.linkedin} target="_blank" rel="noopener noreferrer">
							<span className="media">
								<i className="fab fa-linkedin-in fa-2x" />
							</span>
						</a>
					</Row>
				</div>
			</div>
		);
	}
}

CardWebops.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	linkedin: PropTypes.string.isRequired,
	instagram: PropTypes.string.isRequired
};

export default CardWebops;
