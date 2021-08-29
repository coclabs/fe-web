
<template>
<v-app style="background-color: #efe5fd;">
  
<Navbarv3/>
 
<v-main>
  
      <v-row wrap class=" my-2 mx-2">
       
         <v-col  md="8" sm="6"  lg="8" class="px-8 ">
          <v-card
          max-height="250"
           color="amber lighten-1"
            class=" pa-2 rounded-xl hidden-sm-and-down"
          >
           <v-list-item three-line>
      <v-list-item-content  class="ms-8 hidden-sm-and-down ">
         <v-list-item-title class="text-h4 mb-1">
          Welcome Teacher 
        </v-list-item-title>
        <v-list-item-subtitle class="text-h6">
                 firstname: {{user.firstname}}
                 lastname: {{user.lastname}}
                 </v-list-item-subtitle>
        <div class="text-overline mb-2">
          
        </div>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="250"
        class="mx-1"
      >
       <v-img  :src="require('~/assets/Learning-animate.svg')"  ></v-img></v-list-item-avatar>
    </v-list-item>
          </v-card>
         </v-col>

         <v-col cols="12" md="4">
      
       
      <v-card
      color=" rounded-xl"
    class="mx-auto"
   style="border: 2px solid #B388FF; "
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
         
        </div>
        <v-list-item-title class="text-h5 mx-3">
          Play Ground
        </v-list-item-title>
        <v-list-item-subtitle class="mx-3">Play and learning coding python language</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="160"
      > <v-img  :src="require('~/assets/pythonclass2.svg')"  ></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions class="mx-3 mb-1">
      <v-btn
        rounded
        dark
        color="deep-purple accent-1"
         href="/playground/_assignmentid"

      >
        Play
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
        <v-col cols="12"
      class="px-8 text-left  "
    >
    <v-btn icon>
       <v-icon large color="deep-purple accent-1">
              mdi-book
            </v-icon>
    </v-btn>
              <strong>Course</strong>
            </v-col>
      <v-slide-group
      v-model="model"
      class="pa-2"
      active-class="amber lighten-1"
      show-arrows
    >
      <v-slide-item
       v-for="card in items"
          :key="card.title"
        v-slot="{ active, toggle }"
        
      >
        
        
        <v-card
    class="ma-6 rounded-xl"
     min-width="390" 
     @click="toggle"
      :color="active ? undefined : 'white'"
  >
    <v-img
    
    class="white--text deep-purple lighten-2 align-end"
      height="200px"
       :src="card.src"  
    >
      <v-card-title v-text="card.coursename"></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Course Year
    </v-card-subtitle>

     <v-card-text class="text--primary" >
      <span
      class="d-inline-block text-truncate"
      style="max-width: 150px;"
      v-text="card.coursedescription"
    >
      
    </span>

      <div></div>
    </v-card-text>

  </v-card>
        
      </v-slide-item>
    </v-slide-group>
        
            <v-col cols="12"
      class="px-8 text-left  "
    >
    <v-btn icon>
       <v-icon large color="deep-purple accent-1">
              mdi-book
            </v-icon>
    </v-btn>
              <strong>Course</strong>
            </v-col>
         
        
          <v-col
          v-for="card in items"
          :key="card.title"
          :cols="12"
          :md="4"
          :lg="4"
          class="px-8"
        >
        
          <v-card
    class="mx-auto rounded-xl"
    max-width="400"
  >
    <v-img
    
    class="white--text deep-purple lighten-2 align-end"
      height="200px"
       :src="card.src"  
    >
      <v-card-title v-text="card.coursename"></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Course Year
    </v-card-subtitle>

     <v-card-text class="text--primary" >
      <span
      class="d-inline-block text-truncate"
      style="max-width: 150px;"
      v-text="card.coursedescription"
    >
      
    </span>

      <div></div>
    </v-card-text>

  </v-card>
  
        </v-col>
           
        
      </v-row>

</v-main>
 </v-app>

</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import Navbarv3 from '../components/Navbarv3.vue';


export default {
 
  components: { Navbarv3 },
  

beforeCreate(){

var token
     token = this.$cookies.get('token');
    // If the user is not authenticated
    if (!token) {
    
        this.$router.push("authen/login")


}
}
  ,
data:() => ({

  items: [
        {
          src: require('~/assets/pythonclass.svg'),
           coursename: 'python101',
           coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
          
        },
        {
           src: require('~/assets/pythonclass2.svg'),
           coursename: 'python102',
           coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
          
        },
         {
          
         src: require('~/assets/pythonclass.svg'),
           coursename: 'python103',
           coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
        },
          {
          
         src: require('~/assets/pythonclass.svg'),
           coursename: 'python103',
           coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
        }, 
        
         
         
      ],
      me:
      [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        
      ],
       model: null,
 
}),

  computed: mapGetters({
   user:'authentication/getauthenticated',isLoggedIn:'authentication/isLoggedIn',datetime:'authentication/datetime'
 
  }),
  methods: {
...mapActions({
signIn:'authentication/signIn'
})
      
  
  }
  // this.$store
  //       .dispatch("question/validatetestcase", data)
  //       .then(resp=>(
        
  //         this.validateresultrealtest=JSON.parse(resp.data
          
          
  //         ))
  }
</script>


<style>

</style>