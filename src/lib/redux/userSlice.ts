import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  roles: string;
  accessToken: string;
  refreshToken: string;
}
const initialState: User = {
  username: "",
  roles: "",
  accessToken: "",
  refreshToken: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.username = action.payload.username;
      state.roles = action.payload.roles;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});
export const { setUserLogin } = userSlice.actions;
export default userSlice.reducer;