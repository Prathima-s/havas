import { all, put, call, fork, take } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";

function* getAllClient() {
  try {
    const data = yield call(
      axios.get,
      "http://dev.planitservices.com/api/ClientInfo/GetClients"
    );
    yield put(actions.getAllClients(data.data));
  } catch (error) {
    console.log(error);
  }
}

function* getMasterClientData() {
  while (true) {
    try {
      const search = yield take(actions.SEARCH_MASTER_DATA);
      let { clientId, accessId, buyingOrganisationIds } = search.search;

      const data = yield call(
        axios.get,
        `http://dev.planitservices.com/api/MDMInfo/GetMasterDataForClients/${clientId}/${accessId}`,
        {
          params: {
            buyingOrganisationIds: buyingOrganisationIds
          }
        }
      );
      yield put(actions.masterClientData(data.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* rootSaga() {
  yield all([fork(getAllClient), fork(getMasterClientData)]);
}
