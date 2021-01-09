import AsyncRouter from '../components/AsyncRouter';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {
  BasicLayout
} from '../components/BasicLayout';
import {
  UserLayout
} from '../components/UserLayout';

const Mine = AsyncRouter(() => import('../views/system/Mine'));
const Home = AsyncRouter(() => import('../views/system/Home'));
const Assets = AsyncRouter(() => import('../views/system/Assets'));
const Statistics = AsyncRouter(() => import('../views/system/Statistics'));


const ROUTES = [{
    id: '1',
    path: "bookkeepManager",
    label: '手账管理',
    icon: DesktopOutlined,
    layout: BasicLayout,
    children: [{
        id: '1-1',
        path: '/bookkeepManager/mine',
        label: '我的',
        component: Mine
      },
      {
        id: "1-2",
        label: "明细",
        path: '/bookkeepManager/home',
        component: Home
      },
      {
        id: '1-3',
        path: '/bookkeepManager/assets',
        label: "资产",
        component: Assets
      },
      {
        id: '1-4',
        path: '/bookkeepManager/statistics',
        label: "统计",
        component: Statistics
      },
    ]
  },

  {
    id: '2',
    icon: AppstoreOutlined,
    layout: UserLayout,
    path: "navigationTwo",
    label: 'Navigation Two',
    children: [{
        id: '2-1',
        path: '/navigationTwo/mine',
        label: 'Option 5',
        component: Statistics
      },
      {
        id: "2-2",
        label: "Option 6",
        path: '/navigationTwo/home',
        component: Statistics
      },
      {
        id: '2-3',
        path: '/navigationTwo/assets',
        label: "Option 7",
        component: Statistics
      },
      {
        id: '2-4',
        path: '/navigationTwo/statistics',
        label: "Option 6",
        component: Statistics
      },
      {
        id: '2-5',
        path: '/navigationTwo/statistics',
        label: "Option 7",
        component: Statistics
      },
    ]
  },
  {
    id: '3',
    icon: PieChartOutlined,
    layout: UserLayout,
    path: "navigationThree",
    label: 'Navigation Three',
    children: [{
        id: '3-1',
        path: '/navigationThree/mine',
        label: 'Option 8',
        component: Statistics
      },
      {
        id: "3-2",
        label: "Option 9",
        path: '/navigationThree/home',
        component: Statistics
      },
      {
        id: '3-3',
        path: '/navigationThree/assets',
        label: "Option 10",
        component: Statistics
      }
    ]
  },
]

export default ROUTES