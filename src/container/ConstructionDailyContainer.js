import React, {Component} from 'react'
import {connect} from 'react-redux'
import ConstructionDaily from '../component/ConstructionDaily'
import {getConstructionDailyList} from '../action/ConstructionDaily'

class ConstructionDailyContainer extends Component {
    render() {
        const constructionDaily = this.props.constructionDailies.find((candidate) => {
            return candidate.id == this.props.params.constructionDailyId
        })

        return (
            <ConstructionDaily constructionDaily={constructionDaily} projectId={this.props.params.projectId} />
        )
    }
}

const mapStateToProps = ({constructionDailies}) => {
    return {constructionDailies}
}

export default connect(mapStateToProps)(ConstructionDailyContainer)
