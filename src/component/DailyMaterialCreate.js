import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../component/Navbar'
import {Link} from 'react-router'

class DailyMaterialCreate extends Component {
    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.form)
    }

    render() {
        const {
            constructionDailyId,
            materials,
            projectId
        } = this.props

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink={`/projects/${projectId}/construction-dailies/${constructionDailyId}`} title="新增今日工地材料" onSubmit={this.handleOnSubmit} />
                    <form method="POST" action="#" className="list-block" ref={(form) => this.form = form}>
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">選擇既有工地材料</div>
                                        <div className="item-input">
                                            <select name="material_id">
                                                {materials.map(material => (
                                                    <option key={material.id} value={material.id}>{material.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">新增工地材料</div>
                                        <div className="item-input">
                                            <input type="text" name="name" placeholder="新增工地材料" />
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
                                            <input type="tel" name="amount" placeholder="數量" />
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

export default connect()(DailyMaterialCreate)
