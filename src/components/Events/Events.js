import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {SectionsContainer, Section} from 'react-fullpage';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Zerone from './Zerone';
import Electronics from './Electronics';
import Epic from './Epic';
import Robotics from './Robotics';
import Ids from './Ids';
import Sae from './Sae';															
import './events.css';
import zerone from '../../resources/events/Group 562.png';
import electronics from '../../resources/events/Group 563.png';
import epic from '../../resources/events/Group 564.png';
import robotics from '../../resources/events/Group 565.png';
import ids from '../../resources/events/Group 566.png';
import sae from '../../resources/events/Group 567.png';

var elements = [0,0,0,0,0,0];
var events = ['zerone','electronics','epic','robotics','ids','sae'];

class Events extends Component{
	constructor(){
		super();
		this.state = {
			clicked : 0,
			width : window.innerWidth,
		}
		this.zerone_event = this.zerone_event.bind(this);
		this.electronics_event = this.electronics_event.bind(this);
		this.epic_event = this.epic_event.bind(this);
		this.robotics_event = this.robotics_event.bind(this);
		this.ids_event = this.ids_event.bind(this);
		this.sae_event = this.sae_event.bind(this);
		this.back_event = this.back_event.bind(this);
		this.effect = this.effect.bind(this);
	}

	componentWillMount(){
		window.addEventListener('resize',()=>{
			this.setState({ width: window.innerWidth });
		})
	}

	componentWillUnmount(){
		window.addEventListener('resize', ()=>{
			this.setState({
				width:window.innerWidth,
			})
		});
	}

