import { fromJS } from 'immutable';
import { LOAD_DATA } from './actionTypes';
const defaultState = fromJS({
    topicList: [],
    articleList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_DATA: {
            return state.merge({
                topicList: fromJS(action.data.topicList),
                articleList: fromJS(action.data.articleList)
            });
        }
        default:
            return state;
    }
}