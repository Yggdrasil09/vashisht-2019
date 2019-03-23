import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './club-events.css';

class Electronics extends Component{
	constructor(){
		super();
		this.state = {
			width : window.innerWidth,
		}
		this.break_the_circuit = this.break_the_circuit.bind(this);
		this.technothon = this.technothon.bind(this);
		this.aavishkar = this.aavishkar.bind(this);
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

	break_the_circuit(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('electronics').classList.toggle('active');
			}
			document.getElementById('break-the-circuit').hidden = true;
			document.getElementById('technothon').hidden =  true;
			document.getElementById('aavishkar').hidden = true;
			document.getElementsByClassName('electronic')[0].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'BREAKTHECVIEW'});
		}
		else
		{
			document.getElementsByClassName('electronic')[0].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'BREAKTHECCLOSE'});
		}
	}

	technothon(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('electronics').classList.toggle('active');
			}
			document.getElementById('break-the-circuit').hidden = true;
			document.getElementById('technothon').hidden =  true;
			document.getElementById('aavishkar').hidden = true;
			document.getElementsByClassName('electronic')[1].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'TECHNOTHONVIEW'});
		}
		else
		{
			document.getElementsByClassName('electronic')[1].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'TECHNOTHONCLOSE'});
		}
	}

	aavishkar(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('electronics').classList.toggle('active');
			}
			document.getElementById('break-the-circuit').hidden = true;
			document.getElementById('technothon').hidden =  true;
			document.getElementById('aavishkar').hidden = true;
			document.getElementsByClassName('electronic')[2].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'AAVISHKARVIEW'});
		}
		else
		{
			document.getElementsByClassName('electronic')[2].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'AAVISHKARCLOSE'});
		}
	}

	render(){
		return(
			<Container className='club-events left'>
				<Row className='contest' id='break-the-circuit'>
					<p onClick={this.break_the_circuit}>Break The Circuit</p>
				</Row>
				<Row className='contest' id='technothon'>
					<p onClick={this.technothon}>Technothon</p>
				</Row>
				<Row className='contest' id='aavishkar'>
					<p onClick={this.aavishkar}>Aavishkar</p>
				</Row>
				<Container className='details-container electronic active'>
					<Row className='event-details'>
						<h1>Break The Circuit</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>Think circuit analysis is something so interesting and reflects on all your logical
						understanding? Here is a platform to prove your skills on Circuit analysis.</h4>
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>Teams with a max size of 3 can participate</h4>
							</li>
							<li>
								<h4>Inter-college groups are not allowed</h4>
							</li>
							<li>
								<h4>Usage of Internet and mobile phones are strictly prohibited unless told.</h4>
							</li>
							<li>
								<h4>Time limits must be strictly adhered to.</h4>
							</li>
							<li>
								<h4>Soldering should be performed as per the rules and protocols.</h4>
							</li>
							<li>
								<h4>The decision of the judges will be final.</h4>
							</li>
							<li>
								<h4>The circuits will be randomly chosen.</h4>
							</li>
						</ul>
						<h3>Format : </h3>
						<ul>
							<li>
								<h4>ROUND 1:</h4>
							</li>
							<li>
								<h5>A circuit analysis round to spot and debug the given circuit on a simulation platform like
								Multisim. Qualification to the next round is based on the highest number of circuits debugged.</h5>
							</li>
							<li>
								<h5>Duration : 1 hr</h5>
							</li>
							<li>
								<h4>Round 2: </h4>
							</li>
							<li>
								<h5>Collect the required components from the store house based on the given circuit diagram and
								solder them on PCB Strip board.</h5>
							</li>
							<li><h5>Duration : 1.5 hrs</h5></li>
						</ul>						
						<h3>Venue :</h3>
						<ul>
							<li>
								<h5 className='top-down'>Date : March 30</h5>
							</li>
							<li><h5>Time : 10am - 1pm</h5></li>
							<li>
								<h5>Venue : H210 lab</h5>
							</li>
						</ul>
						<h4>Prize money : 1st prize: 3k, 2nd prize: 2k</h4>
						<h3>Contact :</h3>
						<ul>
							<li>
								<h5 className='top-down'>Jeeva Keshav S - (+91) 9943677801</h5>
							</li>
							<li>
								<h5>Madhuvanthi R - (+91) 9884937757</h5>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container electronic pos1 active'>
					<Row className='event-details'>
						<h1>Technothon</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>Ever a tech geek? Or a keen follower of tech guru and gadgets? Well, here&#39;s
						your chance to show your knowledge to the world.</h4>
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>Teams with a max size of 2 can participate</h4>
							</li>
							<li>
								<h4>Inter-college groups are not allowed</h4>
							</li>
							<li>
								<h4>All the team which qualify Round 1 can participate in Rounds 2 and 3.</h4>
							</li>
							<li>
								<h4>The Tech quiz can be attended only once during the allotted time. Shortlisted teams
								will qualify for the next round.</h4>
							</li>
							<li>
								<h4>One in every qualified team has to participate in the JAM while the other can help in
								information gathering.</h4>
							</li>
							<li>
								<h4>JAM should be a non-stop talk on the chosen technology without break and repetition.</h4>
							</li>
							<li>
								<h4>Participants should bring their laptop with Matlab installed. (exception only to first years to use C/C++).</h4>
							</li>
						</ul>
						<h3>Format : </h3>
						<ul>
							<li>
								<h4>ROUND 1: Online tech quiz</h4>
							</li>
							<li>
								<h5>An online tech quiz based on the technological developments in the day-to-day life and their
								primary needs on 28th March 2019 from 9:00 - 9:30 PM.</h5>
							</li>
							<li>
								<h5>Register here for the test : </h5><a href='https://goo.gl/forms/JglGAmNHKGntxQ623' target='_blank' rel="noopener noreferrer">https://goo.gl/forms/JglGAmNHKGntxQ623</a>
							</li>
							<li>
								<h5>Duration : 30 mins</h5>
							</li>
							<li>
								<h4>Round 2: JAM (Just A Minute)</h4>
							</li>
							<li>
								<h5>The participants will be given a topic related to any aspect of technology and five minutes of
								prep time, after which they will have to make a minute long speech about the given topic.</h5>
							</li>
							<li>
								<h4>Round 3:</h4>
								<h5>The participants will be given a question and limited time to write a program on MATLAB or
									C/C++ to test your problem solving skills and solution approach.</h5>
							</li>
							<li>
								<h5>Duration : 1.5 hrs</h5>
							</li>
						</ul>						
						<h3>Venue :</h3>
						<ul>
							<li>
								<h5 className='top-down'>Date : March 30</h5>	
							</li>
							<li><h5>Time : 3:00pm - 6:00pm</h5></li>
							<li>
								<h5>Venue : H210 lab</h5>
							</li>
						</ul>
						<h4>Prize money : 1st prize: 3k, 2nd prize: 2k</h4>
						<h3>Contact :</h3>
						<ul>
							<li>
								<h5 className='top-down'>Jeeva Keshav S - (+91) 9943677801</h5>
							</li>
							<li>
								<h5>Madhuvanthi R - (+91) 9884937757</h5>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container electronic pos2 active'>
					<Row className='event-details'>
						<h1>Aavishkar</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>Have you ever thought of some inquisitive real time problem statement and found an
						innovative efficient solution? Then, this is your chance of winning the event by demonstrating
						your idea.</h4>
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>Teams with a max size of 3 can participate</h4>
							</li>
							<li>
								<h4>Teams can participate in both the categories but my mom chosen problem statements
								should not be the same.</h4>
							</li>
							<li>
								<h4>Submit your ideas at <a href='https://goo.gl/forms/WD79wHCez3oRFId12' target='_blank' rel="noopener noreferrer">https://goo.gl/forms/WD79wHCez3oRFId12</a> by 26/03/2019</h4>
							</li>
							<li>
								<h4>PPT defining your idea is must for Category 1 but optional for Category 2.</h4>
							</li>
							<li>
								<h4>For Category 1, the PPT must contain the Problem Statement and all the necessary
								parameters to present your solution.</h4>
							</li>
							<li>
								<h4>The prototypes should be stable, robust and appealing to the said solution.</h4>
							</li>
							<li>
								<h4>Decisions by the panel will be considered as the final.</h4>
							</li>
						</ul>
						<h3>Format : </h3>
						<ul>
							<li>
								<h4>CATEGORY 1:Idea Category: </h4>
							</li>
							<li>
								<h5>The participants should discuss a real-time problem statement that they intend to solve
								in the field of and their potential solution for it.</h5>
							</li>
							<li>
								<h5>Duration : 10 minutes for presentation + 5 minutes for questions.</h5>
							</li>
							<li>
								<h4>CATEGORY 2:Prototype Category:</h4>
							</li>
							<li>
								<h5>The participants should have a completed prototype or working model of their solution.
								They must then present this prototype to a panel of judges. PPT is optional, but efficient
								working of the model must be displayed.</h5>
							</li>
							<li>
								<h5>Duration : 1.5 hrs</h5>
							</li>
						</ul>
						<h3>Venue :</h3>
						<ul>
							<li>
								<h5 className='top-down'>Date : March 31 st , preferred</h5>
							</li>
							<li>
								<h5>Time : 10am-1:00pm</h5>
							</li>
							<li>
								<h5>Venue : old library,H01</h5>
							</li>
						</ul>
						<h4>Prize money : </h4>
						<ul>
							<li>
								<h4>Category 1: 1st prize:2k, 2nd prize:1.5k</h4>
							</li>
							<li>
								<h4>Category 2: 1st prize:3k, 2nd prize:2.5k</h4>
							</li>
						</ul>	
						<h3>Contact :</h3>
						<ul>
							<li>
								<h5 className='top-down'>Jeeva Keshav S - (+91) 9943677801</h5>
							</li>
							<li>
								<h5>Madhuvanthi R - (+91) 9884937757</h5>
							</li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Electronics.propTypes = {
	clicked_event : PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired,
}

const mapStateToProps = function(state){
	return{
		clicked_event : state.clicked_event,
	}
}

export default connect(mapStateToProps)(Electronics);