import React, {Component} from 'react'
import {connect} from 'react-redux'
import ConstructionDaily from '../component/ConstructionDaily'
import {getWorksByConstructionDaily, getConstructionDailyList} from '../action/ConstructionDaily'

class ConstructionDailyContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            constructionDaily: {},
            works: []
        }
    }

    componentDidMount() {
        const constructionDaily = this.props.constructionDailies.find((candidate) => {
            return candidate.id == this.props.params.constructionDailyId
        })

        this.setState({constructionDaily})

        this.props.dispatch(getWorksByConstructionDaily(this.props.params.projectId, constructionDaily.id)).then(({works}) => {
            this.setState({works})
        })
    }

    render() {
        const constructionDaily = this.state.constructionDaily
        const works = this.state.works

        return (
            <ConstructionDaily works={works} constructionDaily={constructionDaily} projectId={this.props.params.projectId} />
        )
    }
}

const mapStateToProps = ({constructionDailies}) => {
    return {constructionDailies}
}

export default connect(mapStateToProps)(ConstructionDailyContainer)
