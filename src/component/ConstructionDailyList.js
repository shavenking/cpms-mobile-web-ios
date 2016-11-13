import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { Link } from 'react-router'

class ConstructionDailyList extends Component {
    render() {
        const list = this.props.list
        const project = this.props.project

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar title="施工日報列表" prevLink={`/projects/${project.id}`} createLink={`/projects/${project.id}/construction-dailies/create`} />
                    <div className="list-block">
                        <ul>
                            {list.map(constructionDaily => (
                                <li key={constructionDaily.id}>
                                    <Link to={`/projects/${project.id}/construction-dailies/${constructionDaily.id}`} className="item-link item-content">
                                        <div className="item-inner">
                                            <div className="item-title">{constructionDaily.work_date}</div>
                                            <div className="item-after">進入</div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ConstructionDailyList)
