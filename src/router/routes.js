
const routes = [
  {
    path: '/about',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/about', component: () => import('pages/About.vue') }
    ]
  },
  {
    path: '/settings',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/', component: () => import('pages/Settings.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
