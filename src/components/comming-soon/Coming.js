import React,{Component} from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import {Container,Row,Col} from 'react-bootstrap';

import './comming-soon.css';
import '../homepage/homepage.css';

class Coming extends Component{
	render(){
		let options = {
			sectionClassName:     'section',
		   	anchors:              ['Coming-soon'],
		   	scrollBar:            false,
		   	navigation:           true,
		   	verticalAlign:        false,
		 	arrowNavigation:      true,
		 	recordHistory:		  false,
		 	activeSection:        0,
	   	};
	 	return(
			<SectionsContainer {...options}>
				<Section>
					<Container>
						<Row className='coming'>
							<Col>
								<p>Coming soon..</p>
							</Col>
						</Row>
					</Container>
			 	</Section>
			</SectionsContainer>
		);
 	}
}

export default Coming;