<template>
     <div class="flex m-14 justify-between">
            <p class="text-white text-7xl font-bold">Skrillex</p>
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
    </div>

    <div class="flex m-14 border-4 border-indigo-400 p-4">
            <img class="w-3/6" src="../assets/Medias/skrillex.png" alt="Photo Skrillex">
        
        <div class="flex flex-col text-white text-xl m-10">
            <p class="mt-9">Brostep, Dubstep, Electro, Electro house, EDM, Complextro</p>
            <p class="mt-16">Nommé pour un total de cinq Grammy Awards dans la catégorie « meilleur artiste », et en remporte dans les catégories « meilleur album dance/electronica », « meilleure chanson dance », et « meilleure chanson remixée ».</p>
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