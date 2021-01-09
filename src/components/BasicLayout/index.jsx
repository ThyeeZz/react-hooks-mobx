import React from 'react';

export function BasicLayout (props){
  return(
    <div className="basic-layout">
      <p>这个是基础展示组件</p>
      <>
      {props.children}
      </>
    </div>
  )
}