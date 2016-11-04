import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from '../component/LoginPage'
import { hashHistory } from 'react-router'
import { loginUser } from '../action/User'

class LoginContainer extends Component {
    handleOnSubmit = ({email, password}) => {
        this.props.dispatch(loginUser({email, password}))

        // fake .then action
        setTimeout(() => {
            hashHistory.replace('/')
        }, 1000)
    }

    render() {
        return (
            <LoginPage onSubmit={this.handleOnSubmit}/>
        )
    }
}

export default connect()(LoginContainer)
