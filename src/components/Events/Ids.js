import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './club-events.css';

class Ids extends Component{
	constructor(){
		super();
		this.state = {
			width : window.innerWidth,
		}
		this.face_off = this.face_off.bind(this);
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

	face_off(){
		if(!this.props.clicked_event)
		{

			if(this.state.width<575)
			{
				document.getElementById('ids').classList.toggle('active');
			}
			document.getElementById('faceoff').hidden =true;
			document.getElementsByClassName('ids')[0].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'FACEOFFVIEW'});
		}
		else
		{
			document.getElementsByClassName('ids')[0].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'FACEOFFCLOSE'});
		}
	}

	render(){
		return(
			<Container className='club-events right-ids'>
				<Row className='contest' id='faceoff'>
					<p onClick={this.face_off}>Face Off</p>
				</Row>
				<Container className='details-container active ids'>
					<Row className='event-details'>
						<h1 >FaceOff</h1>
						<h3 className='display-pos'>Abstract :</h3>
						<h4>A Face Off Battle to Discover the Master of CAD. This is a rapid-fire Design
						Challenge where at the end of each round the participants are eliminated. The Software
						choice is yours, the speed and skills are yours.</h4>
						<h4>The Last 12 Standing Individuals will be offered to form Teams of two amongst
						themselves and Compete for the finale.</h4>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h3>(Prelims)</h3>
								<h4>Any 3D CAD Software of participant choice is allowed. Bring your own Laptops.</h4>
							</li>
							<li>
								<h4>Number of Rounds = Until 12 people left</h4>
							</li>
							<li>
								<h3>(Finale)</h3>
								<h4>6 Teams compete to solve a Theme (powered by Sponsors.)</h4>
							</li>
						</ul>
						<h3>Judging :</h3>
						<ul>
							<li>
								<h4>Speed &amp; Completion time. (Prelims)</h4>
							</li>
							<li>
								<h4>The Final Deliverable Design Poster (Finale)</h4>
							</li>
						</ul>
						<ul>
							<h3>Prize:</h3>
							<li>
								<h4>Winner (25k) &amp; Runner’s (10k)</h4>
							</li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Ids.propTypes = {
	clicked_event :PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired
}

const mapStateToProps = function(state){
	return{
		clicked_event : state.clicked_event,
	}
}

export default connect(mapStateToProps)(Ids);