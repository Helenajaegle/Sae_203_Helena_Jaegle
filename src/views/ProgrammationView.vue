<template>
   <div class="flex items-center m-10 text-white">
      <RouterLink to="/accueil"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
      <p>|</p>
      <RouterLink to="/programmation"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
      <p>|</p>
      <RouterLink to="/concerts"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
      <p>|</p>
      <RouterLink to="/festival"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
    </div>

  <div class="h-96">
    <img class="w-full m-0" src="../../public/Medias/fond-programmation.png" alt="fond programmation">
  </div>

    <h1 class="text-white text-9xl font-bold m-44">La programmation</h1>

  <div class="flex justify-center items-center">
    <arrow-circle-down-icon class="h-24 w-24 m-56 stroke-white "/> 
  </div>

    <div class="flex items-center justify-between ml-32 mr-32 text-3xl text-white uppercase">
        <p class="font-black">Tous les jours</p>
        <p>Jeudi 24 juillet</p>
        <p>Vendredi 25 juillet</p>
        <p>Samedi 26 juillet</p>
    </div>

    <div class="flex flex-wrap justify-between m-32">
      <router-link to="/DavidGuetta">
        <img src="../assets/Medias/Guetta.png" alt="David Guetta">
        <p class="text-white text-5xl font-black ml-44 m-3">David Guetta</p>
        <div class="squared-full w-32 h-1 ml-64 m-5 bg-purple-500"></div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
      <router-link to="/Diplo">
        <img src="../assets/Medias/Diplo.png" alt="Diplo">
        <p class="text-white text-5xl font-black ml-64 m-3">Diplo</p>
        <div class="squared-full w-32 h-1 ml-64 m-5 bg-purple-500"></div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
    </div>

    <div class="flex flex-wrap justify-between m-32">
      <router-link to="/PetitBiscuit">
        <img src="../assets/Medias/biscuit.png" alt="Petit Biscuit">
        <p class="text-white text-5xl font-black ml-48 m-3">Petit Biscuit</p>
        <div class="squared-full w-32 h-1 ml-64 m-5 bg-purple-500"></div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
      <router-link to="/Sinclar">
        <img src="../assets/Medias/sinclar.png" alt="Bob sinclar">
        <p class="text-white text-5xl font-black ml-48 m-3">Bob Sinclar</p>
        <div class="squared-full w-32 h-1 ml-64 m-5 bg-purple-500"></div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
    </div>
    <div class="flex flex-wrap justify-between m-32">
      <router-link to="/Alesso">
        <img src="../assets/Medias/Alesso.png" alt="Alesso">
        <p class="text-white text-5xl font-black ml-60 m-3">Alesso</p>
        <div class="squared-full w-32 h-1 ml-64 m-5 bg-purple-500"></div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
      <router-link to="/Skrillex">
        <img src="../assets/Medias/skrillex.png" alt="Skrillex">
        <p class="text-white text-5xl font-black ml-60 m-3">Skrillex</p>
        <div class="squared-full w-32 h-1 ml-64 m-5 bg-purple-500"></div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
    </div>

    <div class="flex items-center justify-center">
        <div class="rounded-full m-32 w-2/3 h-2 bg-white"></div>
    </div>

     <footer>
    <div class="text-white ml-10 text-2xl">
      <RouterLink to="/mentions"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
      <RouterLink to="/gds"><p>Guide de style</p></RouterLink>
    </div>

    <div class="flex float-right mr-12">
      <img src="../assets/Medias/logo_petit.png" alt="Logo petit">
    </div>

    <div class="flex float-left space-x-9 m-10">
      <img src="../assets/Medias/youtube.png" alt="Youtube">
      <img src="../assets/Medias/twitter.png" alt="Twitter">
      <img src="../assets/Medias/instagram.png" alt="Instagram">
    </div>
  </footer>
</template>

<script>
import { ArrowCircleDownIcon } from "@heroicons/vue/outline";
import BoutonView from "../components/Boutons/BoutonView.vue";
export default {
  components: { ArrowCircleDownIcon, BoutonView },
};
</script>