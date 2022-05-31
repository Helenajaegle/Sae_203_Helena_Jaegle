<template>
    <div class="flex m-8 justify-between">
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
        <p class="text-white text-5xl font-bold">Petit Biscuit</p>
    </div>

    <div class="flex m-14">
            <img class="w-2/5" src="../assets/Medias/biscuit.png" alt="Photo Petit Biscuit">
        <div class="flex flex-col">
            <CalendarIcon class="stroke-white w-14 m-6"></CalendarIcon>
            <LocationMarkerIcon class="stroke-white w-14 m-6"></LocationMarkerIcon>
        </div>
        
        <div class="flex flex-col text-white text-2xl">
            <p class="mt-9">Samedi 26 juillet</p>
            <p class="mt-16">Petite scène</p>
        </div>
    </div>

    <p class="text-white m-12 text-2xl">Musique électronique, deep house, indie dance, ambient, downtempo</p>
    <p class="text-white m-12 text-2xl">Petit Biscuit produit des musiques électroniques au son épuré. Il décrit ses réalisations comme « un appel au voyage, à des choses profondes de l’humain, naturelles, sensuelles »</p>

</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>