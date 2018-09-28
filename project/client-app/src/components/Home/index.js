import React, { Component } from 'react'
import './index.css'

import api from '../../api-client.js'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      user: undefined
    }
  }

  fillUser = (event) => {
    this.setState({ user: event.target.value })
    let gnome = this.state.users[event.target.value].name
    let userName = document.getElementsByClassName('title')
    let professionsTitle = document.getElementsByClassName('professionsTitle')
    let professionsData = document.getElementsByClassName('professionsData')
    let friendsTitle = document.getElementsByClassName('friendsTitle')
    let friendsData = document.getElementsByClassName('friendsData')

    userName[0].innerHTML = `<h5><p>${gnome}</p></h5>`

    let professions = ''
    this.state.users[event.target.value].professions.map(profession => {
      professions += `<li>${profession}</li>`
    })

    let friends = ''
    this.state.users[event.target.value].friends.map(friend => {
      friends += `<li>${friend}</li>`
    })

    professionsTitle[0].innerHTML = "Professions"
    professionsData[0].innerHTML = `<ul>${professions}</ul>`

    friendsTitle[0].innerHTML = "Friends"
    friendsData[0].innerHTML = `<ul>${friends}</ul>`

    // userData[0].innerHTML = `
    //   <img src='${this.state.users[event.target.value].thumbnail}' alt="user-picture">
    //   <h6>Professions</h6>
    //   <ul>${professions}</ul>
    //   <ul>${friends}</ul>
    // `
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
                <div className="row">
                  <div className="card-title section">
                    <h6>Search by Gnome</h6>
                  </div>
                  
                  <div className="col-12">
                    <div className="card searchField">
                      <div className="card-body">
                      <form className="search-box">
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
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 title"></div>
                  <div className="card-group">
                      <div className="professions col-6">
                        <div className="professionsTitle"></div>
                        <div className="professionsData"></div>
                      </div>
                      <div className="friends col-6">
                        <div className="friendsTitle"></div>
                        <div className="friendsData"></div>
                      </div>
                  </div>
                </div>
              </div>

              
        </main>
    )
  }
}

export default Home