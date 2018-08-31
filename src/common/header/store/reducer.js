import { actionTypes } from './index';
import {fromJS} from 'immutable'; //fromJS 模块 把一个JS对象转换成immtable对象
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if (action.type === actionTypes.INPUT_FOCUSED) {
        return state.set('focused',true);// immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象。
    }
    if (action.type === actionTypes.INPUT_BLUR) {
        return state.set('focused',false);

    }
    return state;
}