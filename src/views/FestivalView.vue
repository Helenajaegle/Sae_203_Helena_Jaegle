<template>
    <div class="flex items-center justify-between m-8 text-white">
      <RouterLink to="/accueil"><p>Accueil</p></RouterLink>
      <RouterLink to="/programmation"><p>Programmation</p></RouterLink>
      <RouterLink to="/concerts"><p>Concerts</p></RouterLink>
      <RouterLink to="/festival"><p>Festival</p></RouterLink>
      <RouterLink to="/billeterie"><p>Billeterie</p></RouterLink>
    </div>

    <img src="../assets/Medias/fond_festival.png" alt="fond festival">

    <arrow-circle-down-icon class="flex items-center justify-center h-8 w-8 stroke-white "/> 

    <div class="text-white text-center">
        <h1>L'histoire du festival</h1>
        <p>Fidèle à son esprit festif et original, Alpindays se positionne et s’illustre comme un moment d’évasion et de dépaysement au plein milieu de la montagne.</p>
        <p>Depuis 4 ans seulement, ce sont déjà 687 concerts revendiqué, ayant fait le plaisir de près de 213.000 festivaliers, de tous âges, tous horizons et de toutes nationalités !  </p>
        <h1>Courchvel</h1>
        <p>Niché au coeur de la station de ski, le festival offre une vue imprenable sur les Alpes. Isolé de la ville, vous vous couperez du reste du bon le temps d’un moment.</p>
    </div>

    <div class="flex flex-wrap justify-between m-10">
        <img src="../assets/Medias/festival_1.png" alt="Festival photo 1">
        <img src="../assets/Medias/festival_2.png" alt="Festival photo 2">
    </div>

    <div class="text-white text-center">
        <p>Le festival propose une ambiance décalée et moderne, où de nombreuses activités seront à la disposition des visiteurs. Grande roue, tyrolienne, structures gonflables seront à votre disposition
        (* tarifs supplémentaires s’appliquant).</p>
        <p>Depuis 2 ans maintenant le festival organise un défilé le dernier jour du festival. Venez admirez les nombreux chars plus impressionnants les uns que les autres ! </p>
    </div>

    <div class="flex flex-wrap justify-between m-20">
        <img src="../assets/Medias/festival_3.png" alt="Festival photo 3">
        <img src="../assets/Medias/festival_4.png" alt="Festival photo 4">
    </div>

    <p class="text-white font-black text-4xl text-center">Voir plus sur la musique ! </p>
    
    <div class="flex justify-center items-center m-12">
        <chevron-double-up-icon class="stroke-white w-20"></chevron-double-up-icon>
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
import { ChevronDoubleUpIcon } from "@heroicons/vue/outline";
export default {
  components: { ChevronDoubleUpIcon },
};
</script>