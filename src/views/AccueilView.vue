<template>
    <div class="flex items-center justify-between m-11 text-white">
      <RouterLink to="/accueil"><p class="text-2xl font-light uppercase">Accueil</p></RouterLink>
      <RouterLink to="/programmation"><p class="text-2xl font-light uppercase">Programmation</p></RouterLink>
      <RouterLink to="/concerts"><p class="text-2xl font-light uppercase">Concerts</p></RouterLink>
      <RouterLink to="/festival"><p class="text-2xl font-light uppercase">Festival</p></RouterLink>
    </div>

    <img class="w-full m-0" src="../assets/Medias/fond_montagne.png" alt="Fond_montagne">
    
  <div class="flex items-center justify-between m-8">
    <div class="flex items-center">
      <img src="../assets/Medias/Festival.png" alt="Le festival">
      <div class="squared-full w-40 h-32 bg-transparent border-2 border-white text-white font-semibold text-center p-10">Le festival </div>
    </div>

    <div class="flex items-center">
      <img src="../assets/Medias/Programme.png" alt="Le programme">
      <div class="squared-full w-40 h-32 bg-transparent border-2 border-white text-white font-semibold text-center p-10">Programme</div>
    </div>

    <div class="flex items-center">
      <img src="../assets/Medias/Billeterie.png" alt="la billeterie">
      <div class="squared-full w-40 h-32 bg-transparent border-2 border-white text-white font-semibold text-center p-10">Billeterie</div>
    </div>
  </div>

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
