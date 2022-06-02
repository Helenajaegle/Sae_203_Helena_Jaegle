<template>
    <div class="flex items-center text-white m-3">
        <RouterLink to="/accueil"><p class="sm:text-xl md:text-1xl lg:text-2xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
        <p class="sm:text-xl md:text-1xl lg:text-2xl">|</p>
        <RouterLink to="/programmation"><p class="sm:text-xl md:text-1xl lg:text-2xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
        <p class="sm:text-xl md:text-1xl lg:text-2xl">|</p>
        <RouterLink to="/concerts"><p class="sm:text-xl md:text-1xl lg:text-2xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
        <p class="sm:text-xl md:text-1xl lg:text-2xl">|</p>
        <RouterLink to="/festival"><p class="sm:text-xl md:text-1xl lg:text-2xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
      </div>

        <h2 class="sm:text-2xl md:text-3xl lg:text-5xl text-left font-bold ml-16 mt-20 text-white uppercase">Contact</h2>
        <div class="squared-full w-3/12 py-1 bg-purple-400 ml-16 mt-4 mb-20"></div>

        <div>

        <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white uppercase">Nom</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="first_name" id="first_name" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white uppercase">Prénom</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="last_name" id="last_name" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white uppercase">Email</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="email" id="email" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Email</textarea>
        </div>

        <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white uppercase">Téléphone</p>
        <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white italic">* facultatif</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="téléphone" id="téléphone" cols="60" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Ex : 06 00 00 00 00</textarea>
        </div>

        <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white uppercase">Requête</p>
        <div class="mb-11 mt-4 ml-16">
            <textarea name="requête" id="requête" cols="60" rows="10" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <button
            class="m-16 flex w-2/6  items-center justify-center squared-xl bg-purple-500 py-3 text-center text-2xl font-bold uppercase text-white no-underline hover:bg-purple-800 active:border-black active:bg-indigo-900 active:text-black"
        >ENVOYER
            <slot />
        </button>
    </div>

</template>

