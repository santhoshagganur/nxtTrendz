// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onFailure()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-text" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-element"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="label-text" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-element"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showError, errorMsg} = this.state

    return (
      <Link to="/login">
        <div className="login-form-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-page-image"
            alt="website login"
          />
          <form
            className="form-container login-card"
            onSubmit={this.submitForm}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="app-login-logo"
              alt="website logo"
            />
            <div className="login-user-elements">
              {this.renderUsernameField()}
            </div>
            <div className="login-user-elements">
              {this.renderPasswordField()}
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showError && <p className="error-msg"> *{errorMsg} </p>}
          </form>
        </div>
      </Link>
    )
  }
}

export default LoginForm
