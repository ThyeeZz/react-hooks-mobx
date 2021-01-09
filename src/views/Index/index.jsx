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
import useRouter from './useRouter';
import showComponentWithinLayout from '../../components/ShowLayout'
import './index.scss';

// const { beforeRouterComponentLoad, afterRouterComponentDidLoaded } = RouterHooks;
const routes = ROUTES.reduce((pre, cur) => {
  const { children } = cur;
  if (children && children.length) {
    pre = pre.concat(children)
  }
  return pre;
}, [])

const Index = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };
  const [levelOneLabel, levelTwoLabel] = useRouter(ROUTES,props.history.location.pathname);
  useEffect(() => {
    // /* 增加监听函数 */
    // beforeRouterComponentLoad((history) => {
    //   console.log('当前激活的路由是', history.location);

    // })
    // afterRouterComponentDidLoaded(history => {
    //   console.log(history.location.pathname + '已经加载')
    // })

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
            <Breadcrumb.Item>{levelOneLabel}</Breadcrumb.Item>
            <Breadcrumb.Item>{levelTwoLabel}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="content-layout">
          <Route path="/index/" exact>
            <Redirect to="/index/bookkeepManager/mine" />
          </Route>
          {
            routes.map(item => {
              const { layout, isLayout, component, id, path } = item;
              if (layout && isLayout) {
                return <Route key={id} path={'/index' + path} exact render={()=>showComponentWithinLayout(layout, component)} />
              }
              return <Route key={id} path={'/index' + path} exact component={component} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Index