import { combineReducers } from "redux";
import tacosReducer from './tacos-reducer';

export default combineReducers({ tacosList: tacosReducer });
