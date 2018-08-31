import { actionTypes } from './index';
import { fromJS } from 'immutable'; //fromJS 模块 把一个JS对象转换成immtable对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    pagedList: [],
    page: 1,
    totalPage: 1,
    pageSize: 10
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_FOCUSED:
            return state.set('focused', true);// immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象。
        case actionTypes.INPUT_BLUR:
            return state.set('focused', false);
        case actionTypes.GET_LIST:
            {
                let listInfo = action.list.toJS();
                let stateInfo = state.toJS();
                let totalPage = Math.ceil(listInfo.length / stateInfo.pageSize);

                let list = [];
                let length = listInfo.length > stateInfo.pageSize ? stateInfo.pageSize : listInfo.length;
                for (let i = 0; i < length; i++) {
                    list.push(listInfo[i]);
                }
                return state.set('pagedList', fromJS(list)).set('list', action.list).set('totalPage', totalPage);
            }
        case actionTypes.MOUSE_IN:
            { return state.set('mouseIn', true); }
        case actionTypes.MOUSE_LEAVE:
            { return state.set('mouseIn', false); }
        case actionTypes.NEXT_PAGE: {
            let stateInfo = state.toJS();
            let listInfo = stateInfo.list;

            let pageNo = stateInfo.page + 1;
            pageNo = pageNo > stateInfo.totalPage ? 1 : pageNo;
            let pagedList = [];

            return state.merge({
                'list': fromJS(pagedList),
                'page': pageNo
            })
        }
        default: return state;
    }
}


function getPagedList(list, pageSize, pageNo) {

}