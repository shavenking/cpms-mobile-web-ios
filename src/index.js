import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

// container
import {
    App,
    ConstructionDailyContainer,
    ConstructionDailyCreateContainer,
    ConstructionDailyListContainer,
    ConstructionDailyWorkCreateContainer,
    DailyLaborCreateContainer,
    DailyMaterialCreateContainer,
    LoginPageContainer,
    ProjectCreateContainer,
    ProjectHomeContainer,
    ProjectsContainer,
    RegisterPageContainer
} from 'container'

// config
import {store, history} from './config'

const UserAuthenticated = (nextState, replace, callback) => {
    const {currentUser: {authToken}} = store.getState()

    if (!authToken) {
        replace('/login')
    }

    callback()
}

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="projects" />
                <Route path="projects" onEnter={UserAuthenticated}>
                    <IndexRoute component={ProjectsContainer} />
                    <Route path="create" component={ProjectCreateContainer} />
                    <Route path=":projectId" component={ProjectHomeContainer} />

                    {/* 施工日報表 */}
                    <Route path=":projectId/construction-dailies" component={ConstructionDailyListContainer} />
                    <Route path=":projectId/construction-dailies/create" component={ConstructionDailyCreateContainer} />
                    <Route path=":projectId/construction-dailies/:constructionDailyId" component={ConstructionDailyContainer} />

                    {/* 日報表 - 工項 */}
                    <Route path=":projectId/construction-dailies/:constructionDailyId/works/create" component={ConstructionDailyWorkCreateContainer} />

                    {/* 日報表 - 材料 */}
                    <Route path=":projectId/construction-dailies/:constructionDailyId/materials/create" component={DailyMaterialCreateContainer} />

                    {/* 日報表 - 人員 */}
                    <Route path=":projectId/construction-dailies/:constructionDailyId/labors/create" component={DailyLaborCreateContainer} />
                </Route>
                <Route path="register" component={RegisterPageContainer} />
                <Route path="login" component={LoginPageContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
