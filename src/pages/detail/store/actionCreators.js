import { GET_DETAIL } from './actionTypes';
import axios from 'axios';
const getDetailAction = (title,content) => ({
    type: GET_DETAIL,
    title,
    content
})

export const getDetail = () => {
    return (dispatch) => {
        axios.get("/api/detail.json").then(res => {
            if (!res || !res.data.success) return;
            let result = res.data.data
            let action = getDetailAction(result.title, result.content);
            dispatch(action);
        }).catch(error => console.log(error));
    }
}