<template>
    <div class="flex items-center m-10 text-white">
      <RouterLink to="/accueil"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
      <p>|</p>
      <RouterLink to="/programmation"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
      <p>|</p>
      <RouterLink to="/concerts"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
      <p>|</p>
      <RouterLink to="/festival"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
    </div>

    <div class="h-96">
      <img class="w-full m-0" src="../assets/Medias/fond_festival.png" alt="fond festival">
    </div>

    <h1 class="text-white text-9xl font-bold m-44">Le festival</h1>

    <div class="flex justify-center items-center">
    <arrow-circle-down-icon class="h-24 w-24 m-96 stroke-white "/> 
  </div> 

    <div class="text-white">
      <h1 class="text-6xl font-bold text-center m-5">L'histoire du festival</h1>

      <div class="flex">
        <img class="objet-cover w-full m-0" src="../assets/Medias/forme_orange.png" alt="Forme orange">
        <p class="text-4xl text-center m-80 absolute text-black">Fidèle à son esprit festif et original, Alpindays se positionne et s’illustre comme un moment d’évasion et de dépaysement au plein milieu de la montagne.</p>
      </div>

        <p class="text-2xl text-center m-40">Depuis 4 ans seulement, ce sont déjà 687 concerts revendiqué, ayant fait le plaisir de près de 213.000 festivaliers, de tous âges, tous horizons et de toutes nationalités !  </p>
        
        <div class="flex w-full justify-center items-center">
          <div class="rounded-squared w-96 h-16 bg-indigo-400"></div>
          <h1 class="text-6xl text-left -m-24 font-black">Courchvel</h1>
        </div>

        <p class="text-2xl text-center m-20">Niché au coeur de la station de ski, le festival offre une vue imprenable sur les Alpes. Isolé de la ville, vous vous couperez du reste du bon le temps d’un moment.</p>
    </div>

    <div class="flex flex-wrap justify-between m-40">
        <img src="../assets/Medias/festival_1.png" alt="Festival photo 1">
        <img src="../assets/Medias/festival_2.png" alt="Festival photo 2">
    </div>

    <div class="text-white text-center">
        <p class="text-2xl m-20">Le festival propose une ambiance décalée et moderne, où de nombreuses activités seront à la disposition des visiteurs. Grande roue, tyrolienne, structures gonflables seront à votre disposition
        (* tarifs supplémentaires s’appliquant).</p>
        <p class="text-2xl m-52">Depuis 2 ans maintenant le festival organise un défilé le dernier jour du festival. Venez admirez les nombreux chars plus impressionnants les uns que les autres ! </p>
    </div>

    <div class="flex flex-wrap justify-between">
        <img src="../assets/Medias/festival_3.png" alt="Festival photo 3">
        <img src="../assets/Medias/festival_4.png" alt="Festival photo 4">
        <img src="../assets/Medias/festival_5.png" alt="Festival photo 5">
    </div>

    <p class="text-white font-black text-4xl text-center m-32">Voir plus sur la musique ! </p>
    
    <div class="flex justify-center items-center m-12">
        <chevron-double-up-icon class="stroke-white w-20"></chevron-double-up-icon>
    </div>

     <div class="flex items-center justify-center">
        <div class="rounded-full m-32 w-2/3 h-2 bg-white"></div>
    </div>

     <footer>
    <div class="text-white ml-10 text-2xl">
      <RouterLink to="/mentions"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
      <RouterLink to="/gds"><p>Guide de style</p></RouterLink>
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
import { ChevronDoubleUpIcon, ArrowCircleDownIcon } from "@heroicons/vue/outline";
export default {
  components: { ChevronDoubleUpIcon, ArrowCircleDownIcon },
};
</script>