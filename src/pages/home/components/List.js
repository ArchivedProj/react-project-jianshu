import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo
} from '../style';
class List extends Component {
    render() {
        let { articleList } = this.props;
        let articleListJS = articleList.toJS();
        return (
            <Fragment>
                {
                    articleListJS.map(item => {
                        return (
                            <ListItem key={item.id}>
                                <img src={item.imgSrc} alt="" />
                                <ListInfo>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </Fragment>

        )
    }
}

const mapState = (state) => {
    return {
        articleList: state.getIn(["home", 'articleList'])
    }
}
export default connect(mapState, null)(List);