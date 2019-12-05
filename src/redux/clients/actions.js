const actions = {
  GET_ALL_CLIENTS: "GET_ALL_CLIENTS",
  GET_MASTER_DATA: "GET_MASTER_DATA",
  SEARCH_MASTER_DATA: "SET_MASTER_DATA",

  //Get clients
  getAllClients: data => ({
    type: actions.GET_ALL_CLIENTS,
    allClientList: data
  }),

  //Set Master Data
  searchMasterClientData: search => {
    return dispatch => {
      dispatch({
        type: actions.SEARCH_MASTER_DATA,
        search
      });
    };
  },

  //Get Master data
  masterClientData: masterClientData => {
    return dispatch => {
      dispatch({
        type: actions.GET_MASTER_DATA,
        masterClientData
      });
    };
  }
};

export default actions;
