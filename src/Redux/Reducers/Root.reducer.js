import { combineReducers } from "redux";
import { vatInfo } from "./VatCheck.reducer";

//combine reducers
const Reducers = combineReducers({
  vatInfo
});

export default Reducers;
