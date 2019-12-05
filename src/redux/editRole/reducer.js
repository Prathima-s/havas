import { Map } from "immutable";
import actions from "./actions";

const initState = new Map({
  data: [],
  buyingOrgs: [],
  mmsRole: {},
  clientsList: []
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_BUYINGORG:
      return Object.assign({}, state, {
        buyingOrgs: action.defaultbuyingOrg
      });

    case actions.GET_MMS_ROLE:
      return Object.assign({}, state, {
        mmsRole: action.defaultMmsRole
      });

    case actions.GET_CLIENT_LIST:
      return Object.assign({}, state, {
        clientsList: action.clientsList
      });

    default:
      return state;
  }
}
