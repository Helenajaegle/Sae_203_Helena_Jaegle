<template>
    <div class="flex m-8 justify-between">
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
        <p class="text-white text-5xl font-bold">David Guetta</p>
    </div>

    <div class="flex m-14">
            <img class="w-2/4" src="../assets/Medias/Guetta.png" alt="Photo Guetta">
        <div class="flex flex-col">
            <CalendarIcon class="stroke-white w-14 m-6"></CalendarIcon>
            <LocationMarkerIcon class="stroke-white w-14 m-6"></LocationMarkerIcon>
        </div>
        
        <div class="flex flex-col text-white text-2xl">
            <p class="mt-9">Jeudi 24 juillet</p>
            <p class="mt-16">Scène principale</p>
        </div>
    </div>

    <p class="text-white m-12 text-2xl">French touch, musique électronique dansante, house progressive, électro-pop, dance pop, hip-hop</p>
    <p class="text-white m-12 text-2xl">Sa renommée ne cesse de croitre, démontrée par ses records de ventes, sa capacité à remplir les plus grands lieux lors de ses prestations ou par son nombre d'abonnés sur les réseaux sociaux</p>

</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>