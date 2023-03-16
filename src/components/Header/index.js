// Write your JS code here
import './index.css'
import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className="home-navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="home-page-app-logo"
          alt="website logo"
        />
        <ul className="nav-items-container">
          <li className="nav-item"> Home </li>
          <li className="nav-item"> Products </li>
          <li className="nav-item"> Cart </li>
          <button className="logout-button" type="button">
            Logout
          </button>
        </ul>
      </div>
    )
  }
}

export default Header
