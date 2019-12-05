import { all, put, call, fork, take } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";

function* getBuyingOrg() {
  try {
    const data = yield call(
      axios.get,
      "http://dev.planitservices.com/api/AdminInfo/GetBuyingOrganizations"
    );
    yield put(actions.getBuyingOrganisation(data.data));
  } catch (error) {
    console.log(error);
  }
}

function* getMmsRole() {
  try {
    const data = yield call(
      axios.get,
      "http://dev.planitservices.com/api/AdminInfo/GetAllAppRoles"
    );
    yield put(actions.getMmsRole(data.data));
  } catch (error) {
    console.log(error);
  }
}

function* clientsList() {
  while (true) {
    try {
      const { search } = yield take(actions.SEARCH_CLIENT_LIST);
      var ids = Array.from(String(search).split(","), Number);

      const data = yield call(
        axios.get,
        `http://dev.planitservices.com/api/ClientInfo/GetBOClients`,
        {
          params: {
            buyingOrganisations: ids
          }
        }
      );

      yield put(actions.clientsList(data.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* rootSaga() {
  yield all([fork(getBuyingOrg), fork(getMmsRole), fork(clientsList)]);
}
