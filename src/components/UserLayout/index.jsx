import React from 'react';

export function UserLayout (props){
  return(
    <div className="basic-layout">
      <p>这个是用户展示组件</p>
      <>
      {props.children}
      </>
    </div>
  )
}