import MainLayout from 'layouts/MainLayout'
import SystemLayout from 'layouts/SystemLayout'
import About from 'pages/Index/About'
import Index from 'pages/Index/Index'
import BestByte from 'pages/Index/BestByte'
import TermsOfService from 'pages/Index/TOS'
import PrivacyPolicy from 'pages/Index/PrivacyPolicy'
import Home from 'pages/System/Home'
import Profile from 'pages/System/ProfileSettings'
import PatientList from 'pages/System/PatientList'
import AddPatient from 'pages/System/AddPatient'
import Appointments from 'pages/System/Appointments'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', name: 'Index', component: Index },
      { path: '/about', name: 'About', component: About },
      { path: '/bestbyte', name: 'BestByte', component: BestByte },
      { path: '/terms-of-service', name: 'TOS', component: TermsOfService },
      { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/admin', name: 'Admin', component: () => import('src/pages/Index/Admin.vue') }
    ]
  },
  {
    path: '/guest',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '/guest', name: 'Guest', component: () => import('src/pages/Index/Guest.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/SignupLayout.vue'),
    children: [
      { path: '/signup', name: 'SignUp', component: () => import('src/pages/Index/Signup.vue') }
    ]
  },
  {
    path: '/',
    component: SystemLayout,
    children: [
      { path: '/home', name: 'Home', component: Home },
      { path: '/profile', name: 'Profile', component: Profile },
      { path: '/patientlist', name: 'List', component: PatientList,},
      { path: '/add', name: 'Add', component: AddPatient},
      { path: '/appointments', name: 'Appointments', component: Appointments},
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