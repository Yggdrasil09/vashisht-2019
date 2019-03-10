import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './comming-soon.css';
import CountdownTime from './time.js'
import iiitdm from '../../resources/commingSoon/IIITDM@2x.png';
import vashisth from '../../resources/commingSoon/Vashisht Logo@2x.png';
import vastext from '../../resources/commingSoon/Vashisht Text@2x.png';




class Comming extends Component{
	render(){
		return(
			<Container >
				<Row>
					<Col className='mobile-col1'  md={3} >  
					</Col>
					<Col className='mobile-col' md={6} >
						<Row>
							<img src={iiitdm} className='logo logo-main1' alt="IIITDM" /> 
						</Row>
						<Row>
							<img src={vashisth} className='logo logo-main2' alt="Logo" /> 
						</Row>
						<Row>
							<img src={vastext} className='logo logo-main3' alt="Vashisht" /> 
						</Row>
						<CountdownTime/>		
					</Col>
					<Col md={3}className="cross-border">
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Comming;