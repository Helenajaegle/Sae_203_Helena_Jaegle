<template>
    <div class="flex m-8 justify-between">
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
        <p class="text-white text-5xl font-bold">Diplo</p>
    </div>

    <div class="flex m-14">
            <img class="w-2/4" src="../assets/Medias/Diplo.png" alt="Photo Diplo">
        <div class="flex flex-col">
            <CalendarIcon class="stroke-white w-14 m-6"></CalendarIcon>
            <LocationMarkerIcon class="stroke-white w-14 m-6"></LocationMarkerIcon>
        </div>
        
        <div class="flex flex-col text-white text-2xl">
            <p class="mt-9">Jeudi 24 juillet</p>
            <p class="mt-16">Scène principale</p>
        </div>
    </div>

    <p class="text-white m-12 text-2xl">USA / ELECTRO DANCEHALL</p>
    <p class="text-white m-12 text-2xl">Un grand dino, aux cimes de l’électro, s’il y a un DJ qui sait transformer un live en dancefloor à ciel ouvert, c’est lui ! Le visionnaire s’attelle depuis ses débuts en clubs et ses premières prods, à populariser à coup d’hybridations électro, tout un pendant de la world music en occident. </p>

</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>