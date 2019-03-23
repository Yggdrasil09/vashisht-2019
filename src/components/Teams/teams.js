import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Card from "./Card";
import CardWebops from "./CardWebops";
import Data from "./tdata";
import "./team.css";

class Teams extends Component {
	render() {
		return (
			<Container className="team1">
				<p>TEAMS</p>
				<h1>Organizers</h1>
				<Row className="team">
					{Data.organizers.map(items => (
						<Col key={items.number} lg={3}>
							<Card image={items.image} name={items.name} number={items.number} email={items.email} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
				<hr></hr>
				<h1>Publicity Team</h1>
				<Row className="team">
					{Data.publicity.map(items => (
						<Col key={items.number} lg={3}>
							<Card image={items.image} name={items.name} number={items.number} email={items.email} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
				<hr></hr>
				<h1>Quality Management Services</h1>
				<Row className="team">
					{Data.qms.map(items => (
						<Col key={items.number} lg={4}>
							<Card image={items.image} name={items.name} number={items.number} email={items.email} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
				<hr></hr>
				<h1>Sponsorship Team</h1>
				<Row className="team">
					{Data.sponsorship.map(items => (
						<Col key={items.number} lg={12}>
							<Card image={items.image} name={items.name} number={items.number} email={items.email} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
				<hr></hr>
				<h1>Graphic Design Team</h1>
				<Row className="team">
					{Data.gdc1.map(items => (
						<Col key={items.number} lg={3}>
							<Card image={items.image} name={items.name} number={items.number} email={items.email} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
				<Row className="team">
					{Data.gdc2.map(items => (
						<Col key={items.number} lg={6}>
							<Card image={items.image} name={items.name} number={items.number} email={items.email} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
				<hr></hr>
				<h1>WebOps Team</h1>
				<Row className="team">
					{Data.webops.map(items => (
						<Col key={items.number} lg={4}>
							<CardWebops image={items.image} name={items.name} number={items.number} github={items.github} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
				<hr></hr>
				<h1>Finance Team</h1>
				<Row className="team">
					{Data.finance.map(items => (
						<Col key={items.number} lg={6}>
							<Card image={items.image} name={items.name} number={items.number} email={items.email} linkedin={items.linkedin} instagram={items.instagram} />
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}

export default Teams;
