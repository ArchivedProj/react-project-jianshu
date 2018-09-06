import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
class Login extends Component {
    render() {
        const {login, isLogin } = this.props;
        if (!isLogin) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => { this.account = input }}></Input>
                        <Input placeholder='密码' type="password" innerRef={(input) => this.password = input}></Input>
                        <Button onClick={() => login(this.account.value, this.password.value)}>LOGIN</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else {
            return <Redirect to="/"></Redirect>
        }
    }
}

const mapState = (state) => {
    return {
        isLogin: state.getIn(["login", "login"])
    }
}

const mapDispatch = (dispatch) => {
    return {
        login(account, password) {
            dispatch(actionCreators.login(account, password));
        }
    }
}
export default connect(mapState, mapDispatch)(Login);