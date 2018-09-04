import { LOAD_DATA } from './actionTypes';
import axios from 'axios';
const getInitDataAction = (result) => {
    return {
        type: LOAD_DATA,
        topicList: result.topicList,
        articleList:result.articleList
    }
}

export const initData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {

            let action = getInitDataAction(res.data);
            dispatch(action);
        }).catch(error => console.log(error));
    }
}