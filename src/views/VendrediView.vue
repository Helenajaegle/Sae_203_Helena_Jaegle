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

  <div class="h-96 gap-x-4">
    <img class="w-full m-0" src="../../public/Medias/fond-programmation.png" alt="fond programmation">
  </div>

    <div class="text-white text-center">
      <h1 class="sm:text-2xl md:text-4xl lg:text-8xl font-raleway font-black mb-5">Le programme</h1>
        <div class="flex justify-center items-center relative motion-safe:animate-bounce m-24">
          <ChevronDoubleDownIcon class="stroke-white w-16"></ChevronDoubleDownIcon>
        </div>
    </div>

 <!--
    <div class="container mt-96">
      <div class="row">
        <div class="card bg-black text-white">
          <div class="card-header">
            <strong class="flex justify-center items-center text-2xl">Liste des dates disponibles</strong>
          </div>
          <div class="card-body table-responsive text-center">
            <table class="table text-light">
              <thead>
                <tr>
                  <td>Tous les jours</td>
                  <td>Jeudi 24 juillet</td>
                  <td>Vendredi 25 juillet</td>
                  <td>Samedi 26 juillet</td>
                </tr> 
                 <tr>
                  <div class="flex justify-center items-center ml-52">
                    <td class="text-white sm:text-1xl md:text-2xl lg:text-2xl">Tous les jours</td>
                    <td class="text-white sm:text-1xl md:text-2xl lg:text-2xl" v-for = "con in dates" :key="con">{{con}}</td>
                  </div>
                </tr> 


              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
    --> 

    <div class="flex justify-between text-white text-2xl m-60 uppercase mt-72">
       <RouterLink to="/programmation"><p class="hover:font-bold">Tous les jours</p></RouterLink>
        <RouterLink to="/jeudi"><p class="hover:font-bold">Jeudi 24 juillet</p></RouterLink>
        <RouterLink to="/vendredi"><p class="font-bold hover:font-bold bg-black p-5">Vendredi 25 juillet</p></RouterLink>
        <RouterLink to="/samedi"><p class="hover:font-bold">Samedi 26 juillet</p></RouterLink>
    </div>

    <div class="flex flex-wrap justify-between m-28">
      <router-link to="/Sinclar">
        <img src="../assets/Medias/sinclar.png" alt="Bob sinclar">
        <div class="flex justify-center items-center">
              <p class="text-white sm:text-1xl md:text-3xl lg:text-4xl font-black m-3">Bob Sinclar</p>
          </div>
          <div class="flex justify-center items-center">
              <div class="squared-full w-2/6 h-1 m-4 bg-indigo-500"></div>
          </div>
        <div class="ml-28 mr-20">
          <BoutonView/> 
        </div>
      </router-link>
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

<script>

import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import { ChevronDoubleDownIcon } from "@heroicons/vue/outline";


import { ArrowCircleDownIcon } from "@heroicons/vue/outline";
import BoutonView from "../components/Boutons/BoutonView.vue";
export default { 
   data() {
    return {
      listeConcerts:[],  
      dates:[],
      categorie: 0
    }
  },
  components: { ArrowCircleDownIcon, BoutonView, ChevronDoubleDownIcon },
  mounted(){ 
    this.getConcerts(); 
  },
  methods:{
    async getConcerts(){
      const firestore = getFirestore();
      const dbConcerts= collection(firestore, "Concert");
      const query = await onSnapshot(dbConcerts, (snapshot) =>{
        this.listeConcerts = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        console.log('listeConcerts', this.listeConcerts);
        let set = new Set();
        this.listeConcerts.forEach(function(c){
          set.add(c.dateconcert);

        }) 
        console.log('set',set);
        this.dates = Array.from(set);
      }) 
    }
  }

};

</script>