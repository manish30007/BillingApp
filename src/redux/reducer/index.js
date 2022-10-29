import { combineReducers } from "redux";
import { productsReducer ,sumAmountReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  sum_amount: sumAmountReducer,
});
export default reducers;
