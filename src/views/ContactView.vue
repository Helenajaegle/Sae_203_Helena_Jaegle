<template>
     <div class="flex items-center text-white m-3">
        <RouterLink to="/accueil"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Accueil</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/programmation"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Programmation</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/concerts"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Concerts</p></RouterLink>
        <p class="sm:text-xl md:text-xl lg:text-xl">|</p>
        <RouterLink to="/festival"><p class="sm:text-xl md:text-xl lg:text-xl uppercase text-center m-5 hover:font-bold">Festival</p></RouterLink>
      </div>

        <h2 class="sm:text-xl md:text-2xl lg:text-2xl font-bold mt-20 text-white text-center">Pour toutes questions n’hésitez pas à nous contacter en remplisant ce formulaire.</h2>
        
        <div class="flex justify-center items-center">
            <div class="squared-full w-5/12 py-1 bg-indigo-400 mt-4 mb-20"></div>
        </div>

        <div class="flex justify-center items-center">
            <div class="ml-16 mb-11 mt-4">
                <textarea name="first_name" id="first_name" cols="60" rows="2" class="text-1xl text-gray-extended-300 bg-black border-2 font-light border-white text-gray-400">NOM</textarea>
            </div>

            <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white uppercase"></p>
            <div class="ml-16 mb-11 mt-4">
                <textarea name="last_name" id="last_name" cols="60" rows="2" class="text-1xl text-gray-extended-300 bg-black border-2 font-light border-white text-gray-400">PRENOM</textarea>
            </div>
        </div>

        <div class="flex justify-center items-center">
            <div class="ml-16 mb-11 mt-4">
                <textarea name="first_name" id="first_name" cols="60" rows="2" class="text-1xl text-gray-extended-300 bg-black border-2 font-light border-white text-gray-400">EMAIL</textarea>
            </div>

            <p class="sm:text-1xl md:text-2xl lg:text-2xl text-left ml-16 text-white uppercase"></p>
            <div class="ml-16 mb-11 mt-4">
                <textarea name="last_name" id="last_name" cols="60" rows="2" class="text-1xl text-gray-extended-300 bg-black border-2 font-light border-white text-gray-400">TELEPHONE</textarea>
            </div>
        </div>

        <div class="flex">
            <div class="mb-11 mt-4 ml-80">
                <textarea name="requête" id="requête" cols="60" rows="10" class="text-1xl text-gray-extended-300 bg-black border-2 font-light border-white text-gray-400 uppercase">Requête</textarea>
            </div>
        </div>

        <div class="flex justify-center items-center">
            <button
                class="m-16 flex w-2/6  items-center justify-center squared-xl bg-purple-500 py-3 text-center text-2xl font-bold uppercase text-white no-underline hover:bg-purple-800 active:border-black active:bg-indigo-900 active:text-black"
            >ENVOYER
                <slot />
            </button>
        </div>


</template>

