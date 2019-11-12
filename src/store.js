import thunk from "redux-thunk"; // allows to write action creators that returns a function instead of an action
import { applyMiddleware, createStore } from "redux"; //.......redux
import reducers, { } from './Redux/Reducers/Root.reducer'; //........add the reducers

//reducers 

//---middleware
const middleware = applyMiddleware(thunk);

// ----store
const Store = createStore(reducers, middleware)

export default Store;