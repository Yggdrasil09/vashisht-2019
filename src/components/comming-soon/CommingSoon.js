import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './comming-soon.css';
import CountdownTime from './time.js'
import iiitdm from '../../resources/commingSoon/IIITDM@2x.png';
import vashisth from '../../resources/commingSoon/Vashisht Logo@2x.png';
import vastext from '../../resources/commingSoon/Vashisht Text@2x.png';
import fb from '../../resources/commingSoon/facebook.png';
import insta from '../../resources/commingSoon/instagram.png';

const fbAddress= 'https://www.facebook.com/vashishtthetechfest/';
const instaAddress= 'https://www.instagram.com/vashisht_techfest/?hl=en' ;

class Comming extends Component{
	render(){
		return(
			<Container >
				<Row>
					<Col className='mobile-col1'  md={3} > 
						<Row className='social'>
							<a href={fbAddress} target="_blank" rel="noopener noreferrer"><img src={fb} className='social-icons' alt="facebookf" /></a>
							<a href={instaAddress} target="_blank" rel="noopener noreferrer"><img src={insta} className='social-icons' alt="instagram" /></a>
						</Row> 
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