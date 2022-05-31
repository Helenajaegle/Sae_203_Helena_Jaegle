<template>
    <div class="flex items-center justify-between m-11 text-white">
      <RouterLink to="/accueil"><p class="text-2xl font-light uppercase">Accueil</p></RouterLink>
      <RouterLink to="/programmation"><p class="text-2xl font-light uppercase">Programmation</p></RouterLink>
      <RouterLink to="/concerts"><p class="text-2xl font-light uppercase">Concerts</p></RouterLink>
      <RouterLink to="/festival"><p class="text-2xl font-light uppercase">Festival</p></RouterLink>
    </div>

        <h2 class="text-5xl text-left font-bold ml-16 mt-20 text-white uppercase">Contact</h2>
        <div class="squared-full w-80 h-5 bg-purple-400 ml-16 mt-4 mb-20"></div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Nom</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="first_name" id="first_name" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Prénom</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="last_name" id="last_name" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Email</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="email" id="email" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Email</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Téléphone</p>
        <p class="text-1xl text-left ml-16 text-white italic">* facultatif</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="téléphone" id="téléphone" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Ex : 06 00 00 00 00</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Requête</p>
        <div class="mb-11 mt-4 ml-16">
            <textarea name="requête" id="requête" cols="80" rows="10" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <button
            class="m-16 flex w-2/6  items-center justify-center squared-xl bg-purple-500 py-3 text-center text-2xl font-bold uppercase text-white no-underline hover:bg-purple-800 active:border-black active:bg-indigo-900 active:text-black"
        >ENVOYER
            <slot />
        </button>

</template>

