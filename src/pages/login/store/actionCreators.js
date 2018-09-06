import { LOGIN, LOGOUT } from './actionTypes';
import axios from 'axios';
const getLoginAction = (isLogin) => ({
    type: LOGIN,
    login: isLogin
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
            if (!res || !res.data || !res.data.success) return;

            // let loginInfo = res.data.data;
            dispatch(getLoginAction(true));
        }).catch(error => console.log(error));
    }
}

export const getLogoutAction =()=> ({
    type: LOGOUT
})