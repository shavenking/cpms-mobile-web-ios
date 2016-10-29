import React, { Component } from 'react'

class ProjectHome extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-content">{this.props.params.projectId}</div>
            </div>
        )
    }
}

export default ProjectHome;
