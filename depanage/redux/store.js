import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./slices/loginUserSlice";
import userSignUpReducer from "./slices/registerUserSlice";
//import checkAuthReducer from "./slice/userAuth";
export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userSignUp: userSignUpReducer,
  },
});
