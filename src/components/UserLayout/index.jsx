import React from 'react';
import './index.scss'

export function UserLayout (props){
  return(
    <div className="user-layout">
      <div className="user-layout-aside"></div>
      <div className="user-layout-content">
        <div className="user-layout-title">
          <p>this is user layout</p>
        </div>
        <div className="user-layout-main">
          <>
            {props.children}
          </>
        </div>
      </div>
    </div>
  )
}