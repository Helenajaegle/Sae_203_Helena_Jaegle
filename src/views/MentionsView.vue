<template>
  <div class="flex bg-gradient from-white to-black">
     <div class="flex items-center text-white m-3">
        <RouterLink to="/accueil"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/programmation"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/concerts"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/festival"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
      </div>
    </div>

    <h2 class="text-4xl text-left font-bold ml-16 mt-20 text-white uppercase">Mentions légales</h2>
    <div class="squared-full w-82 h-1 bg-white ml-16 mt-4 mb-20"></div>

    <div class="text-white m-16 sm:text-xl md:text-xl lg:text-xl">
        <p class="m-5 text-2xl font-bold">Responsables éditorial & légal</p>
        <p class="m-5">Nom de la strucutre - Alpindays
            Représentée par - Héléna Jaegle 
            E-mail - Helena.jaegle@gmail.com</p>
        <p class="m-5 text-2xl font-bold">Editeur de site</p>
        <p class="m-5">IUT Belfort-Montbéliard campus de Montbéliard 
            BUT Métiers du Multimédia et de l’internet 
            19 Av. du Maréchal Juin, 90016 Belfort</p>
        <p class="m-5">Représenté par l’étudiante de première année :
            JAEGLE Héléna </p>
        <p class="m-5">Tuteur légal des étudiants - David Malsot 
            Mail: david@malsot.com</p>
        <p class="m-5 text-2xl font-bold">Hébergeur</p>
        <p class="m-5">Nom de la structure - Infomaniak & Netlify</p>
        <p class="m-5">Representée par - Boris Siegenthaler (Infomaniak) & Chris McCraw (Netlify)</p>
        <p class="m-5">Adresse Infomaniak - Rue Eugène-Marziano 25
            1227 Les Acacias
            Netlify - 2325 3rd Street, Suite 296, San Francisco, California 94107.</p>
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