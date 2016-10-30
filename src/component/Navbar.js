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

        return (
            <div className="navbar">
                <div className="navbar-inner">
                    {prevLink}
                    <div className="center">{this.props.title}</div>
                </div>
            </div>
        )
    }
}

export default connect()(Navbar)
