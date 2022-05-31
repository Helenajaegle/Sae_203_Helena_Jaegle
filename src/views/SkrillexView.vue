<template>
    <div class="flex m-8 justify-between">
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
        <p class="text-white text-5xl font-bold">Skrillex</p>
    </div>

    <div class="flex m-14">
            <img class="w-2/4" src="../assets/Medias/skrillex.png" alt="Photo Skrillex">
        <div class="flex flex-col">
            <CalendarIcon class="stroke-white w-14 m-6"></CalendarIcon>
            <LocationMarkerIcon class="stroke-white w-14 m-6"></LocationMarkerIcon>
        </div>
        
        <div class="flex flex-col text-white text-2xl">
            <p class="mt-9">Samedi 26 juillet</p>
            <p class="mt-16">Grande scène</p>
        </div>
    </div>

    <p class="text-white m-12 text-2xl">Brostep, Dubstep, Electro, Electro house, EDM, Complextro</p>
    <p class="text-white m-12 text-2xl">Nommé pour un total de cinq Grammy Awards dans la catégorie « meilleur artiste », et en remporte dans les catégories « meilleur album dance/electronica », « meilleure chanson dance », et « meilleure chanson remixée ».</p>

</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>