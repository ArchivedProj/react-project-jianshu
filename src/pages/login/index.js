import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号'></Input>
                    <Input placeholder='密码'></Input>
                    <Button>LOGIN</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => {
    return {

    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}
export default connect(mapState, mapDispatch)(Login);