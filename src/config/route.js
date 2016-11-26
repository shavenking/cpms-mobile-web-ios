import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router'
import {
    App,
    ConstructionDailyContainer,
    ConstructionDailyCreateContainer,
    ConstructionDailyListContainer,
    DailyApplianceCreateContainer,
    DailyLaborCreateContainer,
    DailyMaterialCreateContainer,
    DailyWorkCreateContainer,
    LoginPageContainer,
    ProjectCreateContainer,
    ProjectHomeContainer,
    ProjectsContainer,
    RegisterPageContainer
} from 'container'

export default function getRoute({store, history, requireAuth}) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRedirect to="projects" />
                    <Route path="projects" onEnter={requireAuth}>
                        <IndexRoute component={ProjectsContainer} />
                        <Route path="create" component={ProjectCreateContainer} />
                        <Route path=":projectId" component={ProjectHomeContainer} />

                        {/* 施工日報表 */}
                        <Route path=":projectId/construction-dailies" component={ConstructionDailyListContainer} />
                        <Route path=":projectId/construction-dailies/create" component={ConstructionDailyCreateContainer} />
                        <Route path=":projectId/construction-dailies/:constructionDailyId" component={ConstructionDailyContainer} />

                        {/* 日報表 - 工項 */}
                        <Route path=":projectId/construction-dailies/:constructionDailyId/works/create" component={DailyWorkCreateContainer} />

                        {/* 日報表 - 材料 */}
                        <Route path=":projectId/construction-dailies/:constructionDailyId/materials/create" component={DailyMaterialCreateContainer} />

                        {/* 日報表 - 人員 */}
                        <Route path=":projectId/construction-dailies/:constructionDailyId/labors/create" component={DailyLaborCreateContainer} />

                        {/* 日報表 - 機具 */}
                        <Route path=":projectId/construction-dailies/:constructionDailyId/appliances/create" component={DailyApplianceCreateContainer} />
                    </Route>
                    <Route path="register" component={RegisterPageContainer} />
                    <Route path="login" component={LoginPageContainer} />
                </Route>
            </Router>
        </Provider>
    )
}
