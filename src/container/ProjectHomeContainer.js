import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getAllProjects } from 'action/Project'
import { Link } from 'react-router'
import Navbar from 'component/Navbar'
import ProjectHome from 'component/ProjectHome'

class ProjectHomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getAllProjects())
    }

    render() {
        const project = this.props.projects.find((candidate) => {
            return candidate.id == this.props.params.projectId
        })

        return (
            <ProjectHome project={project} />
        )
    }
}

const mapStateToProps = ({projects}) => {
    return { projects }
}

export default connect(mapStateToProps)(ProjectHomeContainer)
