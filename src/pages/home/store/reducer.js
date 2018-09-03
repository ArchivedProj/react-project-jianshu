import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '科普',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        id: 2,
        title: '风格',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}