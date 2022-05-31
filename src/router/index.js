import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import ConcertsView from '../views/ConcertsView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsView from '../views/MentionsView.vue'
import GdsView from '../views/GdsView.vue'
import DavidGuettaView from '../views/DavidGuettaView.vue'
import DiploView from '../views/DiploView.vue'
import PetitBiscuitView from '../views/PetitBiscuitView.vue'
import SinclarView from '../views/SinclarView.vue'
import AlessoView from '../views/AlessoView.vue'
import SkrillexView from '../views/SkrillexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Accueil', name: 'AccueilView', component: AccueilView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/Festival', name: 'FesitvalView', component: FestivalView },
    { path: '/Concerts', name: 'ConcertsView', component: ConcertsView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/Mentions', name: 'MentionsView', component: MentionsView },
    { path: '/Gds', name: 'GdsView', component: GdsView },
    { path: '/DavidGuetta', name: 'DavidGuetta', component: DavidGuettaView },
    { path: '/Diplo', name: 'DiploView', component: DiploView },
    { path: '/PetitBiscuit', name: 'PetitBiscuitView', component: PetitBiscuitView },
    { path: '/Sinclar', name: 'SinclarView', component: SinclarView },
    { path: '/Alesso', name: 'AlessoView', component: AlessoView },
    { path: '/Skrillex', name: 'SkrillexView', component: SkrillexView },

  ]
})

export default router
