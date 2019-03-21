import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import logo from '../resources/homepage/Vashisht top text@2x.png';
import '../styles/navbar.css';
import ham from '../resources/mobile/Ham.png';
import close from '../resources/mobile/close.png';

const fbAddress= 'https://www.facebook.com/vashishtthetechfest/';
const instaAddress= 'https://www.instagram.com/vashisht_techfest/?hl=en' ;

class Navbar extends Component{
	constructor(){
		super();
		this.handleMenu = this.handleMenu.bind(this);
	};

	handleMenu(e){
		e.preventDefault();
		let ham_icon = document.getElementsByClassName('nav-header');
		ham_icon[0].classList.toggle('active');
	};

	render(){
		return(
			<div>
				<div className='hamburger'>
					<img src={ham} alt='hamburger icon' onClick={this.handleMenu}/>
				</div>
				<Container className='nav-header active backg'>
					<Row className='nav-header-row '>
						<Col sm={3} className='main-head'>
							<div>
								<NavLink to='/'><img src={logo} className="upper-image" alt='vashisht logo'/></NavLink>
								<img src={close} className='close'alt='close button' onClick={this.handleMenu}/>
							</div>
						</Col>
						<Col sm={6} className='navbar'>
							<span onClick={this.handleMenu}><NavLink to='/'><p>HOME</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/events'><p>EVENTS</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/talks'><p>TALKS</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/team'><p>TEAM</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/sponsors'><p>SPONSORS</p></NavLink></span>
						</Col>
						<Col sm={3} className='social-col'>
							<div className='social-icons'>
								<a href={instaAddress} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x" /></a>
								<a href={fbAddress} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x" /></a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Navbar;
