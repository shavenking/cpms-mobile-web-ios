import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../component/Navbar'

class ProjectHome extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink="/" title="專案首頁" />
                </div>
            </div>
        )
    }
}

export default connect()(ProjectHome)
