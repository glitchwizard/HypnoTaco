import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  types  from '../redux';
import PropTypes from 'prop-types';
import TacoRecipe from './TacoRecipe';

class Tacos extends React.Component {
  constructor(props){
    super(props);
    let _name = null;
    this.dispatch = this.props.dispatch;

    this.handleLogCurrentState = this.handleLogCurrentState.bind(this);
  }

  handleLogCurrentState(event){
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
        <TacoRecipe/>
      <div>
        <button type='button' onClick={this.handleLogCurrentState}>Show Current Redux State</button>
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
