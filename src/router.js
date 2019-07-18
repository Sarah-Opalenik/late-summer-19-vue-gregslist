import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Cars from './views/Cars.vue'
// @ts-ignore
import Houses from './views/Houses.vue'
// @ts-ignore
import Jobs from './views/Jobs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
    {
      path: '/cars/:carId',
      name: 'car',
      component: function () {
        return import(/* webpackChunkName: "car" */ './views/Car.vue')
      }
    },
    {
      path: '/houses',
      name: 'houses',
      component: Houses
    },
    {
      path: '/houses/:houseId',
      name: 'house',
      component: function () {
        return import(/* webpackChunkName: "car" */ './views/House.vue')
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:jobId',
      name: 'job',
      component: function () {
        return import('./views/Job.vue')
      }
    },
    {
      path: '*',
      redirect: '/cars'
    }
  ]
})
