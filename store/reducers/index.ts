import { combineReducers } from "redux";
import doctorSlice from "../slices/doctorSlice";
import authSlice from "../slices/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  doctors: doctorSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
