import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './club-events.css';

class Zerone extends Component{
	constructor(){
		super();
		this.state = {
			width : window.innerWidth,
		}
		this.code_wars = this.code_wars.bind(this);
		this.hackathon = this.hackathon.bind(this);
		this.deeplearning = this.deeplearning.bind(this);
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

	code_wars(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('zerone').classList.toggle('active');
			}
			document.getElementById('codewars').hidden =true;
			document.getElementById('hackathon').hidden =true;
			document.getElementById('deeplearning').hidden =true;
			document.getElementsByClassName('details-container')[0].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'ZERONEVIEW'});
		}
		else
		{
			document.getElementsByClassName('details-container')[0].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'ZERONECLOSE'});
		}
	}

	hackathon(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('zerone').classList.toggle('active');
			}
			document.getElementById('codewars').hidden =true;
			document.getElementById('hackathon').hidden =true;
			document.getElementById('deeplearning').hidden =true;
			document.getElementsByClassName('details-container')[1].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'HACKATHONVIEW'});
		}
		else
		{
			document.getElementsByClassName('details-container')[1].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'HACKATHONCLOSE'});
		}
	}

	deeplearning(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('zerone').classList.toggle('active');
			}
			document.getElementById('codewars').hidden =true;
			document.getElementById('hackathon').hidden =true;
			document.getElementById('deeplearning').hidden =true;
			document.getElementsByClassName('details-container')[2].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'DEEPLEARNINGVIEW'});
		}
		else
		{
			document.getElementsByClassName('details-container')[2].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'DEEPLEARNINGCLOSE'});
		}
	}

	render(){
		return(
			<Container className='club-events right'>
				<Row className='contest' id='codewars'>		
					<p onClick={this.code_wars}>Code Wars</p>
				</Row>
				<Row className='contest active' id='hackathon'>
					<p onClick={this.hackathon}>Hackathon</p>
				</Row>
				<Row className='contest fonts active' id='deeplearning'>
					<p onClick={this.deeplearning}>Deep Learning Workshop</p>
				</Row>
				<Container className='details-container active'>
					<Row className='event-details'>
						<h1>Code Wars</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>Code Wars is a tournament based event mixing the idea of ‘Duel’ and ‘Coding’ where
						two teams will be put against each other in order to qualify to the next round.</h4>
						<h3>Judging criteria : </h3>
						<ul>
							<li>
								<h4>There will be a prelims round out of which 32 or 16 teams will make to the next
								round depending upon the total numbers of participants. Each question will have
								marks and the teams with top 32 or 16 marks will qualify</h4>
							</li>
							<li>
								<h4>In the next round, each team will be paired up with another team such that they
								compete with each other and only one of them makes it further. This will continue
								until one final team is left. Team having the highest marks will qualify further.</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>Prelims will be online whereas further rounds will be offline.</h4>
							</li>
							<li>
								<h4>Copying black boxes is allowed.</h4>
							</li>
							<li>
								<h4>Prelims will have partial marking whereas further rounds won’t.</h4>
							</li>
							<li>
								<h4>If there is a tie in offline round, the team with a higher rank in prelims will qualify.</h4>
							</li>
							<li>
								<h4>Team size - Max 2</h4>
							</li>
							<li>
								<h4>Only one laptop per team is allowed in offline round</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container active hack-pos'>
					<Row className='event-details'>
						<h1 >Hackathon</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>An 8 hour long coding marathon where participants will be given a real world problem to
						solve in any coding platform they feel comfortable in.</h4>
						<h3>Judging criteria : </h3>
						<ul>
							<li>
								<h4>Judging criteria will be in terms of performance, code quality, UI.</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>Usage of open source libraries are allowed.</h4>
							</li>
							<li>
								<h4>Copying from an already existing source will result in disqualification</h4>
							</li>
							<li>
								<h4>The event will go on for 8 hours.</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container active deep-pos'>
					<Row className='event-details'>
						<h1 >Deep Learning Workshop</h1>
						<h3 className='display-pos'>Description :</h3>
						<h4>A practical hands on Deep Learning workshop using Python.</h4>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>There will be two sessions, 3 hours each.</h4>
							</li>
							<li>
								<h4>Entry fee of 70 Rs. will be there.</h4>
							</li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Zerone.propTypes = {
	clicked_event :PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired
}

const mapStateToProps = function(state){
	return{
		clicked_event : state.clicked_event,
		zerone_event : state.zerone_event,
		hackathon_event : state.hackathon_event,
		deeplearning_event : state.deeplearning_event
	}
}

export default connect(mapStateToProps)(Zerone);