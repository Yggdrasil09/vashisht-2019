import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import './comming-soon.css';

class CountdownTime extends Component{

	componentWillMount(){
		this.interval = setInterval(()=>this.props.dispatch({type:'GETTIME'}),1000);
	}

	componentWillUnmount(){
		clearTimeout(this.interval);
	}

	render(){
		return(
			<Row className='count-down'>
				<Col xs ={3} sm={3} className='timer'>
					<p className='ticking-time' >{this.props.days}</p>
					<p className="timer-text">Days</p>
				</Col>
				<Col xs ={3} sm={3} className='timer'>
					<p className="ticking-time">{this.props.hours}</p>
					<p className="timer-text">Hrs</p>
				</Col>
				<Col xs ={3} sm={3} className='timer'>
					<p className="ticking-time">{this.props.minutes}</p>
					<p className="timer-text">Min</p>
				</Col>
				<Col xs ={3} sm={3} className='timer'>
					<p className="ticking-time">{this.props.seconds}</p>
					<p className="timer-text">Sec</p>
				</Col>
			</Row>
		);
	}
}

CountdownTime.propTypes = {
	days : PropTypes.number.isRequired,
	hours : PropTypes.number.isRequired,
	minutes : PropTypes.number.isRequired,
	seconds : PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired
};

const mapStateToProps = function(state){
	return{
		days : state.days,
		hours : state.hours,
		minutes : state.minutes,
		seconds : state.seconds
	}
}

export default connect(mapStateToProps)(CountdownTime);