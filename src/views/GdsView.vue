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

  <div class="bg-white p-2"></div>

  <div class="text-white">
    <div class="flex flex-col items-center justify-center px-8 py-10 text-center">
      <h1 class="font-press-start-2p text-3xl text-white uppercase">Guide de style</h1>
      <ArquestPremium />
    </div>
    <!-- Couleurs -->
    <h1 class="bg-blue-900 p-2 text-center text-2xl text-white">Couleurs</h1>
    <div class="m-2 flex flex-row items-center justify-center py-6 sm:flex-col">
      <div class="flex flex-col justify-center gap-5 p-3 sm:flex-row">
        <span class="h-10 w-20 bg-white"></span>
        <span class="h-10 w-20 bg-purple-500"></span>
        <span class="h-10 w-20 bg-orange-500"></span>
        <span class="h-10 w-20 bg-indigo-400"></span>
      </div>
    </div>
    <!-- Typographie -->
    <h1 class="bg-blue-900 p-2 text-center text-2xl text-white">Typographie</h1>
    <div class="m-2 flex flex-col items-center gap-5 py-6 text-center text-white">
      <h1 class="text-4xl font-aclonica font-bold">Alpin Days</h1>
      <h2 class="text-2xl font-raleway">Programmation</h2>
      <h3 class="text-xl font-roboto">Contenu</h3>
    </div>
    <!-- Icônes -->
    <h1 class="bg-blue-900 p-2 text-center text-2xl text-white">Icônes</h1>
    <div class="flex justify-center gap-10 fill-white">
      <div>
        <div class="flex justify-center gap-2 p-2">
        <div class="flex justify-center gap-2 p-2">
          <YoutubeIcon class="h-9 w-9" />
          <InstagramIcon class="h-9 w-9" />
          <TwitterIcon class="h-9 w-9" />
          <ChevronDoubleUpIcon class="h-9 w-9" />
          <ArrowCircleDownIcon class="h-9 w-9" />
          <XIcon class="h-9 w-9" />
          <CalendarIcon class="h-9 w-9" />
          <LocationMarkerIcon class="h-9 w-9" />
        </div>
      </div>
    </div>
</div>
    <!-- Composants -->
      <h1 class="bg-blue-900 p-2 text-center text-2xl text-white">Composants</h1>
          <div class="flex justify-center items-center m-10">
            <Bouton></Bouton>
          </div>
      </div>
      

</template>

<script>
import {
  ArrowCircleDownIcon,
  ChevronDoubleUpIcon, 
  XIcon,
  CalendarIcon,
  LocationMarkerIcon,
  MenuAlt1Icon,
} from "@heroicons/vue/outline";

import InstagramIcon from "../components/icons/InstagramIcon.vue";
import TwitterIcon from "../components/icons/TwitterIcon.vue";
import YoutubeIcon from "../components/icons/YoutubeIcon.vue";


import Bouton from "../components/Boutons/BoutonView.vue";
import Menu from "../components/Boutons/MenuView.vue"

import FooterView from "../components/Layout/FooterView.vue";


export default {
  name: "GuideStyle",
  components: {
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    ChevronDoubleUpIcon, 
    Bouton, 
    FooterView,
    ArrowCircleDownIcon,
    XIcon,
    CalendarIcon,
    LocationMarkerIcon,
    MenuAlt1Icon,
},
};
</script>

<style></style>
