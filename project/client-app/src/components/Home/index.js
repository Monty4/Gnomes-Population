import React, { Component } from 'react'
import './index.css'

import api from '../../api-client.js'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // show: '',
      users: [],
      user: undefined
    }
  }

  fillUser = (event) => {
    this.setState({ user: event.target.value })
    let gnome = this.state.users[event.target.value].name
    let userData = document.getElementsByClassName('user-data')
    userData[0].innerHTML = `
    <p>${gnome}</p>
    <img src='${this.state.users[event.target.value].thumbnail}' alt="user-picture">
    `
  }

  submit = () => {
    this.setState(
      { show: 'yes'}
      )
  }

  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users: users.Brastlewark })
    })
  }
  
  render() {
      return (
          <main>
              <div className="container">
                <form className="search-box" onSubmit={(e) => { e.preventDefault(); this.submit() }}>
                    {/* <input type="text" placeholder="Search Gnome..." name="search" />
                    <button type="submit">Search</button> */}

                    <select size="20" onChange={this.fillUser}>
                      <option className="field" value="">Select Gnome</option>
                      {
                        this.state.users.map(user => {
                          return <option className="field" value={user.id}>{user.name}</option>
                        })
                      }
                    </select>
                    
                </form>
              </div>

              <div>
                <section className="results">
                    <div className="user-data">
                      
                    </div>
                </section>

                <section className="no-results">
                </section>
             </div>
        </main>
    )
  }
}

export default Home