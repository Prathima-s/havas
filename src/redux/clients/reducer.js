import { Map } from "immutable";
import actions from "./actions";

const initState = new Map({
  allClientList: [],
  masterClientData: []
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_ALL_CLIENTS:
      return Object.assign({}, state, {
        allClientsList: action.allClientList
      });

    case actions.GET_MASTER_DATA:
      return Object.assign({}, state, {
        masterClientData: action.masterClientData
      });

    default:
      return state;
  }
}
