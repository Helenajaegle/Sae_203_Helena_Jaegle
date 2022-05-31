<template>
    <div class="flex items-center justify-between m-11 text-white">
      <RouterLink to="/accueil"><p class="text-2xl font-light uppercase">Accueil</p></RouterLink>
      <RouterLink to="/programmation"><p class="text-2xl font-light uppercase">Programmation</p></RouterLink>
      <RouterLink to="/concerts"><p class="text-2xl font-light uppercase">Concerts</p></RouterLink>
      <RouterLink to="/festival"><p class="text-2xl font-light uppercase">Festival</p></RouterLink>
      <RouterLink to="/billeterie"><p class="text-2xl font-light uppercase">Billeterie</p></RouterLink>
    </div>

    <img class="w-full m-0" src="../assets/Medias/fond-concert.png" alt="Fond concert">

    <h1 class="text-white text-4xl font-bold m-5 text-center">Explorez la musique</h1>

  <div class="flex justify-center items-center">
    <img class="w-150% m-0 object-cover" src="../assets/Medias/couleurs_concert.png" alt="formes couleurs">
    <p class="text-white text-2xl m-5 absolute text-center">Avec 15 concerts répartis sur 5 scènes, il y en a pour tous les goûts à Alpindays. Parmis les grandes têtes d’affiches ou les 
      petites nouveautés, chacun peut trouver son bonheur. </p> 
  </div>

    <p class="text-3xl text-white font-bold text-center m-5">Découverte...</p>
    <p class="text-orange-500 text-9xl font-bold ml-52">"</p>
    <p class="text-2xl font-light italic text-white text-center">Le festival tient à mettre en avant des tout nouveaux artistes qui débarquent dans le monde de la scène. </p>
    <p class="text-orange-500 text-9xl font-bold text-right mr-44">"</p>
    <p class="text-2xl text-white text-center m-10">C’est une programmation festive, moderne et émerveillante, que promet le festival Alpindays.</p>

  <div class="m-24">
    <div class="flex justify-between">
      <img src="../assets/Medias/Video_1.png" alt="Vidéo 1">
      <img src="../assets/Medias/Video_2.png" alt="Vidéo 2">
    </div>

    <div class="flex justify-between">
      <p class="text-white font-black uppercase text-2xl">FLASHBACK 2019 : les meilleurs moments</p>
      <p class="text-white font-black uppercase text-2xl text-right mr-16">FLASHBACK 2018 : DAVID GUETTA A ALPINDAYS</p>
    </div>
  </div>
  
  <div class="flex justify-center items-center mt-40">
    <img class=" w-2/5" src="../assets/Medias/Map.png" alt="Carte">
  </div>

  <p class="text-white text-center text-2xl m-3">C’est ici que vous nous trouverez !</p>

  
     <div class="flex items-center justify-center">
        <div class="rounded-full m-32 w-2/3 h-2 bg-white"></div>
    </div>

     <footer>
    <div class="text-white ml-10 text-2xl">
      <RouterLink to="/mentions"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
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
import { PlayIcon } from "@heroicons/vue/outline";
export default {
  components: { PlayIcon },
};
</script>