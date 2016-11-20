import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'component/Navbar'
import {Link} from 'react-router'

class DailyWorkCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.form)
    }

    render() {
        const constructionDailyId = this.props.constructionDailyId
        const projectId = this.props.projectId
        const works = this.props.works

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink={`/projects/${projectId}/construction-dailies/${constructionDailyId}`} title="新增今日施工工項" onSubmit={this.handleOnSubmit} />
                    <form method="POST" action="#" className="list-block" ref={(form) => this.form = form}>
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">選擇既有施工工項</div>
                                        <div className="item-input">
                                            <select name="work_id">
                                                {works.map(work => (
                                                    <option key={work.id} value={work.id}>{work.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">新增工項</div>
                                        <div className="item-input">
                                            <input type="text" name="name" placeholder="新增工項" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">單位名稱</div>
                                        <div className="item-input">
                                            <input type="text" name="unit_name" placeholder="單位名稱" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">數量</div>
                                        <div className="item-input">
                                            <input type="number" name="amount" placeholder="數量" />
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

export default connect()(DailyWorkCreate)
