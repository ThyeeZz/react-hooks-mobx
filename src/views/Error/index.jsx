import React from 'react';
import logo from '../../assets/images/error.png'
const Error = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <img src={logo} alt="" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} />
    </div>
  )
}

export default Error