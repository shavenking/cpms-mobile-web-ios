import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getAllProjects } from '../action/Project'
import { Link } from 'react-router'
import Navbar from '../component/Navbar'

class ProjectsContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getAllProjects())
    }

    render() {
        if (!this.props.projects.length) {
            return <p>nothing</p>
        }

        return (
            <div className="page">
                <div className="page-content">
                    <Navbar title="選擇專案" createLink="/projects/create" />
                    <div className="list-block">
                        <ul>
                            {this.props.projects.map(project => (
                                <li key={project.id}>
                                    <Link to={`/projects/${project.id}`} className="item-link item-content">
                                        <div className="item-inner">
                                            <div className="item-title">{project.name}</div>
                                            <div className="item-after">進入</div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

ProjectsContainer.propTypes = {
    projects: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectsContainer)
