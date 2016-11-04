import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterPage from '../component/RegisterPage'
import { hashHistory } from 'react-router'
import { registerUser } from '../action/User'

class RegisterContainer extends Component {
    handleOnSubmit = ({email, password, passwordConfirmation}) => {
        this.props.dispatch(registerUser({email, password, passwordConfirmation}))

        // fake .then action
        setTimeout(() => {
            hashHistory.replace('/')
        }, 1000)
    }

    render() {
        return (
            <RegisterPage onSubmit={this.handleOnSubmit}/>
        )
    }
}

export default connect()(RegisterContainer)
