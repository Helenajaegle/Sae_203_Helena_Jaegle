<template>
     <div class="flex m-14 justify-between">
            <p class="text-white text-7xl font-bold">Alesso</p>
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
    </div>

    <div class="flex m-14 border-4 border-indigo-400 p-4">
            <img class="w-3/6" src="../assets/Medias/Alesso.png" alt="Photo Alesso">
        
        <div class="flex flex-col text-white text-xl m-10">
            <p class="mt-9">Dance, house progressive, electro house</p>
            <p class="mt-16">Disc jockey et producteur suédois, principalement axé house progressive, Alesso se fait connaître avec des productions et remixes de titres pour Avicii, Tiësto... Grand succès qui lui permet d'avoir accès à une notoriété beaucoup plus importante et d'entrer à la 20e place du classement DJ.</p>
        </div>
    </div>

    <div class="flex justify-between m-14 bg-white p-2">
        <div class="flex justify-between">
            <CalendarIcon class="stroke-black w-10 m-5"></CalendarIcon>
            <p class="mt-7 text-black">Jeudi 24 juillet</p>
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