import React, { Component } from 'react';

import './index.css'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Brastlewark Gnome Town Population'
        }
    }

    render() {
        return (
            <header>
                <h1>{this.state.title}</h1>
            </header>
        )
    }
}

export default Header