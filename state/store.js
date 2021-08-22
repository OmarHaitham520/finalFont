import { createStore, combineReducers} from "redux";
import reducer from "../state/reducer";

const rootReducer = combineReducers({
  theReducer: reducer
});

const Store = createStore(rootReducer);

export default Store;
