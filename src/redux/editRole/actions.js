const actions = {
    SAVE_USER: 'SAVE_USER',
    GET_BUYINGORG: 'GET_BUYINGORG',
    GET_MMS_ROLE: 'GET_MMS_ROLE',
    SEARCH_CLIENT_LIST: "SEARCH_CLIENT_LIST",
    GET_CLIENT_LIST: "GET_CLIENT_LIST",

//Save user
saveUser: save => {
    return (dispatch) => {
        dispatch({
            type: actions.SAVE_USER,
            save
        });
    };
},

//Get Buying Organisation
getBuyingOrganisation: (data) => ({
    type: actions.GET_BUYINGORG,
    defaultbuyingOrg: data
  }),


//Get MMS role
getMmsRole: (data) => ({
    type: actions.GET_MMS_ROLE,
    defaultMmsRole: data
  }),

  searchclientList: search => {
    return dispatch => {
      dispatch({
        type: actions.SEARCH_CLIENT_LIST,
        search
      });
    };
  },

  clientsList: clientsList => {
    return dispatch => {
      dispatch({
        type: actions.GET_CLIENT_LIST,
        clientsList
      });
    };
  },

 
}

export default actions;