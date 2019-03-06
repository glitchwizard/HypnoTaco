import React from 'react';
import {v4} from 'uuid';
import  types  from '../redux';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';

class IngredientList extends React.Component {
  constructor(props){
    super(props);
  }

  onAddAdditionalIngredientToForm = (event) => {
    this.props.onAddAdditionalIngredientToForm();
    this.handleListOfIngredients();
  }

  handleListOfIngredients = () => {
    let numOfIngredients = this.props.numberOfIngredients;
  }


  render() {
    return <form onSubmit={this.onAddNewTaco} >
                <button type='button' onClick={this.onAddAdditionalIngredientToForm}> Add an ingredient </button>
              <ol id="ingredientList"> Ingredients: {this.props.numberOfIngredients}

              </ol>
            <button type='submit'>Submit</button>
          </form>
  }
}

export default connect()(IngredientList);
