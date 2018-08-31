import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitcher,
    SearchInfoList,
    SearchInfoItem
} from './style';

const getListArea = (isShow) => {
    if (isShow) {
        return (<SearchInfo>
            <SearchInfoTitle>热门搜索
                <SearchInfoSwitcher>换一批</SearchInfoSwitcher>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>文化</SearchInfoItem>
                <SearchInfoItem>React</SearchInfoItem>
                <SearchInfoItem>C#</SearchInfoItem>
                <SearchInfoItem>JAVA</SearchInfoItem>
                <SearchInfoItem>SWIFT</SearchInfoItem>
                <SearchInfoItem>GO</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>)
    }
    else {
        return null;
    }
}

class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => this.props.onInputFocus()}
                                onBlur={() => this.props.onInputBlur()}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>

                        {getListArea(this.props.focused)}

                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="write">
                        <i className="iconfont">&#xe624;</i>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        // focused: state.get('header').get('focused') 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onInputFocus() {
            let action = actionCreators.getInputFocusedAction();
            dispatch(action);
        },
        onInputBlur() {
            let action = actionCreators.getInputBlurAction();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);