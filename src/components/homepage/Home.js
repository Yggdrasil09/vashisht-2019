import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './homepage.css';
import logo from '../../resources/homepage/Group 377@2x.png';
import text from '../../resources/homepage/Vashisht Text@2x.png';
import arrow from '../../resources/homepage/Down@2x.png';

class Home extends Component{
	
	render(){
   	return(
			<Container>
				<Row>
					<Col sm={3}></Col>
					<Col sm={6} >
						<Row className='logo1'>
							<img src={logo}  alt='vashisht logo'/>
						</Row>
						<Row className='logo2'>
							<img src={text} alt='vashisht text'/>
						</Row>
						<Row className='logo3'>
							<a href='#sectionTwo'><img src={arrow}alt='arrow down'></img></a>
						</Row>
					</Col>
					<Col sm={3}></Col>
				</Row>
			</Container>
   	);
	}
}

export default Home;