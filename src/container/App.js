import React, { Component } from 'react'

class App extends Component {
    componentDidMount() {
        window.framework7 = new window.Framework7({
            pushState: false,
            router: false
        })

        window.mainView = window.framework7.addView('.view-main', {
            dynamicNavbar: false
        })
    }

    render() {
        return (
            <div className="pages">
                {this.props.children}
            </div>
        )
    }
}

export default App
