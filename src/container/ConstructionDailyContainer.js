import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getConstructionDailyList} from 'action/ConstructionDaily'
import {getDailyApplianceList} from 'action/DailyAppliance'
import {getDailyLaborList} from 'action/DailyLabor'
import {getDailyMaterialList} from 'action/DailyMaterial'
import {getDailyWorkList} from 'action/DailyWork'
import ConstructionDaily from 'component/ConstructionDaily'

class ConstructionDailyContainer extends Component {
    state = {
        constructionDaily: {},
        appliances: [],
        labors: [],
        materials: [],
        works: []
    }

    componentDidMount() {
        const constructionDaily = this.props.constructionDailies.find((candidate) => {
            return candidate.id == this.props.params.constructionDailyId
        })

        this.setState({constructionDaily})

        this.props.dispatch(getDailyWorkList(this.props.params.projectId, constructionDaily.id)).then(({works}) => {
            this.setState({works})
        })

        this.props.dispatch(getDailyMaterialList(this.props.params.projectId, constructionDaily.id)).then(({materials}) => {
            this.setState({materials})
        })

        this.props.dispatch(getDailyLaborList(this.props.params.projectId, constructionDaily.id)).then(({labors}) => {
            this.setState({labors})
        })

        this.props.dispatch(getDailyApplianceList(this.props.params.projectId, constructionDaily.id)).then(({appliances}) => {
            this.setState({appliances})
        })
    }

    render() {
        const {
            constructionDaily,
            appliances,
            labors,
            materials,
            works
        } = this.state

        return (
            <ConstructionDaily
                constructionDaily={constructionDaily}
                appliances={appliances}
                labors={labors}
                materials={materials}
                projectId={this.props.params.projectId}
                works={works}
            />
        )
    }
}

const mapStateToProps = ({constructionDailies}) => {
    return {constructionDailies}
}

export default connect(mapStateToProps)(ConstructionDailyContainer)
