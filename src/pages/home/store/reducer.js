import { fromJS } from 'immutable';
import { LOAD_DATA, GET_MORE_LIST } from './actionTypes';
const defaultState = fromJS({
    topicList: [],
    articleList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_DATA: {
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            });
        }
        case GET_MORE_LIST: {
            let result = state.get("articleList").concat(action.articleList);
            console.log(result);
            return state.set('articleList', result);
        }
        default:
            return state;
    }
}