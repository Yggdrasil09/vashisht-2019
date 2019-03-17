import React,{Component} from 'react';
import {SectionsContainer, Section} from 'react-fullpage';

import Home from './Home';
import About from './About';
import Teaser from './Teaser'
import './homepage.css';

class HomePage extends Component{
	render(){
   		let options = {
			sectionClassName:     'section',
      		anchors:              ['Home','About','Teaser'],
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
					<Home/>
				</Section>
				<Section >
					<About/>
				</Section>
				<Section>
					<Teaser/>
				</Section>
			</SectionsContainer>
	   );
	}
}

export default HomePage;