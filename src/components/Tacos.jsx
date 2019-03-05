import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  types  from '../redux';
import PropTypes from 'prop-types';

class Tacos extends React.Component {
  constructor(props){
    super(props);
    let _name = null;
    this.dispatch = this.props.dispatch;

    this.handleAddNewTaco = this.handleAddNewTaco.bind(this);
    this.handleLogCurrentState = this.handleLogCurrentState.bind(this);
  }


  handleAddNewTaco(event){
    console.log("handleAddNewTaco click");
    event.preventDefault();
    const action = {
      type: types.ADD_TACO,
      payload: {
        id: v4(),
        tacoName: this._name.value
      }
    };
    this.dispatch(action);
    this._name.value = '';
  }

  handleLogCurrentState(event){
    console.log("handleLogCurrentState click");
    event.preventDefault();
    const action = {
      type: types.LOG__CURRENT_STATE
    }
    this.dispatch(action);
  }

  render() {
  return <div>
        <Link to="/">Home</Link>
        <h2>Tacos!</h2>
    <div>
      <form onSubmit={this.handleAddNewTaco}>
        <input type='text' id='bar' placeholder='Find Tacos' ref={(input) => {this._name = input;}}/><button type='submit'>Submit</button>
      </form>
      <div>
        <button type='button' onClick={this.handleLogCurrentState}>Show Current State</button>
      </div>
    </div>
  </div>
  }
}

Tacos.propTypes = {
  _name: PropTypes.string
}

const mapStateToProps = state => {
  return{
    tacosList: state.tacosList
  }
}

export default connect()(Tacos);
