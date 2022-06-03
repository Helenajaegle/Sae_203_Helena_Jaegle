<template>
      <div class="flex items-center text-white m-3">
        <RouterLink to="/accueil"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/programmation"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/concerts"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/festival"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
      </div>

    <div class="flex h-60 w-screen flex-col bg-hero-bg-sec bg-cover">
      <img src="../assets/Medias/Fond_montagne.png" alt="Fond_montagne">
    </div>

    <div class="flex justify-center items-center w-full mb-5">
      <img src="../assets/Medias/logo_petit.png" alt="Logo">
    </div>

    <div class="text-white text-center">
      <h1 class="sm:text-2xl md:text-4xl lg:text-8xl font-aclonica mb-5">Alpin Days</h1>
      <h2 class="sm:text-1xl md:text-2xl lg:text-2xl font-raleway">24 - 25 - 26 juillet 2022  -  Courchevel </h2>
        <div class="flex justify-center items-center relative motion-safe:animate-bounce m-24">
          <ChevronDoubleDownIcon class="stroke-white w-16"></ChevronDoubleDownIcon>
        </div>
    </div>
    
  <div class="flex items-center justify-between m-40">
    <RouterLink to="/festival">
      <figure class="relative w-auto h-64">
        <img src="../assets/Medias/Festival.png" alt="Image du festival" class="h-64 w-96 rounded-md object-cover">
          <figcaption class="absolute bottom-0 left-0 flex h-full items-end justify-between p-10 duration-300 md:opacity-0 md:hover:opacity-100 bg-slate-100">
            <div class="flex flex-col gap-6">
              <p class="font-mulish text-3xl uppercase">Le festival</p>
            </div>
          </figcaption>
      </figure>
    </RouterLink>

  <RouterLink to="/concerts">
      <figure class="relative w-auto h-64">
        <img src="../assets/Medias/Billeterie.png" alt="Image du festival" class="h-64 w-96 rounded-md object-cover">
          <figcaption class="absolute bottom-0 left-0 flex h-full items-end justify-between p-10 duration-300 md:opacity-0 md:hover:opacity-100 bg-slate-100">
            <div class="flex flex-col gap-6">
              <p class="font-mulish text-3xl uppercase">Les concerts</p>
            </div>
          </figcaption>
      </figure>
    </RouterLink>

  <RouterLink to="/programmation">
      <figure class="relative w-auto h-64">
        <img src="../assets/Medias/Programme.png" alt="Image du festival" class="h-64 w-96 rounded-md object-cover">
          <figcaption class="absolute bottom-0 left-0 flex h-full items-end justify-between p-10 duration-300 md:opacity-0 md:hover:opacity-100 bg-slate-100">
            <div class="flex flex-col gap-6">
              <p class="font-mulish text-3xl uppercase">Le programme</p>
            </div>
          </figcaption>
      </figure>
    </RouterLink>

  </div>

  <div class="flex items-center justify-center">
    <div class="rounded-full m-12 w-3/4 h-2 bg-white"></div>
  </div>

  <footer>
    <RouterLink to="/accueil">
      <div class="flex justify-center items-center mb-5">
        <img src="../assets/Medias/logo_petit.png" alt="Logo petit" class="w-16">
      </div>
    </RouterLink>

    <div class="text-white ml-10 sm:text-xl md:text-xl lg:text-xl">
      <p class="text-center text-xl mb-10">Ce site est réalisé dans le cadre d'un exercice de première année ay BUT MMI de Montbéliard.</p>
      
      <div class="flex justify-center items-center text-white">
        <RouterLink to="/mentions"><p class="sm:text-xl md:text-xl lg:text-xl text-center m-5 hover:font-bold">Mentions légales</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/contact"><p class="sm:text-xl md:text-xl lg:text-xl text-center m-5 hover:font-bold">Nous contacter</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/gds"><p class="sm:text-xl md:text-xl text-center m-5 hover:font-bold">Guide de style</p></RouterLink>
       </div>
    </div>

    <div class="flex justify-center items-center m-10 gap-x-10">
      <img src="../assets/Medias/Youtube.png" alt="Youtube">
      <img src="../assets/Medias/twitter.png" alt="Twitter">
      <img src="../assets/Medias/instagram.png" alt="Instagram">
    </div>
  </footer>

</template>

<script>
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from "@heroicons/vue/outline";
export default {
  components: { ChevronDoubleUpIcon, ChevronDoubleDownIcon },
};
</script>