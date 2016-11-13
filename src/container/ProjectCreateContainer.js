import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectCreate from '../component/ProjectCreate'
import { hashHistory } from 'react-router'
import { createProject } from '../action/Project'

class ProjectCreateContainer extends Component {
    handleOnSubmit = (form) => {
        this.props.dispatch(
            createProject(form)
        ).then(project => {
            console.log(project)
            hashHistory.replace(`/projects/${project.id}`)
        })
    }

    render() {
        return (
            <ProjectCreate onSubmit={this.handleOnSubmit} />
        )
    }
}

export default connect()(ProjectCreateContainer)
