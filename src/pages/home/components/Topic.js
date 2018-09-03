import React, { Component } from 'react'
import { connect } from 'react-redux';

import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends Component {
    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {topicList.map(item => (
                    <TopicItem key={item.get('id')}>
                        <img src={item.get('imgUrl')} alt={item.get('title')} />
                        {item.get('title')}
                    </TopicItem>
                )
                )}


            </TopicWrapper>
        )
    }
}
const mapState = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
}
// const mapDispatch = () => {
//     return (dispatch) => {

//     }
// }
export default connect(mapState, null)(Topic); //因为只需要从store中获取数据，而不用更改，所以第二个入参可以不用