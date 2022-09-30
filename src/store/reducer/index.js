import { combineReducers } from "redux";
import { userReducers } from "./reducer";
const rootReducers = combineReducers({
    user: userReducers
});
export default rootReducers;