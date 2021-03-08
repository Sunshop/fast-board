import { Home, Test } from '../views/index';

const routers = [
  {
    path: '/',
    title: '主页',
    icon: 'home',
    component: Home,
  },
  {
    path: '/test',
    title: 'test',
    icon: 'test',
    component: Test,
  },
];

export { routers };
