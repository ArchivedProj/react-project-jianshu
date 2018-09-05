import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Topic from './components/Topic.js';
import Writer from './components/Writer.js';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4422/6e78633bc7864050a21749bf6cfbb00834a2ade7.jpg" alt="" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? (<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>) : null
                }

            </HomeWrapper>
        )
    }
    componentDidMount() {
        let { initData } = this.props;
        initData();
        window.addEventListener('scroll', this.props.changeShowScrollState)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeShowScrollState)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }
}

const mapState = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        initData() {
            dispatch(actionCreators.initData());
        },
        changeShowScrollState() {
            if (document.documentElement.scrollTop < 400) {
                dispatch(actionCreators.getShowScrollAction(false));
            } else {
                dispatch(actionCreators.getShowScrollAction(true));
            }

        }
    }
}

export default connect(mapState, mapDispatch)(Home);