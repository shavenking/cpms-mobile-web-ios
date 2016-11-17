import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterPage from 'component/RegisterPage'
import { hashHistory } from 'react-router'
import { registerUser } from 'action/User'

class RegisterContainer extends Component {
    handleOnSubmit = ({name, email, password, passwordConfirmation}) => {
        this.props.dispatch(
            registerUser({name, email, password, passwordConfirmation})
        ).then(() => {
            hashHistory.replace('/')
        })
    }

    render() {
        return (
            <RegisterPage onSubmit={this.handleOnSubmit}/>
        )
    }
}

export default connect()(RegisterContainer)
