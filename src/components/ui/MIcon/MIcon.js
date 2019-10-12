import React from 'react';
import './MIcon.css'

const MIcon = props => (
  <img
    className={`m-icon ${props.class}`}
    style={{ width: `calc(1rem * ${props.scale || 1})` }}
    src={`/static/svg/m-${ props.icon || 'default' }.svg`} />

)

export default MIcon
