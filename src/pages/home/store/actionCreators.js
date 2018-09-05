import { LOAD_DATA, GET_MORE_LIST } from './actionTypes';
import axios from 'axios';
import { List } from 'immutable';
const getInitDataAction = (result) => {
    return {
        type: LOAD_DATA,
        topicList: result.topicList,
        articleList: result.articleList
    }
}

const getMoreListAction = (list) => ({
    type: GET_MORE_LIST,
    articleList : List(list)
});

export const initData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {

            let action = getInitDataAction(res.data);
            dispatch(action);
        }).catch(error => console.log(error));
    }
}


export const getMoreList = () => {
    return (dispatch) => {
        axios('/api/homelist.json').then(res => {
            console.log(res);
            let list = [];
            if (!res || !res.data.success || (list = res.data.data).length === 0) return;
            let action = getMoreListAction(list);
            dispatch(action);
        }).catch(error => console.log(error));
    }
}