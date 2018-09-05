import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
class List extends Component {
    render() {
        let { articleList, getMoreList } = this.props;
        let articleListJS = articleList.toJS();
        return (
            <Fragment>
                {
                    articleListJS.map((item, index) => {
                        return (
                            <ListItem key={`${item.id}-${index}`}>
                                <img src={item.imgSrc} alt="" />
                                <ListInfo>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={getMoreList}>加载更多</LoadMore>
            </Fragment>

        )
    }
}

const mapState = (state) => {
    return {
        articleList: state.getIn(["home", 'articleList'])
    }
}
const mapDispatch = (dispatch) => {
    return {
        getMoreList() {
            dispatch(actionCreators.getMoreList())
        }
    }
}
export default connect(mapState, mapDispatch)(List);