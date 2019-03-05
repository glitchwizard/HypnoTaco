import React from 'react';
import {v4} from 'uuid';
import  types  from '../redux';
import { connect } from 'react-redux';

class TacoRecipe extends React.Component {
  constructor(props){
    super(props);
    this._name = '';
    this.state = {
      numberOfIngredients: 1
    };

    this.handleAddAdditionalIngredientToForm = this.handleAddAdditionalIngredientToForm.bind(this);
    this.handleAddNewTaco = this.handleAddNewTaco.bind(this);
    this.handleLogCurrentLocalState = this.handleLogCurrentLocalState.bind(this);
  }

  handleAddAdditionalIngredientToForm = (event) => {
    console.log('handleAddAdditionalIngredientToForm click');
    let newState = this.state;
    newState.numberOfIngredients = this.state.numberOfIngredients + 1;
    this.setState(
      {
        numberOfIngredients: newState.numberOfIngredients,
        ['ingredientNumber'+newState.numberOfIngredients] : ''
      }
    );
    console.log('this.state');
    console.log(this.state);

    let liNode = document.createElement('li');

    let inputNode = document.createElement('input');

    let keyAttribute = document.createAttribute('key');
    keyAttribute.value = newState.numberOfIngredients;
    inputNode.setAttributeNode(keyAttribute);

    let placeholderAttribute = document.createAttribute('placeholder');
    placeholderAttribute.value = 'Ingredient #' + newState.numberOfIngredients;
    inputNode.setAttributeNode(placeholderAttribute);

    let typeAttribute = document.createAttribute('type');
    typeAttribute.value = 'text';
    inputNode.setAttributeNode(typeAttribute);

    let idAttribute = document.createAttribute('id');
    idAttribute.value = 'ingredientNumber' + newState.numberOfIngredients;
    inputNode.setAttributeNode(idAttribute);

    liNode.appendChild(inputNode);

    let qtyNode = document.createElement('input');
    let qtyText = document.createTextNode(' Qty: ');
    liNode.appendChild(qtyText);
    liNode.appendChild(qtyNode);

    document.getElementById('ingredientList').appendChild(liNode);

  }

  handleAddNewTaco = (event) => {
    console.log("handleAddNewTaco click");
    event.preventDefault();
    const { dispatch } = this.props;
    const action = {
      type: types.ADD_TACO,
      payload: {
        id: v4(),
        tacoName: this._name.value
      }
    };
    dispatch(action);
    this._name.value = '';
  }

  handleLogCurrentLocalState = (event) =>{
    console.log('this.state');
    console.log(this.state);
  }

  render() {
    return <div>
        <form onSubmit={this.handleAddNewTaco}>
          <input type='text' id='bar' placeholder='Name of the Taco' ref={(input) => {this._name = input;}}/>
          <p />
          <button type='button' onClick={this.handleAddAdditionalIngredientToForm}> Add an ingredient </button>
          <ol id="ingredientList">Ingredient:
            <li>
              <input key="1" placeholder="Ingredient #1" type="text" id="ingredientNumber1" /> Qty: <input id='qty1'></input>
            </li>
          </ol>

          <button type='submit'>Submit</button>
        </form>
        <button type='button' onClick={this.handleLogCurrentLocalState}>Log Local State</button>
      </div>
  }
}

export default connect()(TacoRecipe);
