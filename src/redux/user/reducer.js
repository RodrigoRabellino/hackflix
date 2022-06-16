import { createReducer } from "@reduxjs/toolkit";
import { LOGIN_USER, DEL_USER } from "./actions";

const initialState = {};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN_USER, (state, action) => {
      return { ...action.payload };
    })
    .addCase(DEL_USER, (state, action) => {
      console.log("remove user:", action.payload);
    })
    .addDefaultCase((state, action) => state);
});

export default userReducer;
