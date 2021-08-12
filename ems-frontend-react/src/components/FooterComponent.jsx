import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer position-fixed">
                    <span className="text-muted">All Rights Reserved 2021 @Example.com</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
