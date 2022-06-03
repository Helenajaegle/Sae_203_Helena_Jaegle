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
                <div class="flex justify-center items-center">
                  <ChevronDoubleUpIcon class="stroke-black w-6"></ChevronDoubleUpIcon>
                </div>
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
                <div class="flex justify-center items-center">
                  <ChevronDoubleUpIcon class="stroke-black w-6"></ChevronDoubleUpIcon>
                </div>
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
                <div class="flex justify-center items-center">
                  <ChevronDoubleUpIcon class="stroke-black w-6"></ChevronDoubleUpIcon>
                </div>
            </div>
          </figcaption>
      </figure>
    </RouterLink>

  </div>

  <div class="flex items-center justify-center">
    <div class="rounded-full m-12 w-3/4 h-2 bg-white"></div>
  </div>

  <footer>
    <div class="text-white ml-10 sm:text-1xl md:text-2xl lg:text-2xl">
      <RouterLink to="/mentions"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
      <RouterLink to="/gds"><p>Guide de style</p></RouterLink>
    </div>

    <div class="flex float-right mr-12">
      <img src="../assets/Medias/logo_petit.png" alt="Logo petit">
    </div>

    <div class="flex float-left m-10 gap-x-4">
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