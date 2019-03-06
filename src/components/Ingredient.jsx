import React from 'react';
import {v4} from 'uuid';
import  types  from '../redux';
import { connect } from 'react-redux';

class Ingredient extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return  <li>
              <input key="1" placeholder="Ingredient #1" type="text" id="ingredientNumber1" /> Qty: <input id='qty1'></input>
            </li>
  }
}

export default connect()(Ingredient);
