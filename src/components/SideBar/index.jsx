import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import routes from '../../router';

const [defaultSelectedKeys, defaultOpenKeys] = [routes[0].children[0].id, routes[0].id];
const { SubMenu } = Menu;
const SideBar = (props = {}) => {

  const { collapsed } = props;

  return (
    <div style={{ width: !collapsed ? 256 : 80, height: '100%', background: '#001529' }}>
      <Menu
        defaultSelectedKeys={[defaultSelectedKeys]}
        defaultOpenKeys={[defaultOpenKeys]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >

        {
          routes.map(item => {
            const { icon: Icon } = item
            return (
              <SubMenu key={item.id} icon={<Icon />} title={item.label}>
                {
                  item.children.map(subItem => {
                    return (
                      <Menu.Item key={subItem.id}>
                        <Link to={`/index${subItem.path}`}>{subItem.label}</Link>
                      </Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }

      </Menu>
    </div>
  );

}

export default SideBar