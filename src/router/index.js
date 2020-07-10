import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/login/index.vue'),
    },
    {
      path: '/server',
      component: () => import('@/pages/index.vue'),
      beforeEnter: (to, from, next) => {
        console.log('before 登录判断')
        next()
      },
      children: [
        {
          path: 'user',
          name: '用户管理',
          index:'1',
          component: () => import('@/pages/user/index.vue'),
        },
        {
          path: '/article',
          name: "文章管理",
          index:'2',
          component: () => import('@/pages/article/index.vue'),
        },
        {
          path: '/conf',
          name: "部门管理",
          index:'3',
          component: () => import('@/pages/conf/index.vue'),
        },
        {
          path: '/depart',
          name: "GDP管理",
          index:'4',
          component: () => import('@/pages/depart/index.vue'),
        },
      ]
    },
    {
      path: '/2c/page1',
      component: () => import('@/pages/2c/page1/index.vue'),
    },
    {
      path: '/2c/page2',
      component: () => import('@/pages/2c/page2/index.vue'),
    },
    {
      path: '/2c/page3',
      component: () => import('@/pages/2c/page3/index.vue'),
    }
  ],
});
