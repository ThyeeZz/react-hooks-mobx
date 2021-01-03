import AsyncRouter from '../components/AsyncRouter';
const Mine = AsyncRouter(() => import('../views/system/Mine'));
const Home = AsyncRouter(() => import('../views/system/Home'));
const Assets = AsyncRouter(() => import('../views/system/Assets'));
const Statistics = AsyncRouter(() => import('../views/system/Statistics'));

const ROUTES = [
  {
    id: 1,
    path: '/mine',
    component: Mine
  },
  {
    id: 2,
    path: '/home',
    component: Home
  },
  {
    id: 3,
    path: '/assets',
    component: Assets
  },
  {
    id: 4,
    path: '/statistics',
    component: Statistics
  },
]

export default ROUTES