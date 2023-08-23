import { createWebHistory, createRouter } from 'vue-router'

export const routes = [
  {
    name: 'index',
    path: '/',
    redirect: '/index',
    meta: { title: '首页', icon: 'icon_mall', name: 'index' },
    children: [
      {
        name: 'pages_index',
        path: 'index',
        component: () => import('@/pages/Index.vue'),
        meta: { hidden: false, title: '主页', name: 'index_index' },
      },
    ],
  },
  // {
  //   path: '/mall',
  //   redirect: '/mall/list',
  //   name: 'mall',
  //   meta: { title: '商城', icon: 'icon_mall', name: 'mall' },
  //   children: [
  //     {
  //       path: 'home',
  //       name: 'mall_home',
  //       component: () => import('@/pages/Mall/MallHome.vue'),
  //       meta: { hidden: false, title: '主页', name: 'mall_index' },
  //     },
  //     {
  //       path: 'list',
  //       name: 'mall_list',
  //       component: () => import('@/pages/Mall/MallList.vue'),
  //       meta: { hidden: false, title: '列表', name: 'mall_list' },
  //     },
  //   ],
  // },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
