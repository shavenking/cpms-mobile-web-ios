import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import formSerialize from 'form-serialize'
import {createDailyAppliance} from 'action/DailyAppliance'
import {createAppliance, getApplianceList} from 'action/Appliance'
import DailyApplianceCreate from 'component/DailyApplianceCreate'

class DailyApplianceCreateContainer extends Component {
    state = {
        appliances: []
    }

    componentDidMount() {
        this.props.dispatch(getApplianceList()).then(({appliances}) => {
            this.setState({appliances})
        })
    }

    handleOnSubmit = (form) => {
        const formData = formSerialize(form, {hash: true})
        const {projectId, constructionDailyId} = this.props.params

        // 如果使用者有填「新增人員」的內容，就直接新增該人員，並新增到日報表上
        // 如果使用者沒填「新增人員」的內容，就使用既有人員和數量兩個欄位，新增到日報表上
        if (formData.name) {
            this.props.dispatch(createAppliance(formData)).then(({appliance}) => {
                formData.appliance_id = appliance.id

                this.props.dispatch(createDailyAppliance(projectId, constructionDailyId, formData)).then(() => {
                    hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
                })
            })

            return
        }

        this.props.dispatch(createDailyAppliance(projectId, constructionDailyId, formData)).then(() => {
            hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
        })
    }

    render() {
        const {projectId, constructionDailyId} = this.props.params
        const {appliances} = this.state
        const prevLink = `/projects/${projectId}/construction-dailies/${constructionDailyId}`

        return (
            <DailyApplianceCreate
                constructionDailyId={constructionDailyId}
                appliances={appliances}
                onSubmit={this.handleOnSubmit}
                prevLink={prevLink}
                projectId={projectId}
            />
        )
    }
}

export default connect()(DailyApplianceCreateContainer)
