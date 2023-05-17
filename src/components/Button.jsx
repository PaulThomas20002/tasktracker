import React from 'react';
//import PropTypes from 'prop-types'

const onClick = (e) => {
    console.log('Clicked the Button :: Add');
}
export default function Button( {color, text} ) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn"> 
    {text} 
    </button>
  )
}

Button.defaultProps = {
    color:'SteelBlue',
}
