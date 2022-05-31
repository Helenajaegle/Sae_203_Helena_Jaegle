<template>
    <div class="flex m-8 justify-between">
        <router-link to="/programmation">
            <XIcon class="stroke-white w-14"></XIcon>
        </router-link>
        <p class="text-white text-5xl font-bold">Alesso</p>
    </div>

    <div class="flex m-14">
            <img class="w-2/4" src="../assets/Medias/Alesso.png" alt="Photo Alesso">
        <div class="flex flex-col">
            <CalendarIcon class="stroke-white w-14 m-6"></CalendarIcon>
            <LocationMarkerIcon class="stroke-white w-14 m-6"></LocationMarkerIcon>
        </div>
        
        <div class="flex flex-col text-white text-2xl">
            <p class="mt-9">Jeudi 24 juillet</p>
            <p class="mt-16">Petite scène</p>
        </div>
    </div>

    <p class="text-white m-12 text-2xl">Dance, house progressive, electro house</p>
    <p class="text-white m-12 text-2xl">Disc jockey et producteur suédois, principalement axé house progressive, Alesso se fait connaître avec des productions et remixes de titres pour Avicii, Tiësto... Grand succès qui lui permet d'avoir accès à une notoriété beaucoup plus importante et d'entrer à la 20e place du classement DJ.</p>

</template>

<script>
import { XIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  components: { XIcon, CalendarIcon, LocationMarkerIcon },
};
</script>