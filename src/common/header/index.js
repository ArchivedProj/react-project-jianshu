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



class Header extends Component {

    render() {
        const { focused, onInputFocus, onInputBlur } = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => onInputFocus()}
                                onBlur={() => onInputBlur()}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>

                        {this.getListArea()}

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

    getListArea = () => {
        const {focused, list} = this.props
        if (focused) {
            return (<SearchInfo>
                <SearchInfoTitle>热门搜索
                    <SearchInfoSwitcher>换一批</SearchInfoSwitcher>
                </SearchInfoTitle>
                <SearchInfoList>
                    {list.map(item => {
                        return <SearchInfoItem>{item}</SearchInfoItem>
                    })}
                </SearchInfoList>
            </SearchInfo>)
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])  //这个地方获取的list是一个immutable类型的，好在也提供了map函数。
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onInputFocus() {
            let action = actionCreators.getInputFocusedAction();
            dispatch(actionCreators.getList());
            dispatch(action);
        },
        onInputBlur() {
            let action = actionCreators.getInputBlurAction();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);