import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import RecruiterHome from '../views/RecruiterHome.vue'
import CreateJob from '../views/CreateJob.vue'
import EditJob from '../views/EditJob.vue'
import CandidateHome from '../views/CandidateHome.vue'
import CandidateApply from '../views/CandidateApply.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/recruiterhome',
    component: RecruiterHome
  },
  {
    path: '/recruiter/create',
    component: CreateJob
  },
  {
    path: '/recruiter/edit',
    component: EditJob
  },
  {
    path: '/candidatehome',
    component: CandidateHome
  },
  {
    path: '/candidate/apply',
    component: CandidateApply
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
