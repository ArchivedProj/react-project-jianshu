import React, { Component } from 'react'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
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
            </HomeWrapper>
        )
    }
}

export default Home;