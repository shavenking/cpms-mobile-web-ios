import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Navbar extends Component {
    componentDidMount() {
        if (window.framework7) {
            window.framework7.sizeNavbars('.view-main')
        }
    }

    render() {
        let prevLink = ''
        if (this.props.prevLink) {
            prevLink = (
                <div className="left">
                    <Link to={this.props.prevLink} className="link">
                        <i className="icon icon-back"></i>
                        <span>返回</span>
                    </Link>
                </div>
            )
        }

        let nextLink = ''
        if (this.props.createLink) {
            nextLink = (
                <div className="right">
                    <Link to={this.props.createLink} className="link">新增</Link>
                </div>
            )
        }

        if (this.props.onSubmit) {
            const onSubmitText = this.props.onSubmitText ? this.props.onSubmitText : '送出'

            nextLink = (
                <div className="right">
                    <a href="#" className="link" onClick={this.props.onSubmit}>{onSubmitText}</a>
                </div>
            )
        }

        return (
            <div className="navbar">
                <div className="navbar-inner">
                    {prevLink}
                    <div className="center">{this.props.title}</div>
                    {nextLink}
                </div>
            </div>
        )
    }
}

export default connect()(Navbar)
