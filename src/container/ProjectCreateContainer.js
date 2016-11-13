import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectCreate from '../component/ProjectCreate'
import { hashHistory } from 'react-router'
import { getAllProjects, createProject } from '../action/Project'

class ProjectCreateContainer extends Component {
    handleOnSubmit = (form) => {
        this.props.dispatch(
            createProject(form)
        ).then(project => {
            // 新增完專案後，先更新再重導向
            this.props.dispatch(getAllProjects()).then(() => {
                hashHistory.replace(`/projects/${project.id}`)
            })
        })
    }

    render() {
        return (
            <ProjectCreate onSubmit={this.handleOnSubmit} />
        )
    }
}

export default connect()(ProjectCreateContainer)
