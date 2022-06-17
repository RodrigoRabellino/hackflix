import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logInUser(state, action) {
      return { ...action.payload };
    },
    logOutUser(state, action) {
      console.log("remove user:", action.payload);
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
