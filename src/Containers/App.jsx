import {Grid} from 'react-bootstrap';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Actions/actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  componentDidMount(){
    // Debounce handleSearchBarChange here
  }

  handleSearchBarChange(event){
    var newQuery = event.target.value;

    this.props.dispatch(actions.changeHeroQuery(newQuery));

    this.props.dispatch(actions.fetchHero(newQuery));
  }

  render(){

    if (this.props.errorMsg){
      var errorMsg = <div className='errorMsg'>{this.props.errorMsg}</div>
    }
    return(
      <div>
        {errorMsg}
        <div className='SearchBar'>
          <input onChange={this.handleSearchBarChange} value={this.props.heroQuery}/>
        </div>
        <br/>
        <div className='heroDisplay'>
          <figure>
            <img src={this.props.heroPortrait}/>
            <figcaption>
              {this.props.heroName}
              <br/>
              {this.props.role}
            </figcaption>
          </figure>
        </div>
      </div>
    );

  }
}

//
// Presentational component
//
class Hero extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){

    if (!this.props.hero){
      return null
    }

    return( 
      <div>
        <p>{this.props.heroName}</p>
      </div>
    )
  }
}

export default connect((state,props) => {
  return {
    heroQuery: state.hero.heroQuery,
    hero: state.hero.hero,
    heroName: state.hero.heroName,
    heroPortrait: state.hero.heroPortrait,
    role: state.hero.role,
    errorMsg: state.errors.errorMsg
  }
})(App);