import { fromJS } from 'immutable';
import { LOAD_DATA, GET_MORE_LIST,CHANGE_SHOW_SCROLL } from './actionTypes';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    showScroll:false
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
        case CHANGE_SHOW_SCROLL: {
            if(state.showScroll===action.showScroll){
                return state
            }
            return state.set('showScroll',action.showScroll);
        }
        default:
            return state;
    }
}