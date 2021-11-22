
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Admin.vue') }
    ]
  },
  {
    path: '/guest',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Guest.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/SignupLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Signup.vue') }
    ]
  },
  {
    path: '/system',
    component: () => import('layouts/SystemLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/System.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes