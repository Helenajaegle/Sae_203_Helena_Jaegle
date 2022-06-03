<template>
    <div class="flex m-14 justify-between">
            <p class="text-white text-7xl font-bold">David Guetta</p>
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
    </div>

    <div class="flex m-14 border-4 border-indigo-400 p-4">
            <img class="w-3/6" src="../assets/Medias/Guetta.png" alt="Photo Guetta">
        
        <div class="flex flex-col text-white text-xl m-10">
            <p class="mt-9">French touch, musique électronique dansante, house progressive, électro-pop, dance pop, hip-hop</p>
            <p class="mt-16">Sa renommée ne cesse de croitre, démontrée par ses records de ventes, sa capacité à remplir les plus grands lieux lors de ses prestations ou par son nombre d'abonnés sur les réseaux sociaux</p>
        </div>
    </div>

    <div class="flex justify-between m-14 bg-white p-2">
        <div class="flex justify-between">
            <CalendarIcon class="stroke-black w-10 m-5"></CalendarIcon>
            <p class="mt-7 text-black">Jeudi 24 juillet</p>
            <LocationMarkerIcon class="stroke-black w-10 m-5"></LocationMarkerIcon>
            <p class="mt-7 text-black">Scène principale</p>
        </div>
    </div>


</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>