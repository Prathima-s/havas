import { all, put, fork, call, take } from "redux-saga/effects";
import { push } from "react-router-redux";
import actions from "./actions";
import axios from "axios";

function* userList() {
  try {
    const data = yield call(
      axios.get,
      "http://dev.planitservices.com/api/AdminInfo/GetUsers"
    );
    yield put(actions.userList(data.data));
  } catch (error) {
    console.log(error);
  }
}

function* getUserInfo() {
  while (true) {
    try {
      let { search } = yield take(actions.USER_SEARCH);
      console.log('usersearch', search);
      const data = yield call(
        axios.get,
        "http://dev.planitservices.com/api/UserInfo/GetUserRoles",
        {
          params: {
            // username: "Sunanda Pal", //search.UserName,
            userdomain: "UK-HVMNET", // search.UserDomain,
            username: search.UserName,
            // userdomain: search.UserDomain
          }
        }
      );
      yield put(
        push({
          pathname: "/dashboard/home/edit-role",
          state: data.data
        })
      );

      // yield put(actions.usersInfo(data.data));
      console.log("userInfo", data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* rootSaga() {
  yield all([fork(userList), fork(getUserInfo)]);
}
