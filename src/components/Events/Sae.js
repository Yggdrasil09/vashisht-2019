import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './club-events.css';

class Sae extends Component{
	constructor(){
		super();
		this.state = {
			width : window.innerWidth,
		}
		this.training = this.training.bind(this);
		this.bridge = this.bridge.bind(this);
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

	training(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('sae').classList.toggle('active');
			}
			document.getElementById('training').hidden =true;
			document.getElementById('bridge').hidden =true;
			document.getElementsByClassName('sae')[0].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'TRAININGVIEW'});
		}
		else
		{
			document.getElementsByClassName('sae')[0].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'TRAININGCLOSE'});
		}
	}

	bridge(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('sae').classList.toggle('active');
			}
			document.getElementById('training').hidden =true;
			document.getElementById('bridge').hidden =true;
			document.getElementsByClassName('sae')[1].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'BRIDGEVIEW'});
		}
		else
		{
			document.getElementsByClassName('sae')[1].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'BRIDGECLOSE'});
		}
	}

	render(){
		return(
			<Container className='club-events left-sae'>
				<Row className='contest fonts2' id='training'>
					<p onClick={this.training}>Training Program on Automobile and Vehicle Dynamics</p>
				</Row>
				<Row className='contest fonts' id='bridge'>
					<p onClick={this.bridge}>Bridge Fabrication</p>
				</Row>
				<Container className='details-container active sae'>
					<Row className='event-details'>
						<h1 >Training Program on Automobile and Vehicle Dynamics</h1>
						<ul className='bottom-down'>
							<h3 className='display-pos'>Introduction :</h3>
							<li>
								<h4>Vashisht&#39;19 in collaboration with AMZ automotive is going to conduct a
								&#39;Training Program on Automobile &amp; Vehicle Dynamics&#39;. If you feel automobile is your
								passion, then this is your chance to learn and explore the very field.</h4>
							</li>
						</ul>
						<ul>
							<h3>What&#39;s there in the box?</h3>
							<li>
								<h4>Chassis design</h4>
							</li>
							<li>
								<h4>Steering</h4>
							</li>
							<li>
								<h4>Braking</h4>
							</li>
							<li>
								<h4>Suspension, and much more</h4>
							</li>
						</ul>
						<h4>Hands-on experience on everything mentioned above.</h4>
						<h3>What do I get?</h3>
						<ul>
							<li>
								<h4>Winners of the workshop will get free Industrial Training &amp; Visit opportunities in the
								associated domain.</h4>
							</li>
							<li>
								<h4>Merit certificate to the top scorers in the competition conducted by Amz&#39; s trainers.</h4>
							</li>
							<li>
								<h4>All the participants will be given “Certificate of Participation” issued by “AMZ
								AUTOMOTIVE”.</h4>
							</li>
							<li>
								<h4>Every Participant will get a course book on “Automotive Dynamics and Designing”.</h4>
							</li>
							<li>
								<h4>Placement assistance to workshop winners.</h4>
							</li>
						</ul>
						<h3>Duration: 2 days (16 hours in total)</h3>
						<h3>Conducted by: AMZ automotives</h3>
						<h3>Certification &amp; Kit: Every participant will receive a certificate of participation &amp; a course
						book on ‘Automotive Dynamics &amp; Designing’</h3>
						<h3>Course Fee: Rs 1000 per participant (including the kit)</h3>
						<h3>This workshop has been organised by keeping BAJA virtuals in mind. Learning about
						statics and dynamics of ATV will not only aide us in BAJA virtual round but would also be
						very informative for students in mechanical department.</h3>
					</Row>
				</Container>
				<Container className='details-container active sae sae1'>
					<Row className='event-details'>
						<h1 >Bridge Fabrication</h1>
						<h3 className='display-pos'>Abstract :</h3>
						<h4>Ever wondered what makes a bridge so iconic? It&#39;s less about its length, load
						carrying capability, etc but more about the truss design it carries.</h4>
						<h4>Here, we give you a chance to design your own bridge model outside CAD and explore
						how to manage load distribution and vibration associated with the same.</h4>
						<h3>Problem Statement :</h3>
						<ul>
							<li>
								<h4>Design and fabrication of your own truss bridge capable of holding
								given weight using only the materials provided.</h4>
							</li>
							<li>
								<h4>Each team is required to first provide a design &amp; analysis of their bridge model. Based
								on the same, they can proceed for fabrication.</h4>
							</li>
						</ul>
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>10 mins will be alloted to each team for on-spot design submission. [5 mins for
									presentation and 5 mins for judges’ questions]</h4>
							</li>
							<li>
								<h4>Minimum length of bridge: 50cm**</h4>
							</li>
							<li>
								<h4>Minimum width: 20cm**</h4>
							</li>
							<li>
								<h4>Limited number of popsicle sticks will be provided</h4>
							</li>
							<li>
								<h4>Base Column support is not allowed</h4>
							</li>
							<li>
								<h4>No major change in design at further stage will be allowed.</h4>
							</li>
							<li>
								<h4>No overlapping of popsicle sticks. Only one joint at a point is allowed.</h4>
							</li>
							<li>
								<h4>Team size: max 4 members**</h4>
							</li>
						</ul>
						<h3>Prize Money: 10,000 (1st: 5000 ; 2nd: 3000 ; 3rd: 2000) [tentative]</h3>
						<h3>Duration: Round #1: 2 hrs (1hr designing + 1hr presentation)</h3>
						<h3>Round #2: 3 hrs</h3>
						<ul>
							<h3>No of Rounds: 2</h3>
							<li>
								<h4>Round #1: Design report presentation</h4>
							</li>
							<li>
								<h4>Round #2: Fabrication using only ice-cream sticks, threads, glue and other given
								materials.</h4>
							</li>
						</ul>
						<ul>
							<h3>Judging Criterion : </h3>
							<li>
								<h4>Detailing of design report</h4>
							</li>
							<li>
								<h4>How much impact and distributed load your design can sustain.</h4>
							</li>
							<li>
								<h4>Negative points for dimensional inaccuracy.</h4>
							</li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Sae.propTypes = {
	clicked_event :PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired
}

const mapStateToProps = function(state){
	return{
		clicked_event : state.clicked_event,
	}
}

export default connect(mapStateToProps)(Sae);