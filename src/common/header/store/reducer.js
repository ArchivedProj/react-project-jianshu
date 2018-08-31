import { actionTypes } from './index';
import { fromJS } from 'immutable'; //fromJS 模块 把一个JS对象转换成immtable对象
const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_FOCUSED:
            return state.set('focused', true);// immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象。
        case actionTypes.INPUT_BLUR:
            return state.set('focused', false);
        case actionTypes.GET_LIST:
            return state.set('list', action.list);
        default:return state;
    }
}