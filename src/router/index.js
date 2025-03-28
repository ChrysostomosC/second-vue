import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import DiceView from '@/views/DiceView.vue'
import FAQView from '@/views/FAQView.vue'
import CalcView from '@/views/CalcView.vue'
import ClockView from '@/views/ClockView.vue'
import CountersView from '@/views/CountersView.vue'

//dice
//faq
//calc
//clock
//counters

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/dice',
    name: 'dice',
    component: DiceView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView
  },
  {
    path: '/calc',
    name: 'calc',
    component: CalcView
  },
  {
    path: '/clock',
    name: 'clock',
    component: ClockView
  },
  {
    path: '/counters',
    name: 'counters',
    component: CountersView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
