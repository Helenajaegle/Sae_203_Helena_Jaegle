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

    
     <div class="flex items-center justify-center">
        <div class="rounded-full w-full h-2 bg-white"></div>
    </div>

  <div class="flex h-60 w-screen flex-col bg-hero-bg-sec bg-cover">
    <img src="../assets/Medias/Fond_montagne.png" alt="Fond Montagne">
  </div>
  
    <div class="text-white text-6xl text-center m-5">
        <h1>Désolé, cette page n'existe pas.</h1>
    </div>

        <div class="flex justify-center items-center relative motion-safe:animate-bounce m-10">
          <ChevronDoubleDownIcon class="stroke-white w-12"></ChevronDoubleDownIcon>
        </div>

  <div class="flex justify-center items-center">
      <form
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q + ' site:mmimontbeliard.com'"
    >
      <input class="m-5 rounded-xl p-2" type="text" id="q" name="q" x-model="q"/>
      <button class="text-white text-xl z-20 click border-2 border-white p-2 rounded-xl hover:bg-black" type="submit">Recherchez</button>
    </form>
  </div>

</template>

<script>
import { ChevronDoubleDownIcon } from "@heroicons/vue/outline";
export default {
  components: { ChevronDoubleDownIcon },
};
</script>