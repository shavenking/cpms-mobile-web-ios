import React, {Component} from 'react'
import {connect} from 'react-redux'
import ConstructionDaily from '../component/ConstructionDaily'
import {getWorksByConstructionDaily, getConstructionDailyList} from '../action/ConstructionDaily'
import {getDailyMaterialList} from '../action/DailyMaterial'

class ConstructionDailyContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            constructionDaily: {},
            works: [],
            materials: []
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

        this.props.dispatch(getDailyMaterialList(this.props.params.projectId, constructionDaily.id)).then(({materials}) => {
            this.setState({materials})
        })
    }

    render() {
        const {
            constructionDaily,
            materials,
            works
        } = this.state

        return (
            <ConstructionDaily works={works} materials={materials} constructionDaily={constructionDaily} projectId={this.props.params.projectId} />
        )
    }
}

const mapStateToProps = ({constructionDailies}) => {
    return {constructionDailies}
}

export default connect(mapStateToProps)(ConstructionDailyContainer)
