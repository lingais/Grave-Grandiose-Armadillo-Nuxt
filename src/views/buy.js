import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './buy.css'

const Buy = (props) => {
  return (
    <div className="buy-container">
      <Helmet>
        <title>Buy - Grave Grandiose Armadillo</title>
        <meta property="og:title" content="Buy - Grave Grandiose Armadillo" />
      </Helmet>
      <div className="buy-frame3">
        <div className="buy-logo">
          <img
            alt="Header Logo"
            src="https://i.ibb.co/CVbJjw9/headerlogo.png"
            loading="eager"
            className="buy-image"
          />
        </div>
        <div className="buy-frame1">
          <Link to="/" className="buy-text nav">
            HOME
          </Link>
          <span className="buy-text01 nav">TRACK ORDER</span>
          <span className="buy-text02 nav">SUPPORT</span>
        </div>
        <div className="buy-frame2">
          <span className="buy-text03">Share</span>
        </div>
      </div>
      <div className="buy-b-g-container">
        <img
          alt="image"
          src="/playground_assets/stacked-waves-haikei%20%5B1%5D.svg"
          className="buy-image1"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE2NjYwODMyOTA&amp;ixlib=rb-1.2.1&amp;w=1500"
          className="buy-image2"
        />
      </div>
      <div className="buy-container1">
        <div className="buy-blog-post-card">
          <div className="buy-container2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554967769-1f961137e9c1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxob29kaWV8ZW58MHx8fHwxNjY1Njg5MTA0&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=400"
              className="buy-image3"
            />
            <span className="buy-text04">Branded Hoodie</span>
            <span className="buy-text05">eBay</span>
          </div>
        </div>
        <span className="buy-text06">Description:</span>
        <textarea className="buy-textarea textarea"></textarea>
        <div className="buy-container3">
          <span className="buy-text07">
            <span>Select Variation:</span>
            <br></br>
          </span>
          <div className="buy-container4">
            <input type="radio" name="radio" className="buy-radiobutton" />
            <span className="buy-text10">
              <span>Default</span>
              <br></br>
            </span>
          </div>
          <div className="buy-container5">
            <input type="radio" name="radio" className="buy-radiobutton1" />
            <span className="buy-text13">Custom</span>
          </div>
          <input
            type="text"
            placeholder="Eg.: White, long-sleeves, XL"
            className="buy-textinput input"
          />
        </div>
        <div className="buy-container6">
          <span className="buy-text14">
            <span>Select Amount:</span>
            <br></br>
          </span>
          <input type="text" value="1" className="buy-textinput1 input" />
        </div>
        <div className="buy-frame21">
          <span className="buy-text17">BUY</span>
        </div>
        <Link to="/" className="buy-navlink">
          <div className="buy-frame22">
            <span className="buy-text18">CANCEL</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Buy
