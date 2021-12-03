import SystemLayout from 'layouts/SystemLayout'
import System from 'pages/System'
import Profile from 'pages/ProfileSettings'
import PatientRec from 'pages/PatientRecords'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/aboutus', component: () => import('pages/AboutUs.vue') }
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
    component: SystemLayout,
    children: [
      { path: '', component: System },
      { path: '/profilesettings', component: Profile },
      { path: '/patientrecords', component: PatientRec },
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