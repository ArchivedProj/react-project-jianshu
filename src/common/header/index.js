import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            focused:false
        }
    }
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
                            in={this.state.focused}
                            time={200}
                            classNames="slide"
                        >
                        <NavSearch 
                            className={this.state.focused?'focused':'' } 
                            onFocus={()=>this.onInputFocus()}
                            onBlur={()=>this.onInputBlur()}
                        ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused?'focused iconfont':'iconfont'}>&#xe62b;</i>
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

    onInputFocus = ()=>{
        this.setState({
            focused:true
        });
    }
    onInputBlur = ()=>{
        this.setState({
            focused:false
        });
    }
}

export default Header;