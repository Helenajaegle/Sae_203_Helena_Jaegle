<template>
    <footer>
     <div class="flex items-center justify-center">
        <div class="rounded-full m-32 w-2/3 h-2 bg-white"></div>
    </div>

    <div class="text-white ml-10 text-2xl">
      <RouterLink to="/mentions"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
    </div>

    <div class="flex float-right mr-12">
      <img src="../assets/Medias/logo_petit.png" alt="Logo petit">
    </div>

    <div class="flex float-left space-x-9 m-10">
        <YoutubeIcon class="h-24 w-24 m-96 stroke-white "/>
        <InstagramIcon class="h-24 w-24 m-96 stroke-white "/>
        <TwitterIcon class="h-24 w-24 m-96 stroke-white "/>
    </div>
  </footer>
</template>

