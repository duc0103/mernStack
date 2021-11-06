const initialState = {};
export const authReducer = (state = initialState, action) => {
  const {
    type,
    payload: { isAuthenticated, user },
  } = action;
  switch (type) {
    case "SET_AUTH":
      return { ...state, authLoading: false, isAuthenticated, user };

    default:
      return state;
  }
};
