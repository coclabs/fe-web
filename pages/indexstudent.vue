
<template>
<v-app style="background-color: #efe5fd;">
  
<Navbarv2/>

<v-main>
  
      <v-row wrap class=" my-2 mx-2">
       
         <v-col  md="8" sm="6"  lg="8" class="px-16 ">
          <v-card
          max-height="250"
         
           color="amber lighten-1"
            class=" pa-2 rounded-xl hidden-sm-and-down"
          >
           <v-list-item three-line>
      <v-list-item-content  class="ms-8 hidden-sm-and-down ">
         <v-list-item-title class=" text-h4 text-center">
          Welcome Student <br>
          {{user.username}}
        </v-list-item-title>
        <v-list-item-subtitle class="text-h6 text-center">
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
       <v-img  :src="require('~/assets/Learningkidanimate.svg')"  ></v-img></v-list-item-avatar>
    </v-list-item>
          </v-card>
         </v-col>

         <v-col cols="12" md="4"  >
      
       
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
        <v-col md="4" class="px-8">
     <v-icon large color="#B388FF">
              mdi-book
            </v-icon>
         <strong>Course</strong>
      </v-col>
      <v-col
      class="text-right px-8"
        md="4"
        offset-md="4"
       
      >
        <div  >
          <v-btn text   href="/course/classroomstudent">
          <v-icon
          dark
          left
         
        >
          mdi-arrow-right
        </v-icon>view all</v-btn></div>
      </v-col>
           
      <v-slide-group
      v-model="model"
      class="pa-2"
     
      show-arrows
    >
      <v-slide-item
       v-for="card in items"
          :key="card.title"
        
        
      >
        
        
        <v-card
    class="ma-6 rounded-lg"
     min-width="400" 
  >
    <v-img
    
    class="white--text deep-purple lighten-3 align-end"
      height="200px"
       :src="card.src"  
    >
      <v-col class="text-right mb-16 pb-8 pr-0">
    <v-menu
            bottom
            offset-x
          >
          <template v-slot:activator="{ on, attrs }" >
   <v-btn 
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
              <v-icon >mdi-dots-vertical</v-icon>
            </v-btn>
            </template>
             <v-list>
              <v-list-item
                v-for="(item, i) in create"
                :key="i"
              >
                <v-list-item-title><v-icon >mdi-delete</v-icon>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
    </v-menu>
     </v-col>
      <nuxt-link to="" class="text-decoration-none white--text"  >
     <v-card-title v-text="card.coursename"></v-card-title>
    </nuxt-link>
    </v-img>

    <v-card-subtitle class="pb-0">
     
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
    
          <v-col md="4" class="px-8">
     <v-icon large color="#B388FF">
              mdi-content-paste
            </v-icon>
         <strong>Assignment</strong>
      </v-col>
            
    <v-col
          v-for="(item, i) in me2"
          :key="i"
         cols="12"
        >
  <div class="text--primary px-16  ">
    <!-- Using the elevation prop -->
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          class="mx-auto rounded-lg "
        >
        <v-list
      subheader
      two-line
    >
    <v-list-item>
         <v-list-item-avatar>
          <v-icon
            class="amber"
            dark
          >
            mdi-folder
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.assignmentname"></v-list-item-title>

          <v-list-item-subtitle v-text="item.coursename"></v-list-item-subtitle>
        </v-list-item-content>
       
    </v-list-item>
        </v-list>
        </v-card>
      </template>
    </v-hover>

   
  </div>
    </v-col>
      </v-row>

</v-main>
 </v-app>

</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import Navbarv2 from '../components/Navbarv2.vue';


export default {
  components: { Navbarv2 },


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
      
      me2: [
        {
          
         assignmentname: 'Homework 1',
          coursename:'python101' ,
        },
        {
          
          assignmentname: 'Homework 2',
         coursename:'python102',
        },
         {
          
          assignmentname: 'Homework 3',
         coursename:'python103',
        },
         {
          
          assignmentname: 'Homework 4',
         coursename:'python104',
        },
      ],
      create: [
        { title: 'Delete' },
        
      ],
       model: null,
      active: false,
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