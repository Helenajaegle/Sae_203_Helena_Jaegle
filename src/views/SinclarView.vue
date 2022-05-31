<template>
    <div class="flex m-8 justify-between">
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
        <p class="text-white text-5xl font-bold">Bob Sinclar</p>
    </div>

    <div class="flex m-14">
            <img class="w-2/5" src="../assets/Medias/sinclar.png" alt="Photo Sinclar">
        <div class="flex flex-col">
            <CalendarIcon class="stroke-white w-14 m-6"></CalendarIcon>
            <LocationMarkerIcon class="stroke-white w-14 m-6"></LocationMarkerIcon>
        </div>
        
        <div class="flex flex-col text-white text-2xl">
            <p class="mt-9">Vendredi 25 juillet</p>
            <p class="mt-16">Petite scène</p>
        </div>
    </div>

    <p class="text-white m-12 text-2xl">French touch, house, dance, electro house, rap</p>
    <p class="text-white m-12 text-2xl">Originellement affilié à la French touch, et aujourd’hui sous le label Emile Record ; nouveau producteur depuis la scène house et aujourd'hui davantage assimilé à la disco house.</p>

</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>