	effect()
	{
		for(let i=0;i<elements.length;i++)
		{
			if(!elements[i])
			{
				document.getElementById(events[i]).classList.toggle('active');
			}
		}
		document.getElementById('back_arrow').classList.toggle('active');
	}
	back_event(){
		if(!this.props.clicked_event)
		{
			this.setState({
				clicked:0
			});
			this.effect();
			elements.fill(0);
		}
		else
		{
			if(this.props.zerone_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('zerone').classList.toggle('active');
				}
				document.getElementById('codewars').hidden =false;
				document.getElementById('hackathon').hidden =false;
				document.getElementById('deeplearning').hidden =false;
				document.getElementsByClassName('details-container')[0].classList.toggle('active');
				this.props.dispatch({type:'ZERONECLOSE'});
			}
			else if(this.props.hackathon_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('zerone').classList.toggle('active');
				}
				document.getElementById('codewars').hidden =false;
				document.getElementById('hackathon').hidden =false;
				document.getElementById('deeplearning').hidden =false;
				document.getElementsByClassName('details-container')[1].classList.toggle('active');
				this.props.dispatch({type:'HACKATHONCLOSE'});
			}
			else if(this.props.deeplearning_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('zerone').classList.toggle('active');
				}
				document.getElementById('codewars').hidden =false;
				document.getElementById('hackathon').hidden =false;
				document.getElementById('deeplearning').hidden =false;
				document.getElementsByClassName('details-container')[2].classList.toggle('active');
				this.props.dispatch({type:'DEEPLEARNINGCLOSE'});
			}
			else if(this.props.break_the_circuit)
			{
				if(this.state.width<575)
				{
					document.getElementById('electronics').classList.toggle('active');
				}
				document.getElementById('break-the-circuit').hidden = false;
				document.getElementById('technothon').hidden =  false;
				document.getElementById('aavishkar').hidden = false;
				document.getElementsByClassName('electronic')[0].classList.toggle('active');
				this.props.dispatch({type:'BREAKTHECCLOSE'});
			}
			else if(this.props.technothon_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('electronics').classList.toggle('active');
				}
				document.getElementById('break-the-circuit').hidden = false;
				document.getElementById('technothon').hidden =  false;
				document.getElementById('aavishkar').hidden = false;
				document.getElementsByClassName('electronic')[1].classList.toggle('active');
				this.props.dispatch({type:'TECHNOTHONCLOSE'});
			}
			else if(this.props.aavishkar_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('electronics').classList.toggle('active');
				}
				document.getElementById('break-the-circuit').hidden = false;
				document.getElementById('technothon').hidden =  false;
				document.getElementById('aavishkar').hidden = false;
				document.getElementsByClassName('electronic')[2].classList.toggle('active');
				this.props.dispatch({type:'AAVISHKARCLOSE'});
			}
			else if(this.props.bid_bad_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('epic').classList.toggle('active');
				}
				document.getElementById('bid_bad').hidden =false;
				document.getElementById('tic-tac').hidden =false;
				document.getElementById('business').hidden =false;
				document.getElementsByClassName('epic-now')[0].classList.toggle('active');
				this.props.dispatch({type:'BID_BADCLOSE'});
			}
			else if(this.props.tic_tac_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('epic').classList.toggle('active');
				}
				document.getElementById('bid_bad').hidden =false;
				document.getElementById('tic-tac').hidden =false;
				document.getElementById('business').hidden =false;
				document.getElementsByClassName('epic-now')[1].classList.toggle('active');
				this.props.dispatch({type:'TIC_TACCLOSE'});
			}
			else if(this.props.vbc_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('epic').classList.toggle('active');
				}
				document.getElementById('bid_bad').hidden =false;
				document.getElementById('tic-tac').hidden =false;
				document.getElementById('business').hidden =false;
				document.getElementsByClassName('epic-now')[2].classList.toggle('active');
				this.props.dispatch({type:'VBCCLOSE'});
			}
			else if(this.props.quiz_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('robotics').classList.toggle('active');
				}
				document.getElementById('quiz').hidden =false;
				document.getElementById('line-follower').hidden =false;
				document.getElementById('racing').hidden =false;
				document.getElementById('climbing').hidden =false;
				document.getElementsByClassName('robo')[0].classList.toggle('active');
				this.props.dispatch({type:'QUIZCLOSE'});
			}
			else if(this.props.line_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('robotics').classList.toggle('active');
				}
				document.getElementById('quiz').hidden =false;
				document.getElementById('line-follower').hidden =false;
				document.getElementById('racing').hidden =false;
				document.getElementById('climbing').hidden =false;
				document.getElementsByClassName('robo')[1].classList.toggle('active');
				this.props.dispatch({type:'LINECLOSE'});
			}
			else if(this.props.racing_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('robotics').classList.toggle('active');
				}
				document.getElementById('quiz').hidden =false;
				document.getElementById('line-follower').hidden =false;
				document.getElementById('racing').hidden =false;
				document.getElementById('climbing').hidden =false;
				document.getElementsByClassName('robo')[2].classList.toggle('active');
				this.props.dispatch({type:'RACINGCLOSE'});
			}
			else if(this.props.climbing_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('robotics').classList.toggle('active');
				}
				document.getElementById('quiz').hidden =false;
				document.getElementById('line-follower').hidden =false;
				document.getElementById('racing').hidden =false;
				document.getElementById('climbing').hidden =false;
				document.getElementsByClassName('robo')[3].classList.toggle('active');
				this.props.dispatch({type:'CLIMBINGCLOSE'});
			}
			else if(this.props.faceoff_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('ids').classList.toggle('active');
				}
				document.getElementById('faceoff').hidden =false;
				document.getElementsByClassName('ids')[0].classList.toggle('active');
				this.props.dispatch({type:'FACEOFFCLOSE'});
			}
			else if(this.props.training_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('sae').classList.toggle('active');
				}
				document.getElementById('training').hidden =false;
				document.getElementById('bridge').hidden =false;
				document.getElementsByClassName('sae')[0].classList.toggle('active');
				this.props.dispatch({type:'TRAININGCLOSE'});
			}
			else if(this.props.bridge_event)
			{
				if(this.state.width<575)
				{
					document.getElementById('sae').classList.toggle('active');
				}
				document.getElementById('training').hidden =false;
				document.getElementById('bridge').hidden =false;
				document.getElementsByClassName('sae')[1].classList.toggle('active');
				this.props.dispatch({type:'BRIDGECLOSE'});
			}
			this.props.dispatch({type:'CLOSE'});
		}
	}
	zerone_event(){
		if(!this.state.clicked)
		{
			this.setState({
				clicked:1
			});
			elements.fill(0);
			elements[0]=1;
			this.effect();
		}
		else{
			if(elements[0])
			{
				this.back_event();
			}
		}
	}
	electronics_event(){
		if(!this.state.clicked)
		{
			this.setState({
				clicked:1
			});
			elements.fill(0);
			elements[1] = 1;
			this.effect();
		}
		else
		{
			if(elements[1])
			{
				this.back_event();
			}
		}
	}
	epic_event(){
		if(!this.state.clicked)
		{
			this.setState({
				clicked:1
			});
			elements.fill(0);
			elements[2] = 1;
			this.effect();
		}
		else
		{
			if(elements[2])
			{
				this.back_event();
			}
		}
	}
	robotics_event(){
		if(!this.state.clicked)
		{
			this.setState({
				clicked:1
			});
			elements.fill(0);
			elements[3] = 1;
			this.effect();
		}
		else
		{
			if(elements[3])
			{
				this.back_event();
			}
		}
	}
	ids_event(){
		if(!this.state.clicked)
		{
			this.setState({
				clicked:1
			});
			elements.fill(0);
			elements[4] = 1;
			this.effect();
		}
		else
		{
			if(elements[4])
			{
				this.back_event();
			}
		}
	}
	sae_event(){
		if(!this.state.clicked)
		{
			this.setState({
				clicked:1
			});
			elements.fill(0);
			elements[5] = 1;
			this.effect();
		}
		else
		{
			if(elements[5])
			{
				this.back_event(); 
			}
		}
	}

	render(){
    	let options = {
			sectionClassName:     'section',
      		anchors:              ['Events'],
      		scrollBar:            false,
      		navigation:           false,
      		verticalAlign:        false,
			arrowNavigation:      true,
			recordHistory:		  false,
			activeSection:        0,
      	};
		return(
			<SectionsContainer {...options}>
				<Section>
					<Container className='events-col'>
						<Row className='events-heading'>
							<Col>
								<img id='back_arrow' src={require('../../resources/events/back-arrow.png')} alt='back-arrow' onClick={this.back_event}/>
								<p>EVENTS</p>
							</Col>
						</Row>
						<Row className='events'>
							<Col sm={6} xs={6} className='club'>
								{this.state.width<575?<img id='zerone' className='active' src={require('../../resources/mobile/Group 571.png')} alt='zerone' onClick={this.zerone_event}/>:<img id='zerone' className='active' src={zerone} alt='zerone' onClick={this.zerone_event}/>}
							</Col>
							<Col sm={6} xs={6} className='club'>
								{this.state.width<575?<img id='electronics' className='active' src={require('../../resources/mobile/Group 570.png')} alt='electronics' onClick={this.electronics_event}/>:<img id='electronics' className='active' src={electronics} alt='electronics' onClick={this.electronics_event}/>}
							</Col>
							{elements[0] && <Zerone/> }
							{elements[1] && <Electronics/>}
						</Row>
						<Row className='events'>
							<Col sm={6} xs={6} className='club'>
								{this.state.width<575?<img id='epic' className='active' src={require('../../resources/mobile/Group 572.png')} alt='epic club' onClick={this.epic_event}/>:<img id='epic' className='active' src={robotics} alt='epic club' onClick={this.epic_event}/>}
							</Col>
							<Col sm={6} xs={6} className='club'>
								{this.state.width<575?<img id='robotics' className='active' src={require('../../resources/mobile/Group 569.png')} alt='robotics' onClick={this.robotics_event}/>:<img id='robotics' className='active' src={epic} alt='robotics' onClick={this.robotics_event}/>}	
							</Col>
							{elements[2] && <Epic/>}
							{elements[3] && <Robotics/>}
						</Row>
						<Row className='events'>
							<Col sm={6} xs={6} className='club'>
								{this.state.width<575?<img id='ids' className='active' src={require('../../resources/mobile/Group 573.png')} alt='industrial design' onClick={this.ids_event}/>:<img id='ids' className='active' src={ids} alt='industrial design' onClick={this.ids_event}/>}
							</Col>
							<Col sm={6} xs={6} className='club'>
								{this.state.width<575?<img id='sae' className='active' src={require('../../resources/mobile/Group 568.png')} alt='sae club' onClick={this.sae_event}/>:<img id='sae' className='active' src={sae} alt='sae club' onClick={this.sae_event}/>}								
							</Col>
							{elements[4] && <Ids/>}
							{elements[5] && <Sae/>}
						</Row>
					</Container>
				</Section>
			</SectionsContainer>
	   );
	}
}

