<template>
    <div class="flex items-center justify-between m-8 text-white">
      <RouterLink to="/accueil"><p>Accueil</p></RouterLink>
      <RouterLink to="/programmation"><p>Programmation</p></RouterLink>
      <RouterLink to="/infos"><p>Concerts</p></RouterLink>
      <RouterLink to="/festival"><p>Festival</p></RouterLink>
      <RouterLink to="/billeterie"><p>Billeterie</p></RouterLink>
    </div>

    <img src="../assets/Medias/fond-programmation.png" alt="fond programmation">

    <arrow-circle-down-icon class="flex items-center justify-center h-8 w-8 stroke-white "/> 

    <div class="flex items-center justify-between m-10 text-2xl text-white">
        <p>Tous les jours</p>
        <p>Jeudi 24 juillet</p>
        <p>Vendredi 25 juillet</p>
        <p>Samedi 26 juillet</p>
    </div>

    <div class="flex flex-wrap justify-between m-32">
        <img src="../assets/Medias/Guetta.png" alt="David Guetta">
        <img src="../assets/Medias/Diplo.png" alt="Diplo">
    </div>

    <div class="flex flex-wrap justify-between m-60">
        <div class="text-white">
                <p class="text-2xl">David Guetta</p>
                <div class="squared-full w-32 h-1 bg-purple-500"></div>
                <p class="text-2xl">Jeudi 24 juillet</p>
        </div>
        <div class="text-white">
                <p class="text-2xl">Diplo</p>
                <div class="squared-full w-32 h-1 bg-purple-500"></div>
                <p class="text-2xl">Jeudi 24 juillet</p>
        </div>
    </div>

    <div class="flex flex-wrap justify-between m-32">
        <img src="../assets/Medias/biscuit.png" alt="Petit Biscuit">
        <img src="../assets/Medias/sinclar.png" alt="Bob sinclar">
    </div>
    <div class="flex flex-wrap justify-between m-32">
        <img src="../assets/Medias/Alesso.png" alt="Alesso">
        <img src="../assets/Medias/skrillex.png" alt="Skrillex">
    </div>

    <div class="flex items-center justify-center">
        <div class="rounded-full m-32 w-2/3 h-2 bg-white"></div>
    </div>

     <footer>
    <div class="text-white ml-10 text-2xl">
      <p>Mentions légales</p>
      <p>Contact</p>
    </div>

    <div class="flex float-right mr-12">
      <img src="../assets/Medias/logo_petit.png" alt="Logo petit">
    </div>

    <div class="flex float-left space-x-9 m-10">
      <img src="../assets/Medias/youtube.png" alt="Youtube">
      <img src="../assets/Medias/twitter.png" alt="Twitter">
      <img src="../assets/Medias/instagram.png" alt="Instagram">
    </div>
  </footer>
</template>

<script>
import { ArrowCircleDownIcon } from "@heroicons/vue/outline";
export default {
  components: { ArrowCircleDownIcon },
};
</script>