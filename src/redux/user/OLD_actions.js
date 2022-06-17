export const LOGIN_USER = "LOGIN_USER";
export const DEL_USER = "REMOVE_USER";

export const loginUserCreator = (user) => {
  console.log("user desde payload", user);
  return {
    type: LOGIN_USER,
    payload: user,
  };
};
export const removeListCreator = (userId) => {
  return {
    type: DEL_USER,
    payload: userId,
  };
};
