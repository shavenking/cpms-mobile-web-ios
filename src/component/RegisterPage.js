import React, { Component } from 'react'
import { Link } from 'react-router'

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    handlePasswordConfirmationChange = (e) => {
        this.setState({
            ...this.state,
            passwordConfirmation: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state)
    }

    render() {
        const {name, email, password, passwordConfirmation} = this.state

        return (
            <div className="page">
                <div className="page-content">
                    <div className="page-content login-screen-content">
                        <div className="login-screen-title">CPMS</div>
                        <form>
                            <div className="list-block">
                                <ul>
                                    <li className="item-content">
                                        <div className="item-inner">
                                            <div className="item-title label">名稱</div>
                                            <div className="item-input">
                                                <input type="text" name="email" value={name} onChange={this.handleNameChange} />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <div className="item-inner">
                                            <div className="item-title label">E-Mail</div>
                                            <div className="item-input">
                                                <input type="text" name="email" value={email} onChange={this.handleEmailChange} />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <div className="item-inner">
                                            <div className="item-title label">密碼</div>
                                            <div className="item-input">
                                                <input type="password" name="password" value={password} onChange={this.handlePasswordChange} />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <div className="item-inner">
                                            <div className="item-title label">確認密碼</div>
                                            <div className="item-input">
                                                <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={this.handlePasswordConfirmationChange} />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="list-block">
                                <ul>
                                    <li><a href="#" className="item-link list-button" onClick={this.handleOnSubmit}>註冊</a></li>
                                </ul>
                                <div className="list-block-label">
                                    <p><Link to="/login" className="close-login-screen">已經有會員？點我登入</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage
