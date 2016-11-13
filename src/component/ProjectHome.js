import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { Link } from 'react-router'

class ProjectHome extends Component {
    render() {
        const project = this.props.project

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink="/" title="專案首頁" />

                    {/* 專案基本資料 */}
                    <div className="content-block-title">專案基本資料</div>
                    <div className="card">
                        <div className="card-content">
                            <div className="card-content-inner">
                                <p>專案名稱：{project.name}</p>
                                <p>承攬廠商：{project.contractor}</p>
                                <p>核定日期：{project.total_day} 天</p>
                                <p>開工日期：{project.start_date}</p>
                            </div>
                        </div>
                    </div>

                    {/* 外部作業 */}
                    <div className="content-block-title">外部作業</div>
                    <div className="list-block">
                        <ul>
                            <li>
                                <Link to={`/projects/${project.id}/construction-dailies`} className="item-link item-content">
                                    <div className="item-inner">
                                        <div className="item-title">施工日報表</div>
                                        <div className="item-after">進入</div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ProjectHome)
