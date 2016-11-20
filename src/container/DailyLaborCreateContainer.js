import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import formSerialize from 'form-serialize'
import {createDailyLabor} from 'action/DailyLabor'
import {createLabor, getLaborList} from 'action/Labor'
import DailyLaborCreate from 'component/DailyLaborCreate'

class DailyLaborCreateContainer extends Component {
    state = {
        labors: []
    }

    componentDidMount() {
        this.props.dispatch(getLaborList()).then(({labors}) => {
            this.setState({labors})
        })
    }

    handleOnSubmit = (form) => {
        const formData = formSerialize(form, {hash: true})
        const {projectId, constructionDailyId} = this.props.params

        // 如果使用者有填「新增人員」的內容，就直接新增該人員，並新增到日報表上
        // 如果使用者沒填「新增人員」的內容，就使用既有人員和數量兩個欄位，新增到日報表上
        if (formData.name) {
            this.props.dispatch(createLabor(formData)).then(({labor}) => {
                formData.labor_id = labor.id

                this.props.dispatch(createDailyLabor(projectId, constructionDailyId, formData)).then(() => {
                    hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
                })
            })

            return
        }

        this.props.dispatch(createDailyLabor(projectId, constructionDailyId, formData)).then(() => {
            hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
        })
    }

    render() {
        const {projectId, constructionDailyId} = this.props.params
        const {labors} = this.state
        const prevLink = `/projects/${projectId}/construction-dailies/${constructionDailyId}`

        return (
            <DailyLaborCreate
                constructionDailyId={constructionDailyId}
                labors={labors}
                onSubmit={this.handleOnSubmit}
                prevLink={prevLink}
                projectId={projectId}
            />
        )
    }
}

export default connect()(DailyLaborCreateContainer)
