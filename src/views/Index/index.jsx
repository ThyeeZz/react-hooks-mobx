import React, { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar';
import { RouterHooks } from '../../components/AsyncRouter';
import { Route, Redirect } from 'react-router-dom';
import ROUTES from '../../router'
import { Breadcrumb, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.scss';

const { beforeRouterComponentLoad, afterRouterComponentDidLoaded } = RouterHooks

const Index = (props) => {
  console.log(props.history)
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };

  useEffect(() => {
    /* 增加监听函数 */
    beforeRouterComponentLoad((history) => {
      console.log('当前激活的路由是', history.location.pathname)
    })
    afterRouterComponentDidLoaded(history => {
      console.log(history.location.pathname + '已经加载')
    })
  }, []);

  return (
    <div className="index-container">
      <div className="sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="content">
        <div className="content-page-header">
          <div>
            <Button onClick={toggleCollapsed} style={{ marginRight: 20 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
          </div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="content-layout">
          <Route path="/index/" exact>
            <Redirect to="/index/home" />
          </Route>
          {
            ROUTES.map(item=>{
              return (
                <Route key={item.id} path={'/index' + item.path} exact component={item.component} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Index