import { fromJS } from 'immutable';
import { LOGIN,LOGOUT } from './actionTypes';
const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return state.set("login", action.login);
        case LOGOUT:
            return state.set("login", false);
        default:
            return state;
    }
}