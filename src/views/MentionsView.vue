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

    <h2 class="text-5xl text-left font-bold ml-16 mt-20 text-white uppercase">Mentions légales</h2>
    <div class="squared-full w-96 h-2 bg-white ml-16 mt-4 mb-20"></div>

    <div class="text-white m-16 text-2xl">
        <p class="m-5 text-3xl font-bold">Responsables éditorial & légal</p>
        <p class="m-5">Nom de la strucutre - Alpindays
            Représentée par - Héléna Jaegle 
            E-mail - Helena.jaegle@gmail.com</p>
        <p class="m-5 text-3xl font-bold">Editeur de site</p>
        <p class="m-5">IUT Belfort-Montbéliard campus de Montbéliard 
            BUT Métiers du Multimédia et de l’internet 
            19 Av. du Maréchal Juin, 90016 Belfort</p>
        <p class="m-5">Représenté par l’étudiante de première année :
            JAEGLE Héléna </p>
        <p class="m-5">Tuteur légal des étudiants - David Malsot 
            Mail: david@malsot.com</p>
        <p class="m-5 text-3xl font-bold">Hébergeur</p>
        <p class="m-5">Nom de la structure - Infomaniak & Netlify</p>
        <p class="m-5">Representée par - Boris Siegenthaler (Infomaniak) & Chris McCraw (Netlify)</p>
        <p class="m-5">Adresse Infomaniak - Rue Eugène-Marziano 25
            1227 Les Acacias
            Netlify - 2325 3rd Street, Suite 296, San Francisco, California 94107.</p>
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