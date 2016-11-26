import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Navbar from 'component/Navbar'

class DailyApplianceCreate extends Component {
    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.form)
    }

    render() {
        const {
            constructionDailyId,
            appliances,
            prevLink,
            projectId
        } = this.props

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar prevLink={prevLink} title="新增今日機具" onSubmit={this.handleOnSubmit} />
                    <form method="POST" action="#" className="list-block" ref={(form) => this.form = form}>
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">選擇既有</div>
                                        <div className="item-input">
                                            <select name="appliance_id">
                                                {appliances.map(appliance => (
                                                    <option key={appliance.id} value={appliance.id}>{appliance.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">新增機具</div>
                                        <div className="item-input">
                                            <input type="text" name="name" placeholder="新增機具" />
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

export default connect()(DailyApplianceCreate)
