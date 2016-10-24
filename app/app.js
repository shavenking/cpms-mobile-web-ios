import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <Link to="/home">Home</Link>
                </div>
            </div>
        )
    }
}

class ProjectHome extends React.Component {
    render() {
        return (
            <div className="page navbar-fixed">
                <div className="navbar">
                    <div className="navbar-inner">
                        <div className="left">
                            <Link to="/" className="link">專案列表</Link>
                        </div>
                        <div className="center">專案首頁</div>
                    </div>
                </div>
                <div className="page-content">
                    This is project home.
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    componentDidMount() {
        window.app = new Framework7()

        window.mainView = window.app.addView('.view-main', {
            dynamicNavbar: false
        })
    }

    componentDidUpdate() {
        window.app.sizeNavbars('.view-main')
    }

    render() {
        return (
            <div className="view view-main">
                <div className="pages">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProjectList} />
                <Route path="home" component={ProjectHome} />
            </Route>
        </Router>
    ),
    document.getElementById('app-root')
)
