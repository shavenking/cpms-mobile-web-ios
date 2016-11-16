import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import DailyMaterialCreate from '../component/DailyMaterialCreate'
import { hashHistory } from 'react-router'
import formSerialize from 'form-serialize'
import {createDailyMaterial} from '../action/DailyMaterial'
import {
    createMaterial,
    getMaterialList
} from '../action/Material'

class DailyMaterialCreateContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            materials: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getMaterialList()).then(({materials}) => {
            this.setState({materials})
        })
    }

    handleOnSubmit = (form) => {
        const formData = formSerialize(form, {hash: true})
        const projectId = this.props.params.projectId
        const constructionDailyId = this.props.params.constructionDailyId

        // 如果使用者有填「新增材料」的內容，就直接新增該材料，並新增到日報表上
        // 如果使用者沒填「新增材料」的內容，就使用既有材料和數量兩個欄位，新增到日報表上
        if (formData.name) {
            this.props.dispatch(createMaterial(formData)).then(({material}) => {
                formData.material_id = material.id

                this.props.dispatch(createDailyMaterial(projectId, constructionDailyId, formData)).then(() => {
                    hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
                })
            })

            return
        }

        this.props.dispatch(createDailyMaterial(projectId, constructionDailyId, formData)).then(() => {
            hashHistory.replace(`/projects/${projectId}/construction-dailies/${constructionDailyId}`)
        })
    }

    render() {
        const projectId = this.props.params.projectId
        const constructionDailyId = this.props.params.constructionDailyId
        const {materials} = this.state

        return (
            <DailyMaterialCreate projectId={projectId} constructionDailyId={constructionDailyId} materials={materials} onSubmit={this.handleOnSubmit} />
        )
    }
}

export default connect()(DailyMaterialCreateContainer)
