import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar'
import {Link} from 'react-router'

class ConstructionDaily extends Component {
    render() {
        const constructionDaily = this.props.constructionDaily
        const projectId = this.props.projectId
        const works = this.props.works

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink={`/projects/${projectId}/construction-dailies`} title="施工日報表" />

                    <div className="content-block-title">施工日報基本資料</div>
                    <div className="card">
                        <div className="card-content">
                            <div className="card-content-inner">
                                <p>施工日期：{constructionDaily.work_date}</p>
                                <p>上午天氣：{constructionDaily.weather_morning}</p>
                                <p>下午天氣：{constructionDaily.weather_afternoon}</p>
                            </div>
                        </div>
                    </div>

                    {/* 今日施工項目 */}
                    <div className="content-block-title">今日施工工項</div>
                    <div className="list-block media-list">
                        <ul>
                            {works.map(work => (
                                <li key={work.id}>
                                    <div className="item-content">
                                        <div className="item-inner">
                                            <div className="item-title-row">
                                                <div className="item-title">{work.name}</div>
                                                <div className="item-after">{work.amount}（{work.unit_name}）</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <Link to={`/projects/${projectId}/construction-dailies/${constructionDaily.id}/works/create`} className="item-link list-button">新增今日施工工項</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ConstructionDaily)
