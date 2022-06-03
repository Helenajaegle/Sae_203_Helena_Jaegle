<template>
     <div class="flex m-14 justify-between">
            <p class="text-white text-7xl font-bold">Petit Biscuit</p>
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
    </div>

    <div class="flex m-14 border-4 border-indigo-400 p-4">
            <img class="w-3/6" src="../assets/Medias/biscuit.png" alt="Photo Biscuit">
        
        <div class="flex flex-col text-white text-xl m-10">
            <p class="mt-9">Musique électronique, deep house, indie dance, ambient, downtempo</p>
            <p class="mt-16">Petit Biscuit produit des musiques électroniques au son épuré. Il décrit ses réalisations comme « un appel au voyage, à des choses profondes de l’humain, naturelles, sensuelles »</p>
        </div>
    </div>

    <div class="flex justify-between m-14 bg-white p-2">
        <div class="flex justify-between">
            <CalendarIcon class="stroke-black w-10 m-5"></CalendarIcon>
            <p class="mt-7 text-black">Samedi 26 juillet</p>
            <LocationMarkerIcon class="stroke-black w-10 m-5"></LocationMarkerIcon>
            <p class="mt-7 text-black">Petite scène</p>
        </div>
    </div>
</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>