import {Map} from 'immutable';
import actions from './actions';

const initState = new Map ({
    data: [],
    usersList: [],
    usersInfo: []
});

export default function reducer(state = initState, action) {
    switch (action.type) {
        case actions.USERS_LIST:
            return Object.assign({}, state, {
                usersList: action.userList
            });

        case actions.USER_INFO:
            return Object.assign({}, state, {
                usersInfo: action.userInfo
            })    
            
        default:
            return state;    
    }
}
