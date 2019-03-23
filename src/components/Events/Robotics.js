import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
 
import './club-events.css';

class Robotics extends Component{
	constructor(){
		super();
		this.state = {
			width : window.innerWidth,
		}
		this.quiz = this.quiz.bind(this);
		this.line_follower = this.line_follower.bind(this);
		this.racing = this.racing.bind(this);
		this.climbing = this.climbing.bind(this);
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

	quiz(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('robotics').classList.toggle('active');
			}
			document.getElementById('quiz').hidden =true;
			document.getElementById('line-follower').hidden =true;
			document.getElementById('racing').hidden =true;
			document.getElementById('climbing').hidden =true;
			document.getElementsByClassName('robo')[0].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'QUIZVIEW'});
		}
		else
		{
			document.getElementsByClassName('robo')[0].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'QUIZCLOSE'});
		}
	}

	line_follower()
	{
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('robotics').classList.toggle('active');
			}
			document.getElementById('quiz').hidden =true;
			document.getElementById('line-follower').hidden =true;
			document.getElementById('racing').hidden =true;
			document.getElementById('climbing').hidden =true;
			document.getElementsByClassName('robo')[1].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'LINEVIEW'});
		}
		else
		{
			document.getElementsByClassName('robo')[1].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'LINECLOSE'});
		}
	}

	racing(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('robotics').classList.toggle('active');
			}
			document.getElementById('quiz').hidden =true;
			document.getElementById('line-follower').hidden =true;
			document.getElementById('racing').hidden =true;
			document.getElementById('climbing').hidden =true;
			document.getElementsByClassName('robo')[2].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'RACINGVIEW'});
		}
		else
		{
			document.getElementsByClassName('robo')[2].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'RACINGCLOSE'});
		}
	}

	climbing(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('robotics').classList.toggle('active');
			}
			document.getElementById('quiz').hidden =true;
			document.getElementById('line-follower').hidden =true;
			document.getElementById('racing').hidden =true;
			document.getElementById('climbing').hidden =true;
			document.getElementsByClassName('robo')[3].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'CLIMBINGVIEW'});
		}
		else
		{
			document.getElementsByClassName('robo')[3].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'CLIMBINGCLOSE'});
		}
	}

	render(){
		return(
			<Container className='club-events left-robotics'>
				<Row className='contest-4' id='quiz'>
					<p onClick={this.quiz}>Arduino Quiz</p>
				</Row>
				<Row className='contest-4' id='line-follower'>
					<p onClick={this.line_follower}>Line Follower</p>
				</Row>
				<Row className='contest-4' id='racing'>
					<p onClick={this.racing}>Off-Road Racing</p>
				</Row>
				<Row className='contest-4' id='climbing'>
					<p onClick={this.climbing}>Rope Climbing</p>
				</Row>
				<Container className='details-container robo active '>
					<Row className='event-details'>
						<h1 >Arduino Quiz</h1>						
						<ul>
							<h3 className='display-pos'>Description :</h3>
							<li>
								<h4 >Time duration : 50 minutes</h4>
							</li>
							<li>
								<h4>Number of questions : 35</h4>
							</li>
							<li>
								<h4>Arduino quiz topics</h4>
							</li>
						</ul>
						<h4>Questions from concepts like Board Description, Installation, Program Structure, Data
						Types, Variables &amp; Constants, Operators, Control Statements, Loops, Functions, Strings,
						String Object, Time, Arrays, etc</h4>
						<h4>Exam Type: Multiple Choice Questions</h4>
						<h3>FORMAT(ONLINE ROUNDS):</h3>
						<ul>
							<li>
								<h4>Registered teams will have to attend an online quiz at VASHISHT.</h4>
							</li>
							<li>
								<h4>Note: There may be multiple rounds depending on the number of participants.</h4>
							</li>
						</ul>
						<h3>PROBLEM STATEMENT:</h3>
						<ul>
							<li>
								<h4>To appear in the online quiz related to Arduino and other microcontrollers.</h4>
							</li>
							<li>
								<h4>The questions will be from inter-discipline.</h4>
							</li>
							<li>
								<h4>Code and other question related to syntax and library will be asked.</h4>
							</li>
							<li>
								<h4>The questions will have a basic touch of IoT and M2M.</h4>
							</li>
							<li>
								<h4>Microcontrollers their architecture, IDE, connection protocol and specifications.</h4>
							</li>
							<li>
								<h4>6LowPAN to IoT.</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>TEAM SPECIFICATIONS: solo</h4>
							</li>
							<li>
								<h3>COMPETITION RULES:</h3>
								<h4>This quiz for a total of 100 points.</h4>
								<h4>Section 1:20 questions</h4>
								<h5>+2 for correct answer -1 for the wrong answer.</h5>
								<h4>Section 2: 15 questions</h4>
								<h5>+4 for correct answer -2 for the wrong answer.</h5>
								<h3>SAFETY RULES:</h3>
								<h4>Avoid Google because you are not going to find it.</h4>
							</li>
						</ul>
						<ul>
							<h3>Sponsors:</h3>
							<li><h4>IEEE Student branch IIITDM.</h4></li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container robo pos5 active '>
					<Row className='event-details'>
						<h1 >LINE FOLLOWER</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>Design an autonomous robot capable of the following line in a given track.</h4>
						<h3>FORMAT(ONSITE ROUNDS):</h3>
						<ul>
							<li>
								<h4>Registered teams will fight against each other at VASHISHT.</h4>
							</li>
							<li>
								<h4>Note: There may be multiple rounds depending on the number of participants.</h4>
							</li>
						</ul>
						<h3>PROBLEM STATEMENT:</h3>
						<ul>
							<li>
								<h4>Design an autonomous bot which can follow a black line on the white background
								or white line on black background in given track.</h4>
							</li>
							<li>
								<h4>The track may include man-made elevations and slopes, hard turns, curves and
								rough ground.</h4>
							</li>
							<li>
								<h4>The width of the line will be 2cm.</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>TEAM SPECIFICATIONS: </h4>
								<ul>
									<li>
										<h5>Maximum of 4 members per team</h5>
									</li>
									<li>
										<h5>Team members can be from different colleges or schools.</h5>
									</li>
									<li>
										<h5>All students with a valid identity card from their respective educational
										institution and a valid VASHISHT ID are eligible to participate.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>ROBOT SPECIFICATIONS</h4>
								<ul>
									<li>
										<h5>Bot size should not exceed 25*25*25 (cms) at any point in time during
										competition.</h5>
									</li>
									<li>
										<h5>The voltage between any two points on the bot should not exceed 12 volts.</h5>
									</li>
									<li>
										<h5>The weight of the robot must be less than 2kg.</h5>
									</li>
									<li>
										<h5>Each team will be given 2 chances. Best amongst them will be considered.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>COMPETITION RULES:</h4>
								<ul>
									<li>
										<h5>Lego kits or ready-made robots are not allowed.</h5>
									</li>
									<li>
										<h5>Participants can use ready-made parts like wheels, motors, sensors etc and
										assemble them.</h5>
									</li>
									<li>
										<h5>The team is not allowed to change or charge the battery during the run.</h5>
									</li>
									<li>
										<h5>Trials before each round will be provided.</h5>									
									</li>
									<li>
										<h5>Organisers decision is final.</h5>
									</li>
									<li>
										<h5>The track will contain checkpoints. Based on its performance will be evaluated.</h5>
									</li>
									<li>
										<h5>Detailed marking scheme will be provided to each team before the competition.</h5>
									</li>
									<li>
										<h5>If a Line Follower leaves the line and has not crossed the finishing line, it will be
										considered to have gone off the track, negative marks will be given and the robot
										has to start from the previous checkpoint</h5>
									</li>
									<li>
										<h5>Line Followers must be self-contained, and not externally operated by wire or by
										remote radio control during the race.</h5>
									</li>
									<li>
										<h5>Negative points will be given for dimensions more than specified.</h5>
									</li>
									<li>
										<h5>If the robot stops in the middle of the track for more than 10 seconds, then
										negative marks will be given and the bot should start from the previous
										checkpoint.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>TRIALS:</h4>
								<ul>
									<li>
										<h5>Dummy arena for trials will be available. All trials will happen on that and not on
										the actual arena.</h5>
									</li>
									<li>
										<h5>The trial for the exact 10 minutes will be provided before each round(if more than
											one rounds happen).</h5>
									</li>
									<li>
										<h5>A sequence of the trial for teams depends on first come first serve basis.</h5>
									</li>
									<li>
										<h5>All the changes to the bot have to be made in trials itself and not an actual round.</h5>									
									</li>
									<li>
										<h5>It is advised to present at least 1 hour before the actual round at the site to get trials. Once the competition starts no trials will be provided.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>SAFETY RULES :</h4>
								<ul>
									<li>
										<h5>Compliance with all event rules is mandatory. It is expected that competitors stay
										within the rules and procedures of their own accord, and do not require constant
										policing.</h5>
									</li>
									<li>
										<h5>Special care should be taken to protect the onboard batteries</h5>
									</li>
									<li>
										<h5>If you have a robot design that does not fit within the categories set forth in these rules
										or is in some way ambiguous or borderline, please contact the event organisers. Safe
										innovation is always encouraged, but surprising the organisers with your brilliant
										exploitation of a loophole may cause your robot to be disqualified before it even
										competes.</h5>
									</li>
									<li>
										<h5>Each event has safety inspections. It is at their sole discretion that your robot is allowed
										to compete. As a builder, you are obligated to disclose all operating principles and
										potential dangers to the inspection staff.</h5>									
									</li>
									<li>
										<h5>Proper activation and deactivation of robots are critical. Robots must only be activated
										in the arena, testing areas, or with the expressed consent of the event coordinators.</h5>
									</li>
									<li>
										<h5>Once the robots have entered into the arena, no team members can enter into the arena
										at any point of time. In case, if the battle has to be halted in between and some changes
										have to be done in the arena or on the robot(s), it will be done by the organisers only.</h5>
									</li>
								</ul>
							</li>
							
						</ul>
						<ul>
							<h3>Sponsors:</h3>
							<li><h4>IEEE Student branch IIITDM.</h4></li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container robo pos6 active '>
					<Row className='event-details'>
						<h1 >OFF-ROAD RACING:</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>Design an autonomous/manual(wireless) vehicle capable of completing given track filled
						with numerous obstacles.</h4>
						<h3>FORMAT(ONSITE ROUNDS):</h3>
						<ul>
							<li>
								<h4>Registered teams will fight against each other at VASHISHT.</h4>
							</li>
							<li>
								<h4>Note: There may be multiple rounds depending on the number of participants.</h4>
							</li>
						</ul>
						<h3>PROBLEM STATEMENT:</h3>
						<ul>
							<li>
								<h4>Design a autonomous robot which can traverse through horizontal rope.</h4>
							</li>
							<li>
								<h4>Length of the rope will be 5 meters.</h4>
							</li>
							<li>
								<h4>Height of rope from ground will be 5 feets.</h4>
							</li>
							<li>
								<h4>Rope may include knots.</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>TEAM SPECIFICATIONS: </h4>
								<ul>
									<li>
										<h5>Maximum of 3 members per team</h5>
									</li>
									<li>
										<h5>Team members can be from different colleges or schools.</h5>
									</li>
									<li>
										<h5>All students with a valid identity card from their respective educational
										institution and a valid VASHISHT ID are eligible to participate.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>ROBOT SPECIFICATIONS</h4>
								<ul>
									<li>
										<h5>Bot size should not exceed 40*40*40 (cms) at any point of time during
										competition.</h5>
									</li>
									<li>
										<h5>Voltage between any two points on the bot should not exceed 12 volts.</h5>
									</li>
									<li>
										<h5>Weight of the robot must be less than 1.5kg.</h5>
									</li>
									<li>
										<h5>Each team will be given 3 chances.Best amongst them will be considered.</h5>
									</li>
									<li>
										<h5>Each team should take care of safety of bot.A rope can be used to keep robot
										hanging in case it falls down.That rope should not help robot in any way to stick
										to the rope while actual run.</h5>
									</li>
									<li>
										<h5>Robot will be judged based on time taken,stability,design.</h5>
									</li>
									<li>
										<h5>Detailed marking scheme will be provided to each team before competition.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>COMPETITION RULES:</h4>
								<ul>
									<li>
										<h5>Lego kits or ready-made robots are not allowed.</h5>
									</li>
									<li>
										<h5>Participants can use ready-made parts like wheels, motors, sensors etc and
										assemble them.</h5>
									</li>
									<li>
										<h5>The team is not allowed to change or charge the battery during the run.</h5>
									</li>
									<li>
										<h5>One trial will be provided before actual competition.</h5>									
									</li>
									<li>
										<h5>Organisers decision is final.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>TRIALS:</h4>
								<ul>
									<li>
										<h5>Dummy setup for trials will be available(which may not reflect all cases in actual
											competition).All trials will happen on that and not on actual setup.</h5>
									</li>
									<li>
										<h5>Trial for exact 10 minutes will be provided</h5>
									</li>
									<li>
										<h5>Sequence of the trial for teams depends on first come first serve basis.</h5>
									</li>
									<li>
										<h5>All the changes to the bot has to be made in trials itself and not in actual round.</h5>
									</li>
									<li>
										<h5>It is advised to present at least 1 hour before event at the site to get trials.Once
										competition starts no trials will be provided.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>SAFETY RULES :</h4>
								<ul>
									<li>
										<h5>Compliance with all event rules is mandatory. It is expected that competitors stay
										within the rules and procedures of their own accord, and do not require constant
										policing.</h5>
									</li>
									<li>
										<h5>Special care should be taken to protect the onboard batteries</h5>
									</li>
									<li>
										<h5>If you have a robot design that does not fit within the categories set forth in these rules
										or is in some way ambiguous or borderline, please contact the event organisers. Safe
										innovation is always encouraged, but surprising the organisers with your brilliant
										exploitation of a loophole may cause your robot to be disqualified before it even
										competes.</h5>
									</li>
									<li>
										<h5>Each event has safety inspections. It is at their sole discretion that your robot is allowed
										to compete. As a builder, you are obligated to disclose all operating principles and
										potential dangers to the inspection staff.</h5>									
									</li>
									<li>
										<h5>Proper activation and deactivation of robots are critical. Robots must only be activated
										in the arena, testing areas, or with the expressed consent of the event coordinators.</h5>
									</li>
									<li>
										<h5>Once the robots have entered into the arena, no team members can enter into the arena
										at any point of time. In case, if the battle has to be halted in between and some changes
										have to be done in the arena or on the robot(s), it will be done by the organisers only.</h5>
									</li>
								</ul>
							</li>		
						</ul>
						<ul>
							<h3>Sponsors:</h3>
							<li><h4>IEEE Student branch IIITDM.</h4></li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container robo pos6 active '>
					<Row className='event-details'>
						<h1 >ROPE_CLIMBING ROBOT:</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>Design an autonomous robot capable of traversing horizontal rope tied between two
						points.</h4>
						<h3>FORMAT(ONSITE ROUNDS):</h3>
						<ul>
							<li>
								<h4>Registered teams will fight against each other at VASHISHT.</h4>
							</li>
							<li>
								<h4>Note: There may be multiple rounds depending on the number of participants.</h4>
							</li>
						</ul>
						<h3>PROBLEM STATEMENT:</h3>
						<ul>
							<li>
								<h4>Design an autonomous/manual(wireless) vehicle which can traverse through a
								path filled with obstacles.</h4>
							</li>
							<li>
								<h4>Length of the path will be 250-300 meters.</h4>
							</li>
							<li>
								<h4>The arena will be in the open ground.</h4>
							</li>
							<li>
								<h4>The track may include pebbles, mountains, grass, sand, stones, man-made
								elevations and slopes and rough ground.</h4>
							</li>
							<li>
								<h4>Water won’t be included intentionally. But mud may present. (However, we can’t
									predict the weather)</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>TEAM SPECIFICATIONS: </h4>
								<ul>
									<li>
										<h5>Maximum of 5 members per team</h5>
									</li>
									<li>
										<h5>Team members can be from different colleges or schools.</h5>
									</li>
									<li>
										<h5>All students with a valid identity card from their respective educational
										institution and a valid VASHISHT ID are eligible to participate.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>ROBOT SPECIFICATIONS</h4>
								<ul>
									<li>
										<h5>Bot size should not exceed 40*40*40 (cms) at any point of time during
										competition.</h5>
									</li>
									<li>
										<h5>The voltage between any two points on the bot should not exceed 24 volts.</h5>
									</li>
									<li>
										<h5>The weight of the robot must be less than 20kg.</h5>
									</li>
									<li>
										<h5>Each team will be given 2 chances. Best amongst them will be considered.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>COMPETITION RULES:</h4>
								<ul>
									<li>
										<h5>Lego kits or ready-made robots are not allowed.</h5>
									</li>
									<li>
										<h5>Participants can use ready-made parts like wheels, motors, sensors etc and
										assemble them.</h5>
									</li>
									<li>
										<h5>The team is not allowed to change or charge the battery during the run.</h5>
									</li>
									<li>
										<h5>No trials will be provided.However, participants can have a look at arena 30 min
										before the actual competition starts and can make hardware/software changes.</h5>									
									</li>
									<li>
										<h5>The track will contain checkpoints. Based on its performance will be evaluated.</h5>
									</li>
									<li>
										<h5>Detailed marking scheme will be provided to each team before the competition.</h5>
									</li>
									<li>
										<h5>Organisers decision is final.</h5>
									</li>
								</ul>
							</li>
							<li>
								<h4>SAFETY RULES :</h4>
								<ul>
									<li>
										<h5>Compliance with all event rules is mandatory. It is expected that competitors stay
										within the rules and procedures of their own accord, and do not require constant
										policing.</h5>
									</li>
									<li>
										<h5>Special care should be taken to protect the onboard batteries</h5>
									</li>
									<li>
										<h5>If you have a robot design that does not fit within the categories set forth in these rules
										or is in some way ambiguous or borderline, please contact the event organisers. Safe
										innovation is always encouraged, but surprising the organisers with your brilliant
										exploitation of a loophole may cause your robot to be disqualified before it even
										competes.</h5>
									</li>
									<li>
										<h5>Each event has safety inspections. It is at their sole discretion that your robot is allowed
										to compete. As a builder, you are obligated to disclose all operating principles and
										potential dangers to the inspection staff.</h5>									
									</li>
									<li>
										<h5>Proper activation and deactivation of robots are critical. Robots must only be activated
										in the arena, testing areas, or with the expressed consent of the event coordinators.</h5>
									</li>
									<li>
										<h5>Once the robots have entered into the arena, no team members can enter into the arena
										at any point of time. In case, if the battle has to be halted in between and some changes
										have to be done in the arena or on the robot(s), it will be done by the organisers only.</h5>
									</li>
								</ul>
							</li>		
						</ul>
						<ul>
							<h3>Sponsors:</h3>
							<li><h4>IEEE Student branch IIITDM.</h4></li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Robotics.propTypes = {
	clicked_event :PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired
}

const mapStateToProps =  function(state){
	return{
		clicked_event : state.clicked_event,
	}
}

export default connect(mapStateToProps)(Robotics);