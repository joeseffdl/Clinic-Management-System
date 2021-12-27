import MainLayout from 'layouts/MainLayout'
import AboutUs from 'pages/Index/AboutUs'
import Index from 'pages/Index/Index'
import SystemLayout from 'layouts/SystemLayout'
import System from 'pages/System/System'
import Profile from 'pages/System/ProfileSettings'
import PatientDetails from 'pages/System/PatientDetails'
import PatientList from 'pages/System/PatientList'
import AddPatient from 'pages/System/AddPatient'
import EditPatient from 'pages/System/EditPatient'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', name: 'Index', component: Index },
      { path: '/bestbyte', name: 'About', component: AboutUs }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: 'Admin', component: () => import('src/pages/Index/Admin.vue') }
    ]
  },
  {
    path: '/guest',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', name: 'Guest', component: () => import('src/pages/Index/Guest.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/SignupLayout.vue'),
    children: [
      { path: '', name: 'SignUp', component: () => import('src/pages/Index/Signup.vue') }
    ]
  },
  {
    path: '/system',
    component: SystemLayout,
    children: [
      { path: '', name: 'System', component: System },
      { path: '/profile', name: 'Profile', component: Profile },
      { path: '/patientlist/', name: 'List', component: PatientList,},
      { path: '/patientlist/:name', name: 'PatientDetails', component: PatientDetails, props: true},
      { path: '/add/', name: 'Add', component: AddPatient},
      { path: '/edit', name: 'Edit', component: EditPatient},
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