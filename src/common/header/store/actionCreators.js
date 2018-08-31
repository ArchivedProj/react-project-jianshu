import { actionTypes } from './index';
import axios from 'axios';
export const getInputFocusedAction = () => ({
    type: actionTypes.INPUT_FOCUSED
});

export const getInputBlurAction = () => ({
    type: actionTypes.INPUT_BLUR
});

export const getListAction = (list)=> ({
    type: actionTypes.GET_LIST,
    list
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            let list = [];
            if(!res.data.success || !(list = res.data.data).length) return;
            dispatch(getListAction(list));
        }).catch(err => {
            console.log(err);
        })
    }
}
