import React from 'react';
import './MIcon.css'

/**
 * @param {Object} props
 * @param {String} props.class
 * @param {String} props.icon
 * @param {String} props.url
 * @param {Number} props.scale
 */
const MIcon = props => {
  const computedProps = {
    className: `m-icon ${props.class ? props.class : ''}`,
    style: { width: `calc(1rem * ${props.scale || 1})` },
    src: props.src || `/static/svg/m-${ props.icon || 'default' }.svg`
  }

  return <img {...computedProps} alt="icon" />
}

export default MIcon
