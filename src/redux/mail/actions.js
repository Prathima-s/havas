const actions = {
  USERS_SEARCH: "USERS_SEARCH",
  USERS_LIST: "USERS_LIST",
  USER_INFO: "USER_INFO",
  USER_SEARCH: "USER_SEARCH",

  //Search for users
  usersSearch: search => {
    return (dispatch, getState) => {
      dispatch({
        type: actions.USERS_SEARCH,
        payload: search
      });
    };
  },

  //display Users List
  userList: data => ({
    type: actions.USERS_LIST,
    userList: data
  }),

  //UserInfo
  usersInfo: data => ({
    type: actions.USER_INFO,
    userInfo: data
  }),

  userSearch: search => {
    return dispatch => {
      dispatch({
        type: actions.USER_SEARCH,
        search
      });
    };
  }
};

export default actions;
