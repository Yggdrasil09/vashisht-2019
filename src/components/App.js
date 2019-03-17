import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Header} from 'react-fullpage';

import '../styles/App.css';
import HomePage from './homepage/HomePage';
import Coming from './comming-soon/Coming';
import Navbar from './Navbar';

class App extends Component {
	render() {
		return (
			<BrowserRouter>				
				<div className='main-div'>
					<Header>
						<Navbar/>
					</Header>
					<Switch>
						<Route path='/' component={HomePage} exact/>
						<Route component={Coming}/>
					</Switch>
				</div>				
			</BrowserRouter>
		);
	}
}

export default App;
