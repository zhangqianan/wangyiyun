import { createRouter, createWebHistory } from 'vue-router'
import FoundView from 'views/found/FoundView'

const routes = [

  {
    path: '/',
    name: 'found',
    component: FoundView
  },
  {
    path: '/podcast',
    name: 'podcast',
    component: () => import('views/podcast/PodcastView')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('views/mine/MineView')
  },
  {
    path: '/focus',
    name: 'focus',
    component: () => import('views/focus/FocusView')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('views/community/CommunityView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
