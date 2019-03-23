import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './club-events.css';

class Epic extends Component{
	constructor(){
		super();
		this.state = {
			width : window.innerWidth,
		}
		this.bid_bad = this.bid_bad.bind(this);
		this.tic_tac = this.tic_tac.bind(this);
		this.vbc = this.vbc.bind(this);
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

	bid_bad(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('epic').classList.toggle('active');
			}
			document.getElementById('bid_bad').hidden =true;
			document.getElementById('tic-tac').hidden =true;
			document.getElementById('business').hidden =true;
			document.getElementsByClassName('epic-now')[0].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'BID_BADVIEW'});
		}
		else
		{
			document.getElementsByClassName('epic-now')[0].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'BID_BADCLOSE'});
		}
	}

	tic_tac(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('epic').classList.toggle('active');
			}
			document.getElementById('bid_bad').hidden =true;
			document.getElementById('tic-tac').hidden =true;
			document.getElementById('business').hidden =true;
			document.getElementsByClassName('epic-now')[1].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'TIC_TACVIEW'});
		}
		else
		{
			document.getElementsByClassName('epic-now')[1].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'IC_TACCLOSE'});
		}
	}

	vbc(){
		if(!this.props.clicked_event)
		{
			if(this.state.width<575)
			{
				document.getElementById('epic').classList.toggle('active');
			}
			document.getElementById('bid_bad').hidden =true;
			document.getElementById('tic-tac').hidden =true;
			document.getElementById('business').hidden =true;
			document.getElementsByClassName('epic-now')[2].classList.toggle('active');
			this.props.dispatch({type:'VIEW'});
			this.props.dispatch({type:'VBCVIEW'});
		}
		else
		{
			document.getElementsByClassName('epic-now')[2].classList.toggle('active');
			this.props.dispatch({type:'CLOSE'});
			this.props.dispatch({type:'VBCCLOSE'});
		}
	}

	render(){
		return(
			<Container className='club-events right-epic'>
				<Row className='contest' id='bid_bad'>
					<p onClick={this.bid_bad}>Bid or Bad</p>
				</Row>
				<Row className='contest' id='tic-tac'>
					<p onClick={this.tic_tac}>Tic TAG Toe</p>
				</Row>
				<Row className='contest fonts1' id='business'>
					<p onClick={this.vbc}>Vashisht Business Challenge</p>
				</Row>
				<Container className='details-container epic-now pos3 active'>
					<Row className='event-details'>
						<h1>Bid or Bad:</h1>
						<h3 className='display-pos'>Abstract :</h3>
						<h4>Are you interested in creating solutions to business problems?</h4>
						<h4>Can you pitch those ideas and convenience people around you to invest?</h4>
						<h4>Do you think what you spend is an investment?</h4>
						<h4>Do you even spend on the right people and things?</h4>
						<h4>Come, challenge your skills... We are providing you a platform where you get to solve business
						problems, pitch your ideas, auction for the best and invest.</h4>
						<h3>Judging criteria : </h3>
						<ul>
							<li>
								<h4>Creative thinking, Pitching skills, Clarity about the problem</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>Every team will be provided with an initial amount which they can use to invest in their
								own idea as well as in other’s ideas.</h4>
							</li>
							<li>
								<h4>Each team will be given a problem statement, team members have to discuss the
								solution to the problem and pitch the idea in front of judge panel and other teams.</h4>
							</li>
							<li>
								<h4>The pitching team has to come up with an amount to invest in their own idea.</h4>
							</li>
							<li>
								<h4>Pitching will be followed by an auction round in which other teams have a chance to
								invest some amount of money in the idea of pitching team.</h4>
							</li>
							<li>
								<h4>The team with highest bid gets a partnership in the idea.</h4>
							</li>
							<li>
								<h4>After all the teams have finished pitching and bidding, another round of bidding will be
								held for all the teams. The team with the cumulative highest wins the bid. (priority will be
								given to the team who won the first round of bidding for the given team in case of tie).</h4>
							</li>
							<li>
								<h4>A list will be prepared on the basis of investment received and the pitching for each
								team.</h4>
							</li>
							<li>
								<h4>The list will decide the percentage of increment/decrement in the amount invested in the
								ideas. The percentage will be beared by the teams who invested in the idea. Amount will
								be returned to the teams with the respective percentage of increment/decrement.</h4>
							</li>
							<li>
								<h4>The team with the highest amount after the return of investment wins.</h4>
							</li>
						</ul>
						<h3>Team size : 3-6 members</h3>
						<h3>Prize money :</h3>
						<h3>Total: Rs 3500</h3>
						<ul>
							<li>
								<h4>1st: Rs 2000</h4>
							</li>
							<li>
								<h4>2nd : Rs 1500</h4>
							</li>
							<li>
								<h4>3rd: Rs 1000</h4>
							</li>
						</ul>
						<ul>
							<h3>Time :</h3>
							<li>
								<h4>2-4 hrs One day event. (Prefered day: 2nd day of the the fest, in afternoon)</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container epic-now pos4 active'>
					<Row className='event-details'>
						<h1>Tic TAG Toe:</h1>
						<h3 className='display-pos'>Abstract :</h3>
						<h4>You know how some slogans get you? Like,</h4>
						<h4>&quot;Just do it&quot;</h4>
						<h4>&quot;Good food good life&quot;</h4>
						<h4>&quot;Wherever you go, our network follows&quot;</h4>
						<h4>&quot;Humara Bajaj&quot;</h4>
						<h4>How can anyone forget these lines...</h4>
						<h4>Have you tried something similar but were humiliated by your friends,</h4>
						<h4>Have you ever blurted rhyming sentences and got something meaningless yet meaningful,</h4>
						<h4>Your skills were rejected everywhere because no one could appreciate your talent,</h4>
						<h4>You always felt like your ability have been wasted on ignorant people?</h4>
						<h4>But wait we&#39;ve got a chance for you...</h4>
						<h4>EPIC presents &quot;Tic TAG Toe&quot;, an event in VASHISHTH 2019 where you have a chance to show
						off your expertise in creating taglines/slogans for products.</h4>
						<ul>
							<li>
								<h3>Judging criteria : </h3>
							</li>
							<li>
								<h4>Not needed.</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>Register for Vashishth 2019.</h4>
							</li>
							<li>
								<h4>Follow the Instagram page “epicclub_iiitdm”.</h4>
							</li>
							<li>
								<h4>Every once in a while there will be posts (and stories) with caption “Tic TAG Toe product
								No. &lt;1/2/3/4...&gt;” on the instagram page. These posts will consist of pictures showing
								some products.</h4>
							</li>
							<li>
								<h4>Comment your best, catchy, creative taglines/slogans/punchlines for the product on the
								post.</h4>
							</li>
							<li>
								<h4>Taglines/slogans/punchlines are free from all kinds of language barriers.</h4>
							</li>
							<li>
								<h4>A comment for the product should be less than or equal to 3 lines.</h4>
							</li>
							<li>
								<h4>A user can come up with more than one tagline/slogan/punchline for a product (make it a
									different comment).</h4>
							</li>
							<li>
								<h4>A user can comment on more than one post.</h4>
							</li>
							<li>
								<h4>The best tagline/slogan/punchline will be declared the the winner of Tic TAG Toe.</h4>
							</li>
							<li>
								<h4>Only the comments dated before &lt;last day of vashishth 2019&gt; will be considered for
								participation.</h4>
							</li>
						</ul>
						<h3>Prize money :</h3>
						<h3>Total: Rs 800</h3>
						<ul>
							<li>
								<h4>1st: Rs 400</h4>
							</li>
							<li>
								<h4>2nd : Rs 250</h4>
							</li>
							<li>
								<h4>3rd: Rs 150</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className='details-container epic-now pos4 active'>
					<Row className='event-details'>
						<h1>Vashishth Business Challenge (VBC):</h1>
						<h3 className='display-pos1'>Abstract :</h3>
						<h4>Any kind of business is not easy. It involves ideation, studying the market, promotion
						of the product/service, creating a need for the product/service, keep your product ahead in the
						competition and advertising it in various ways possible to make sure that the customer/people
						notice it in the market. So, take the challenge, set your own business, come up with innovative
						business plans and earn some real money by selling your product/services using various
						strategies, skills and creativity to attract the customers. Here’s a perfect chance for you to earn
						some money and sponsor yourself a small treat.</h4>
						<h4>EPIC presents &quot;Vashishth Business Challenge&quot;, an event in VASHISHTH 2019 where you have
						a chance to put up your own business, sell your products/services to real people and earn
						money.</h4>
						<ul>
							<li>
								<h3>Judging criteria : </h3>
								<h4>Not needed.</h4>
							</li>
						</ul>
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h3>Round 1</h3>
								<h4>Come up with a business plan that you think will be successful in our college.</h4>
							</li>
							<li>
								<h4>Make a proper report and presentation about the your idea, investment, estimated
								earning etc.</h4>
							</li>
							<li>
								<h4>Top 5 teams based on various criterias will be selected for round 2 of VBC.</h4>
							</li>
							<li>
								<h3>Round 2</h3>
								<h4>Teams selected for this round will be given a place and some tables in academic block
								where they can put up their stall for the execution of their ideas/providing service/selling
								products.</h4>
							</li>
							<li>
								<h4>Teams are allowed to charged a small amount of money from the people participating/
								enjoying their service/buying product from them.</h4>
							</li>
							<li>
								<h4>The stall can be put up by the teams on the place allocated to them according to
								convenience and shall be removed before 10pm on the last day of Vashishth.</h4>
							</li>
							<li>
								<h4>Investment upto Rs.500 will be refunded to the teams given proper bills are submitted.</h4>
							</li>
							<li>
								<h4>A user can comment on more than one post.</h4>
							</li>
							<li>
								<h4>At the end of three days, the team earning the most will be declared as winner of the
								VBC.</h4>
							</li>
							<li>
								<h4>The earnings of the three days will be divided equally between the team and Vashishth.</h4>
							</li>
						</ul>
						<h3>Team size : 3-8 members</h3>
						<h3>Time : 2-3 hrs on first day (evening)</h3>
						<h3>Prize money :</h3>
						<h3>Total: Rs 7200</h3>
						<ul>
							<li>
								<h4>1st: Rs 3000</h4>
							</li>
							<li>
								<h4>2nd : Rs 2400</h4>
							</li>
							<li>
								<h4>3rd: Rs 1800</h4>
							</li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Epic.propTypes = {
	clicked_event :PropTypes.number.isRequired,
	dispatch : PropTypes.func.isRequired
}

const mapStateToProps = function(state){
	return{
		clicked_event : state.clicked_event,
	}
}

export default connect(mapStateToProps)(Epic);