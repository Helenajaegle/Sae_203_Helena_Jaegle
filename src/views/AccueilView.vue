<template>
      <div class="flex items-center text-white m-3">
        <RouterLink to="/accueil"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
        <p>|</p>
        <RouterLink to="/programmation"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
        <p>|</p>
        <RouterLink to="/concerts"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
        <p>|</p>
        <RouterLink to="/festival"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
      </div>

    <div class="h-96">
      <img class="w-full m-0" src="../assets/Medias/Fond_montagne.png" alt="Fond_montagne">
    </div>

    <div class="flex justify-center items-center mt-7">
      <img src="../assets/Medias/logo_petit.png" alt="Logo">
    </div>

    <div class="text-white text-center">
      <h1 class="text-6xl font-aclonica m-5">Alpin Days</h1>
      <h2 class="text-3xl font-raleway m-3 mb-72">24 - 25 - 26 juillet 2022  -  Courchevel </h2>
    </div>
    
  <div class="flex items-center justify-between m-10">
    <div class="flex items-center">
      <img class="w-96 hover:opacity-50" src="../assets/Medias/Festival.png" alt="Le festival">
    </div>

    <div class="flex items-center">
      <img class="w-96 hover:opacity-50 rounded-md" src="../assets/Medias/Programme.png" alt="Le programme">
    </div>

    <div class="flex items-center">
      <img class="w-96 hover:opacity-50 rounded-md" src="../assets/Medias/Billeterie.png" alt="la billeterie">
     </div>
  </div>

  <div class="text-white text-2xl flex justify-between items-center ml-40 mr-40 mt-2">
    <p>Le festival</p>
    <p>Programmation</p>
    <p>Les concerts</p>
  </div>

  <div class="flex items-center justify-center">
    <div class="rounded-full m-28 w-2/3 h-2 bg-white"></div>
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
      <img src="../assets/Medias/Youtube.png" alt="Youtube">
      <img src="../assets/Medias/twitter.png" alt="Twitter">
      <img src="../assets/Medias/instagram.png" alt="Instagram">
    </div>
  </footer>

</template>
