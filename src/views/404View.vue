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

    <div class="h-44 mb-5">
    <img class="w-full m-0 opacity-25" src="../assets/Medias/festival_1.png" alt="Fond concert">
  </div> 
  
    <div class="text-white text-6xl text-center">
        <h1>Désolé, cette page n'existe pas.</h1>
    </div>

        <div class="flex justify-center items-center relative motion-safe:animate-bounce m-16">
          <ChevronDoubleDownIcon class="stroke-white w-16"></ChevronDoubleDownIcon>
        </div>

  <div class="flex justify-center items-center">
      <form
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q + ' site:mmimontbeliard.com'"
    >
      <input class="m-5" type="text" id="q" name="q" x-model="q"/>
      <button class="text-white text-2xl z-20 click" type="submit">Recherchez</button>
    </form>
  </div>

</template>

<script>
import { ChevronDoubleDownIcon } from "@heroicons/vue/outline";
export default {
  components: { ChevronDoubleDownIcon },
};
</script>