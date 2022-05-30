import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import ConcertsView from '../views/ConcertsView.vue'
import BilleterieView from '../views/BilleterieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Accueil', name: 'AccueilView', component: AccueilView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/Festival', name: 'FesitvalView', component: FestivalView },
    { path: '/Concerts', name: 'ConcertsView', component: ConcertsView },
    { path: '/Billeterie', name: 'BilleterieView', component: BilleterieView },
  ]
})

export default router
