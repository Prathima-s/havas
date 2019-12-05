import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import contactSagas from './contacts/saga';
// import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
import cardsSagas from './card/saga';
import youtubeSearchSagas from './youtubeSearch/sagas';
import devSagas from '../customApp/redux/sagas';
import userList from './mail/saga';
import getBuyingOrg  from './editRole/saga';
import getMmsRole from './editRole/saga';
import getCidRole from './editRole/saga';
import getUserInfo from './mail/saga';
import getClientList from './editRole/saga';
import getAllClient from './clients/saga';
import getMasterClientData from './clients/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    contactSagas(),
    // mailSagas(),
    notesSagas(),
    todosSagas(),
    cardsSagas(),
    youtubeSearchSagas(),
    devSagas(),
    userList(),
    getBuyingOrg(),
    getMmsRole(),
    getCidRole(),
    getUserInfo(),
    getClientList(),
    getAllClient(),
    getMasterClientData()
  ]);
}
