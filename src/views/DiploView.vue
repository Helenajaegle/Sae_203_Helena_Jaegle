<template>
     <div class="flex m-14 justify-between">
            <p class="text-white text-7xl font-bold">Diplo</p>
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
    </div>

    <div class="flex m-14 border-4 border-indigo-400 p-4">
            <img class="w-3/6" src="../assets/Medias/Diplo.png" alt="Photo Diplo">
        
        <div class="flex flex-col text-white text-xl m-10">
            <p class="mt-9">USA / ELECTRO DANCEHALL</p>
            <p class="mt-16">Un grand dino, aux cimes de l’électro, s’il y a un DJ qui sait transformer un live en dancefloor à ciel ouvert, c’est lui ! Le visionnaire s’attelle depuis ses débuts en clubs et ses premières prods, à populariser à coup d’hybridations électro, tout un pendant de la world music en occident.</p>
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