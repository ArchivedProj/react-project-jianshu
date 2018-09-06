import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    WriteWrapper
} from './style';
class Writer extends Component {

    render() {
        let { isLogin } = this.props;
        let content = <Redirect to="/login"></Redirect>;
        if (isLogin) {
            content = <WriteWrapper>这里是writer content</WriteWrapper>;
        }
        return (
            <Fragment>
                {
                    content
                }
            </Fragment>
        )
    }
}

const mapState = (state) => {
    return {
        isLogin: state.getIn(["login", "login"])
    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}
export default connect(mapState, mapDispatch)(Writer);