Events.propTypes = {
	clicked_event :PropTypes.number.isRequired,
	zerone_event : PropTypes.number.isRequired,
	hackathon_event : PropTypes.number.isRequired,
	deeplearning_event : PropTypes.number.isRequired,
	break_the_circuit : PropTypes.number.isRequired,
	technothon_event : PropTypes.number.isRequired,
	aavishkar_event : PropTypes.number.isRequired,
	bid_bad_event : PropTypes.number.isRequired,
	tic_tac_event : PropTypes.number.isRequired,
	vbc_event : PropTypes.number.isRequired,
	quiz_event : PropTypes.number.isRequired,
	line_event : PropTypes.number.isRequired,
	racing_event : PropTypes.number.isRequired,
	climbing_event : PropTypes.number.isRequired,
	faceoff_event : PropTypes.number.isRequired,
	training_event : PropTypes.number.isRequired,
	bridge_event : PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired
}

const mapStateToProps = function(state){
	return{
		clicked_event : state.clicked_event,
		zerone_event : state.zerone_event,
		hackathon_event : state.hackathon_event,
		deeplearning_event : state.deeplearning_event,
		break_the_circuit : state.break_the_circuit,
		technothon_event :state.technothon_event,
		aavishkar_event :state.aavishkar_event,
		bid_bad_event : state.bid_bad_event,
		tic_tac_event : state.tic_tac_event,
		vbc_event : state.vbc_event,
		quiz_event : state.quiz_event,
		line_event : state.line_event,
		racing_event : state.racing_event,
		climbing_event : state.climbing_event,
		faceoff_event : state.faceoff_event,
		training_event : state.training_event,
		bridge_event : state.bridge_event,
	}
}

export default connect(mapStateToProps)(Events);