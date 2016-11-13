import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getAllProjects } from '../action/Project'
import { Link } from 'react-router'
import Navbar from '../component/Navbar'
import ConstructionDailyCreate from '../component/ConstructionDailyCreate'
import { getConstructionDailyList, createConstructionDaily } from '../action/ConstructionDaily'
import { hashHistory } from 'react-router'

class ConstructionDailyCreateContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getAllProjects())
    }

    handleOnSubmit = (form) => {
        this.props.dispatch(createConstructionDaily(this.props.params.projectId, form)).then(({constructionDaily}) => {
            // 重新抓施工日報的列表，抓完再導向
            this.props.dispatch(getConstructionDailyList(this.props.params.projectId)).then(() => {
                hashHistory.replace(`/projects/${this.props.params.projectId}/construction-dailies/${constructionDaily.id}`)
            })
        })
    }

    render() {
        const project = this.props.projects.find((candidate) => {
            return candidate.id == this.props.params.projectId
        })

        return (
            <ConstructionDailyCreate project={project} onSubmit={this.handleOnSubmit} />
        )
    }
}

const mapStateToProps = ({projects}) => {
    return {projects}
}

export default connect(mapStateToProps)(ConstructionDailyCreateContainer)