import {Navbar} from 'react-bootstrap';
import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';
import App from '../Containers/App';

const Main = (props) => {
  return (
      <BrowserRouter>
        <Navbar>
          <div className='main'>
            <h1 className='title'>Good Graphics</h1>
            <ul className='header'>
              <li><NavLink exact to='/'>Home</NavLink></li>
            </ul>
            <div className='content'>
              <Route exact path='/' component={App}/>
            </div>
          </div>
        </Navbar>
      </BrowserRouter>
  )
}

export default Main;