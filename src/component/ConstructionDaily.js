import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar'
import {Link} from 'react-router'

class ConstructionDaily extends Component {
    render() {
        const constructionDaily = this.props.constructionDaily
        const projectId = this.props.projectId

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
                </div>
            </div>
        )
    }
}

export default connect()(ConstructionDaily)
