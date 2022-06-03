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

  <div class="h-96 gap-x-4">
    <img class="w-full m-0" src="../../public/Medias/fond-programmation.png" alt="fond programmation">
  </div>

    <h1 class="sm:text-4xl md:text-6xl lg:text-8xl text-white font-bold m-32">La programmation</h1>

  <div class="flex justify-center items-center">
    <arrow-circle-down-icon class="h-24 w-24 m-56 stroke-white "/> 
  </div>

    <div class="container">
      <div class="row">
        <div class="card bg-black text-white">
          <div class="card-header">
            <strong class="flex justify-center items-center text-2xl m-10">Liste des dates disponibles</strong>
          </div>
          <div class="card-body table-responsive">
            <table class="table text-light">
              <thead>
                <!--
                <tr>
                  <td>Tous les jours</td>
                  <td>Jeudi 24 juillet</td>
                  <td>Vendredi 25 juillet</td>
                  <td>Samedi 26 juillet</td>
                </tr> 
                -->  <tr>
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

    <div class="flex flex-wrap justify-between m-32">
      <router-link to="/DavidGuetta">
        <img src="../assets/Medias/Guetta.png" alt="David Guetta">
          <div class="flex justify-center items-center">
              <p class="text-white sm:text-1xl md:text-3xl lg:text-5xl font-black m-3">David Guetta</p>
          </div>
          <div class="flex justify-center items-center">
              <div class="squared-full w-3/6 py-1 m-4 bg-purple-500"></div>
          </div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
      <router-link to="/Diplo">
        <img src="../assets/Medias/Diplo.png" alt="Diplo">
        <div class="flex justify-center items-center">
              <p class="text-white sm:text-1xl md:text-3xl lg:text-5xl font-black m-3">Diplo</p>
          </div>
          <div class="flex justify-center items-center">
              <div class="squared-full w-3/6 py-1 m-4 bg-purple-500"></div>
          </div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
    </div>

    <div class="flex flex-wrap justify-between m-32">
      <router-link to="/PetitBiscuit">
        <img src="../assets/Medias/biscuit.png" alt="Petit Biscuit">
        <div class="flex justify-center items-center">
              <p class="text-white sm:text-1xl md:text-3xl lg:text-5xl font-black m-3">Petit Biscuit</p>
          </div>
          <div class="flex justify-center items-center">
              <div class="squared-full w-3/6 py-1 m-4 bg-purple-500"></div>
          </div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
      <router-link to="/Sinclar">
        <img src="../assets/Medias/sinclar.png" alt="Bob sinclar">
        <div class="flex justify-center items-center">
              <p class="text-white sm:text-1xl md:text-3xl lg:text-5xl font-black m-3">Bob Sinclar</p>
          </div>
          <div class="flex justify-center items-center">
              <div class="squared-full w-3/6 py-1 m-4 bg-purple-500"></div>
          </div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
    </div>
    <div class="flex flex-wrap justify-between m-32">
      <router-link to="/Alesso">
        <img src="../assets/Medias/Alesso.png" alt="Alesso">
        <div class="flex justify-center items-center">
              <p class="text-white sm:text-1xl md:text-3xl lg:text-5xl font-black m-3">Alesso</p>
          </div>
          <div class="flex justify-center items-center">
              <div class="squared-full w-3/6 py-1 m-4 bg-purple-500"></div>
          </div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
      <router-link to="/Skrillex">
        <img src="../assets/Medias/skrillex.png" alt="Skrillex">
        <div class="flex justify-center items-center">
              <p class="text-white sm:text-1xl md:text-3xl lg:text-5xl font-black m-3">Skrillex</p>
          </div>
          <div class="flex justify-center items-center">
              <div class="squared-full w-3/6 py-1 m-4 bg-purple-500"></div>
          </div>
        <div class="ml-16">
          <BoutonView/> 
        </div>
      </router-link>
    </div>

    <div class="flex items-center justify-center">
        <div class="rounded-full m-32 w-2/3 h-2 bg-white"></div>
    </div>

     <footer>
    <div class="text-white ml-10 sm:text-1xl md:text-2xl lg:text-2xl">
      <RouterLink to="/mentions"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
      <RouterLink to="/gds"><p>Guide de style</p></RouterLink>
    </div>

    <div class="flex float-right mr-12">
      <img src="../assets/Medias/logo_petit.png" alt="Logo petit">
    </div>

    <div class="flex float-left m-10 gap-x-4">
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



import { ArrowCircleDownIcon } from "@heroicons/vue/outline";
import BoutonView from "../components/Boutons/BoutonView.vue";
export default {
   data() {
    return {
      listeConcerts:[],  
      dates:[]
    }
  },
  components: { ArrowCircleDownIcon, BoutonView },
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