import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';    
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
        const { focused, onInputFocus, onInputBlur, pagedList, isLogin, logout } = this.props;

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <Link to="/login">
                        {
                            isLogin ? <NavItem className='right' onClick={logout}>退出</NavItem> : <NavItem className='right'>登陆</NavItem>
                        }
                    </Link>
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
                                onFocus={() => onInputFocus(pagedList)}
                                onBlur={() => onInputBlur()}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>

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
        const { focused, pagedList, mouseEnter, mouseLeave, mouseIn, switchToNextPageContent } = this.props;

        if (focused || mouseIn) {
            return (<SearchInfo onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
                <SearchInfoTitle>热门搜索
                    <SearchInfoSwitcher onClick={() => switchToNextPageContent(this.spinIcon)}>
                        <i ref={(icon) => this.spinIcon = icon} className='iconfont spin'>&#xe851;</i>
                        换一批
                    </SearchInfoSwitcher>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pagedList.map((item, index) => {
                        return <SearchInfoItem key={index}>{item}</SearchInfoItem>
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
        pagedList: state.getIn(['header', 'pagedList']), //这个地方获取的list是一个immutable类型的，好在也提供了map函数。
        currentPage: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        isLogin: state.getIn(["login", "login"])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onInputFocus(pagedList) {
            if (pagedList.size === 0) {
                dispatch(actionCreators.getList());
            }
            let action = actionCreators.getInputFocusedAction();
            dispatch(action);
        },
        onInputBlur() {
            let action = actionCreators.getInputBlurAction();
            dispatch(action);
        },
        mouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        mouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        switchToNextPageContent(spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }
            else {
                originAngle = 0;
            }
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
            dispatch(actionCreators.switchToNextPageContent());
        },
        logout(){
            dispatch(loginActionCreators.getLogoutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);