import React from 'react';
import './index.scss'

export function BasicLayout (props){
  return(
    <div className="basic-layout">
      <div className="basic-layout-header">
        <p>this is basic layout</p>
      </div>
      <div className="basic-layout-content">
        <>
          {props.children}
        </>
      </div>
      <div className="basic-layout-footer"></div>
    </div>
  )
}