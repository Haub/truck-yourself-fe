import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Login } from '../Login';
import './App.css';
import hamburger from '../../assets/hamburger.svg';
import { ProfilePage } from '../ProfilePage'
import { NavBar } from '../NavBar'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      login: true,
      navOpen: true,
    }
  }

  componentDidMount(){
    if(!this.state.login){
      this.props.history.push('/login')
    }
  }



  render() {
    let navBar
    const { navOpen } = this.state
    if( navOpen) {
      navBar = <NavBar />
    } else {
      navBar = null
    }

    return (
      <div className='main'>
        <header>
          <h1 className='main-title'>TruckTrackr</h1>
          <img className='hamburger-icon' src={ hamburger }/>
        </header>
        <div className='content-holder'>
        { navBar }
        <Route
          exact path='/login'
          component={ Login }
        />
        <Route 
          exact path='/'
          component={ ProfilePage }
        />
        </div>
      </div>
    );
  }
}

export default withRouter(App);