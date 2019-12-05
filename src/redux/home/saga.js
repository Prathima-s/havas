import { all, put, fork, take, call } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';



export default function* rootSaga() {
    yield all([
        fork(userList)        
    ]);
}
