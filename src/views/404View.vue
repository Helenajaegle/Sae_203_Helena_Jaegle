<template>
    <div class="flex items-center m-5 text-white">
      <RouterLink to="/accueil"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
      <p>|</p>
      <RouterLink to="/programmation"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
      <p>|</p>
      <RouterLink to="/concerts"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
      <p>|</p>
      <RouterLink to="/festival"><p class="text-2xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
    </div>

    <div class="h-96 mb-5">
    <img class="w-full m-0 opacity-25" src="../assets/Medias/festival_5.png" alt="Fond concert">
  </div> 
  
    <div class="text-white text-6xl text-center z-20">
        <h1>Désolé, cette page n'existe pas.</h1>
    </div>

  <div class="flex justify-center items-center m-10">
      <form
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q + ' site:mmimontbeliard.com'"
    >
      <label class="text-white text-2xl z-20" for="q">Text à chercher :</label>
      <input class="m-5" type="text" id="q" name="q" x-model="q" />
      <button class="text-white text-2xl z-20" type="submit">Rechercher</button>
    </form>
  </div>

     <div class="flex items-center justify-center mt-60 mb-32">
        <div class="rounded-full w-2/3 h-2 bg-white"></div>
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