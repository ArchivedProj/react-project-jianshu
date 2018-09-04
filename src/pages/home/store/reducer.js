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
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            });
        }
        default:
            return state;
    }
}