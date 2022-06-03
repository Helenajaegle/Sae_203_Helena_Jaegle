<template>
     <div class="flex m-14 justify-between">
            <p class="text-white text-7xl font-bold">Bob Sinclar</p>
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
    </div>

    <div class="flex m-14 border-4 border-indigo-400 p-4">
            <img class="w-3/6" src="../assets/Medias/sinclar.png" alt="Photo Sinclar">
        
        <div class="flex flex-col text-white text-xl m-10">
            <p class="mt-9">French touch, house, dance, electro house, rap</p>
            <p class="mt-16">Originellement affilié à la French touch, et aujourd’hui sous le label Emile Record ; nouveau producteur depuis la scène house et aujourd'hui davantage assimilé à la disco house.</p>
        </div>
    </div>

    <div class="flex justify-between m-14 bg-white p-2">
        <div class="flex justify-between">
            <CalendarIcon class="stroke-black w-10 m-5"></CalendarIcon>
            <p class="mt-7 text-black">Vendredi 25 juillet</p>
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