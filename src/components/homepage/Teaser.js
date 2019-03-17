import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './homepage.css';

class Teaser extends Component{
	render(){
   	return(
			<Container>
				<Row className='teaser'>
					<Col>
						<p>TEASER</p>
						<h2>Coming soon..</h2>
					</Col>
				</Row>
			</Container>
   	);
	}
}

export default Teaser;