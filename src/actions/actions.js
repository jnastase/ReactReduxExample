import * as constants from '../constants';

export function setUserInfo(user) {
    console.log('action');
    console.log(user);
    return {
        type: constants.SET_USER_INFO,
        user
    };
}