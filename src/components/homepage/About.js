import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './homepage.css';

class About extends Component{
	render(){
		return(
		  <Container className='about'>
				<Row>
					<Col>
						<p>ABOUT US</p>
						<h5>Vashisht is the annual inter college technical fest of IIITDM Kancheepuram. The two day fest will be a rendezvous of young minds where they not only compete with each other but also interact with professionals and make some valuable connections for their career. We are team of visionary individuals who aim to inculcate design thinking among the students which resonates with the vision of our institute.</h5>
					</Col>
				</Row>
		  </Container>
   	);
	}
}

export default About;