import MainLayout from 'layouts/MainLayout'
import AboutUs from 'pages/AboutUs.vue'
import Index from 'pages/Index'
import SystemLayout from 'layouts/SystemLayout'
import System from 'pages/System'
import Profile from 'pages/ProfileSettings'
import PatientRec from 'pages/PatientRecords'
import PatientID from 'pages/PatientID'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Index },
      { path: '/bestbyte', component: AboutUs }
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
      { path: '/patientrecords', component: PatientRec},
      {path: '/data', component: PatientID},
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