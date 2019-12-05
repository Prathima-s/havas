const actions = {
    USERS_SEARCH: 'USERS_SEARCH',
    USERS_LIST: 'USERS_LIST',

//Search for users
userSearch: search => {
    return (dispatch, getState) => {
        dispatch({
            type: actions.USERS_SEARCH,
            payload: search
        });
    };
},

//display Users List
userList: (data) => ({
    type: actions.USERS_LIST,
    userList: data
})

};

export default actions;