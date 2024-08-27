import WeatherView from '@/components/views/WeatherView.vue'
import { createRouter,createWebHistory } from 'vue-router'

const routes = [  
  {path:'/',name:'WeatherPage',component:WeatherView}
]

const router = new createRouter({
history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
