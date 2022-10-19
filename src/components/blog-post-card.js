import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card.css'

const BlogPostCard = (props) => {
  return (
    <div className={`blog-post-card-blog-post-card ${props.rootClassName} `}>
      <div className="blog-post-card-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card-image"
        />
        <span className="blog-post-card-text">{props.text}</span>
        <span className="blog-post-card-text1">{props.text1}</span>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  text: 'BRANDED HOODIE',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1554967769-1f961137e9c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxob29kaWV8ZW58MHx8fHwxNjY1Njg5MTA0&ixlib=rb-1.2.1&q=80&w=200',
  text1: 'eBay',
  rootClassName: '',
}

BlogPostCard.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard
