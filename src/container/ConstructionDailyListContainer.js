import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getAllProjects } from '../action/Project'
import { Link } from 'react-router'
import Navbar from '../component/Navbar'
import ConstructionDailyList from '../component/ConstructionDailyList'
import { getConstructionDailyList } from '../action/ConstructionDaily'

class ConstructionDailyListContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getConstructionDailyList(this.props.params.projectId))
        this.props.dispatch(getAllProjects())
    }

    render() {
        const project = this.props.projects.find((candidate) => {
            return candidate.id == this.props.params.projectId
        })

        return (
            <ConstructionDailyList list={this.props.constructionDailies} project={project} />
        )
    }
}

const mapStateToProps = ({constructionDailies, projects}) => {
    return { constructionDailies, projects }
}

export default connect(mapStateToProps)(ConstructionDailyListContainer)
