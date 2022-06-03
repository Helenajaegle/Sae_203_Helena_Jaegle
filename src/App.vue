<template>
    <header class="text-gray-50">
    <Header class="xl:hidden"/>
    <header-grand class="hidden xl:flex" />
  </header>

    <router-view/>
 
</template>

<script>
import AccueilView from "./views/AccueilView.vue";
import ProgrammationView from "./views/ProgrammationView.vue";
import FestivalView from "./views/FestivalView.vue";
import ConcertsView from "./views/ConcertsView.vue";
import DavidGuettaView from "./views/DavidGuettaView.vue";
import MenuView from "./components/Boutons/MenuView.vue";
</script>

<!--

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Import emetteur de main.js
import { emitter } from './main.js'

--> 