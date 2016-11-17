import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'component/Navbar'
import {Link} from 'react-router'

class ConstructionDailyCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workDate: new Date().toISOString().split('T').shift()
        }
    }

    handleWorkDateChange = (e) => {
        this.setState({
            ...this.state,
            workDate: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.form)
    }

    render() {
        const project = this.props.project
        const {workDate} = this.state

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink={`/projects/${project.id}/construction-dailies`} title="新增施工日報表" onSubmit={this.handleOnSubmit} />
                    <form method="POST" action="#" className="list-block" ref={(form) => this.form = form}>
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">施工日期</div>
                                        <div className="item-input">
                                            {/* 日期格式 2016-11-13 */}
                                            <input type="date" name="work_date" value={workDate} onChange={this.handleWorkDateChange} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(ConstructionDailyCreate)
