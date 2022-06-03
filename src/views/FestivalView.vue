<template>
     <div class="flex items-center text-white m-3">
        <RouterLink to="/accueil"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/programmation"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/concerts"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/festival"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
      </div>
 
    <div class="h-96">
      <img class="w-full m-0" src="../assets/Medias/fond_festival.png" alt="fond festival">
    </div>

    <div class="text-white text-center">
      <h1 class="sm:text-2xl md:text-4xl lg:text-8xl font-raleway font-black mb-5">Le festival</h1>
        <div class="flex justify-center items-center relative motion-safe:animate-bounce m-24">
          <ChevronDoubleDownIcon class="stroke-white w-16"></ChevronDoubleDownIcon>
        </div>
    </div>


    <div class="text-white mt-96">
      <h1 class="sm:text-xl md:text-2xl lg:text-4xl font-bold text-center">L'histoire du festival</h1>

      <div class="flex mt-32">
        <img class="objet-cover w-full h-96 m-0" src="../assets/Medias/forme_orange.png" alt="Forme orange">
        <p class="sm:text-2xl md:text-2xl lg:text-3xl text-center m-48 absolute text-black">Fidèle à son esprit festif et original, Alpindays se positionne et s’illustre comme un moment d’évasion et de dépaysement au plein milieu de la montagne.</p>
      </div>

        <p class="text-2xl text-center m-40">Depuis 4 ans seulement, ce sont déjà 687 concerts revendiqué, ayant fait le plaisir de près de 213.000 festivaliers, de tous âges, tous horizons et de toutes nationalités !  </p>
        
        <div class="flex w-full justify-center items-center">
          <div class="rounded-squared w-96 h-16 bg-indigo-400"></div>
          <h1 class="text-6xl text-left -m-24 font-black">Courchvel</h1>
        </div>

        <p class="text-2xl text-center m-20">Niché au coeur de la station de ski, le festival offre une vue imprenable sur les Alpes. Isolé de la ville, vous vous couperez du reste du bon le temps d’un moment.</p>
    </div>

    <div class="flex flex-wrap justify-between m-32">
        <img src="../assets/Medias/festival_1.png" alt="Festival photo 1">
        <img src="../assets/Medias/festival_2.png" alt="Festival photo 2">
    </div>

    <div class="text-white text-center">
        <p class="text-2xl m-20">Le festival propose une ambiance décalée et moderne, où de nombreuses activités seront à la disposition des visiteurs. Grande roue, tyrolienne, structures gonflables seront à votre disposition
        (* tarifs supplémentaires s’appliquant).</p>
        <p class="text-2xl m-52">Depuis 2 ans maintenant le festival organise un défilé le dernier jour du festival. Venez admirez les nombreux chars plus impressionnants les uns que les autres ! </p>
    </div>


    <div class="relative flex w-full snap-x overflow-x-auto pb-1">
      <div class="w-full shrink-4 rounded-lg shadow-xl">
        <img class="w-6/6" src="../assets/Medias/festival_3.png" alt="image 1" />
      </div>
      <div class="w-full shrink-4 rounded-lg shadow-xl">
        <img class="w-6/6" src="../assets/Medias/festival_4.png" alt="image 2" />
      </div>
      <div class="w-full shrink-4 rounded-lg shadow-xl">
        <img class="w-6/6" src="../assets/Medias/Festival_6.png" alt="image 3" />
      </div>
    </div>

    <p class="text-white font-black text-4xl text-center m-32">Voir plus sur la musique ! </p>
    
    <div class="flex justify-center items-center m-12">
        <chevron-double-up-icon class="stroke-white w-20"></chevron-double-up-icon>
    </div>

     <div class="flex items-center justify-center">
      <div class="rounded-full m-12 w-3/4 h-2 bg-white"></div>
    </div>

     <footer>
    <RouterLink to="/accueil">
      <div class="flex justify-center items-center mb-5">
        <img src="../assets/Medias/logo_petit.png" alt="Logo petit" class="w-16">
      </div>
    </RouterLink>

    <div class="text-white ml-10 sm:text-xl md:text-xl lg:text-xl">
      <p class="text-center text-xl mb-10">Ce site est réalisé dans le cadre d'un exercice de première année ay BUT MMI de Montbéliard.</p>
      
      <div class="flex justify-center items-center text-white">
        <RouterLink to="/mentions"><p class="sm:text-xl md:text-xl lg:text-xl text-center m-5 hover:font-bold">Mentions légales</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/contact"><p class="sm:text-xl md:text-xl lg:text-xl text-center m-5 hover:font-bold">Nous contacter</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/gds"><p class="sm:text-xl md:text-xl text-center m-5 hover:font-bold">Guide de style</p></RouterLink>
       </div>
    </div>

    <div class="flex justify-center items-center m-10 gap-x-10">
      <img src="../assets/Medias/Youtube.png" alt="Youtube">
      <img src="../assets/Medias/twitter.png" alt="Twitter">
      <img src="../assets/Medias/instagram.png" alt="Instagram">
    </div>
  </footer>
</template>

<script>
import { ChevronDoubleUpIcon, ArrowCircleDownIcon, ChevronDoubleDownIcon } from "@heroicons/vue/outline";
export default {
  components: { ChevronDoubleUpIcon, ArrowCircleDownIcon, ChevronDoubleDownIcon },
};
</script>