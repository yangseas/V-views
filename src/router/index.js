import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//home
const Home = resolve => require(['@/components/home/home'], resolve);
//组件
const NoFound = resolve => require(['@/views/NoFound'], resolve);
const Loading = resolve => require(['@/views/Loading'], resolve);
const Step = resolve => require(['@/views/Step'], resolve);
const verify = resolve => require(['@/views/verify'], resolve);
// 默认路由
const router =  new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '*',
      comments: NoFound,
    },
  ]
});
// 动态路由,用于生产菜单
export const routesMenu = [
  {
    path: '/notice',
    name: 'notice',
    component: Home,
    children: [
      {
        path: 'loading',
        name: 'loading组件',
        component: Loading,
      }
    ]
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: Home,
    children: [
      {
        path: 'step',
        name: 'step组件',
        component: Step,
      }
    ]
  },
  {
    path: '/verify',
    name: 'verify',
    component: Home,
    children: [{
      path: 'verify',
      name: '官方文档验证',
      component: verify,
    }]
  },
];
router.addRoutes(routesMenu);
export default router;