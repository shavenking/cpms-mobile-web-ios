import React, { Component } from 'react'
import { Link } from 'react-router'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
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

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state)
    }

    render() {
        const {email, password} = this.state

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
                                </ul>
                            </div>
                            <div className="list-block">
                                <ul>
                                    <li><a href="#" className="item-link list-button" onClick={this.handleOnSubmit}>登入</a></li>
                                </ul>
                                <div className="list-block-label">
                                    <p><Link to="/register" className="close-login-screen">還不是會員？點我註冊</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
