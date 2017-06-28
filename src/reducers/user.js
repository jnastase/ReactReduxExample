import * as constants from '../constants';

const initialState = {
    firstName: 'John',
    lastName: 'Doe'
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_USER_INFO:
            console.log('reducer action');
            console.log(action);
            return Object.assign({}, state, {
                firstName: action.user.firstName,
                lastName: action.user.lastName
            });
        default:
            return state;
    }
};

export default user;