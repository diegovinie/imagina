import React from 'react'
import './HomeBanner.css'
import MIcon from '../MIcon'

const HomeBanner = props => (
  <div className="home-banner jumbotron row pt-5 pb-3 mx-0 d-none d-sm-block" style={{ backgroundColor: '#fff7eb' }}>
    <div className="col-8 offset-4 pr-0">
      <div className="h5 text-primary font-weight-bold mb-0">
        $0 delivery for 30 days!
        <img src="/static/images/d.png" alt="d" className="px-3 mb-1" style={{ height: '1.3rem' }}></img>
      </div>
      <div className="text-muted">
        <small>$0 delifery fee for orders over $10 for 30 days</small>

      </div>
      <button className="home-banner-button btn btn-link">
        <small>Learn more</small>
        <MIcon icon="arrow-right-p" scale="0.8" class="ml-2" />
      </button>
    </div>
    <img className="image" alt="headerimage" src="/static/images/headerimage.png"></img>
  </div>
)

export default HomeBanner
