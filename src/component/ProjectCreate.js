import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'component/Navbar'

class ProjectCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date().toISOString().split('T').shift()
        }
    }

    handleStartDateChange = (e) => {
        this.setState({
            ...this.state,
            startDate: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.form)
    }

    render() {
        const {startDate} = this.state

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink="/projects" title="新增專案" onSubmit={this.handleOnSubmit} />
                    <form method="POST" action="#" className="list-block" ref={(form) => this.form = form}>
                        <ul>
                            <li className="align-top">
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">工程名稱</div>
                                        <div className="item-input">
                                            <textarea name="name" rows="2" placeholder="工程名稱"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="align-top">
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">承攬廠商</div>
                                        <div className="item-input">
                                            <textarea name="contractor" rows="2" placeholder="承攬廠商"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">核定工期</div>
                                        <div className="item-input">
                                            {/* 因為要讓手機上只顯示數字鍵盤 */}
                                            {/* 所以用 input type tel */}
                                            <input type="tel" name="total_day" placeholder="核定工期" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">開工日期</div>
                                        <div className="item-input">
                                            {/* 日期格式 2016-11-13 */}
                                            <input type="date" name="start_date" value={startDate} onChange={this.handleStartDateChange} />
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

export default connect()(ProjectCreate)
