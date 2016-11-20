import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getAllProjects } from 'action/Project'
import { Link } from 'react-router'
import Navbar from 'component/Navbar'
import DailyWorkCreate from 'component/DailyWorkCreate'
import { getConstructionDailyList, createConstructionDaily} from 'action/ConstructionDaily'
import { hashHistory } from 'react-router'
import {getWorkList} from 'action/Work'
import {createWork} from 'action/Work'
import {createDailyWork} from 'action/DailyWork'
import formSerialize from 'form-serialize'

class DailyWorkCreateContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            works: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getWorkList()).then(({works}) => {
            this.setState({works})
        })
    }

    handleOnSubmit = (form) => {
        const formData = formSerialize(form, { hash: true })
        const projectId = this.props.params.projectId
        const constructionDailyId = this.props.params.constructionDailyId

        // 如果使用者有填「新增工項」的內容，就直接新增該工項，並新增到日報表上
        // 如果使用者沒填「新增工項」的內容，就使用既有工項和數量兩個欄位，新增到日報表上
        if (formData.name) {
            this.props.dispatch(createWork(formData)).then(({work}) => {
                formData.work_id = work.id

                this.props.dispatch(createDailyWork(projectId, constructionDailyId, formData)).then(() => {
                    hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
                })
            })

            return
        }

        this.props.dispatch(createDailyWork(projectId, constructionDailyId, formData)).then(() => {
            hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
        })
    }

    render() {
        const projectId = this.props.params.projectId
        const constructionDailyId = this.props.params.constructionDailyId
        const works = this.state.works

        return (
            <DailyWorkCreate projectId={projectId} constructionDailyId={constructionDailyId} works={works} onSubmit={this.handleOnSubmit} />
        )
    }
}

export default connect()(DailyWorkCreateContainer)
