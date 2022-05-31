<template>
    <div class="flex items-center justify-between m-11 text-white">
      <RouterLink to="/accueil"><p class="text-2xl font-light uppercase">Accueil</p></RouterLink>
      <RouterLink to="/programmation"><p class="text-2xl font-light uppercase">Programmation</p></RouterLink>
      <RouterLink to="/concerts"><p class="text-2xl font-light uppercase">Concerts</p></RouterLink>
      <RouterLink to="/festival"><p class="text-2xl font-light uppercase">Festival</p></RouterLink>
      <RouterLink to="/billeterie"><p class="text-2xl font-light uppercase">Billeterie</p></RouterLink>
    </div>

    <div class="bg-[url('/assets/Medias/fond-billeterie.png')] w-screen h-screen bg-contain bg-no-repeat">
        <p class=" text-2xl text-center ">Billeterie</p>
    </div>

    <div class="flex justify-center items-center m-5">
        <div class="squared-full w-80 h-2 bg-white"></div>
    </div>

    <div class="flex justify-center items-center m-5">
        <p class="text-white text-2xl">24 - 25 - 26 juillet 2022  -  Courchevel </p>
    </div>

</template>