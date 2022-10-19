import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-frame3 ${props.rootClassName} `}>
      <div className="header-logo">
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="eager"
          className="header-image"
        />
      </div>
      <div className="header-frame1">
        <span className="nav">{props.text}</span>
        <span className="header-text1 nav">{props.text1}</span>
        <span className="header-text2 nav">{props.text2}</span>
      </div>
      <div className="header-frame2">
        <span className="header-text3">{props.text3}</span>
      </div>
    </div>
  )
}

Header.defaultProps = {
  text2: 'SUPPORT',
  rootClassName: '',
  text1: 'TRACK ORDER',
  text3: 'Share',
  image_alt: 'Header Logo',
  image_src: 'https://i.ibb.co/CVbJjw9/headerlogo.png',
  text: 'HOME',
}

Header.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Header
