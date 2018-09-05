import React, { Component } from 'react'
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends Component {
    render() {
        let { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail();
    }
}

const mapState = (state) => {
    return {
        title: state.getIn(["detail", "title"]),
        content: state.getIn(["detail", "content"]),
    }
}
const mapDispatch=(dispatch)=>{
    return {
        getDetail(){
            dispatch(actionCreators.getDetail())
        }
    }
}
export default connect(mapState, mapDispatch)(Detail);