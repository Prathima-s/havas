import {Map} from 'immutable';
import actions from './actions';

const initState = new Map ({
    data: [],
    usersList: []
});

export default function reducer(state = initState, action) {
    switch (action.type) {
        case actions.USERS_LIST:
            return Object.assign({}, state, {
                usersList: action.userList
            });
            
        default:
            return state;    
    }
}
