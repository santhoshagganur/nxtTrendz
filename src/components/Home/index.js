// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <Header />
        <div className="home-body-container">
          <div>
            <h1 className="home-body-heading">Clothes That Get You Noticed</h1>
            <p className="home-body-description">
              Fashion is part of the daily air and it does not quite help that
              changes all the time.
            </p>
            <button type="button" className="home-shop-now">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-body-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
