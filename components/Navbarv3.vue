<template>
<!-- navbarfor teacher -->
<div>
 <v-navigation-drawer  app 
    
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      clipped
      fixed
      style="border-bottom: 1px solid rgba(0,0,0,.12)!important"
      color="white"
      class="hidden-sm-and-down "
      
    >
     

      <v-divider class="mx-2 my-2"></v-divider>
      

      <v-list  shaped nav
        dense>
        <v-list-item-group
        v-model="selectedItem"
          color="deep-purple accent-1"
      >
    
    
     
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link router :to="item.route"

         
        >
          <v-list-item-icon >
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
           
        </v-list-item>
        </v-list-item-group>
          <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list>
      
    </v-navigation-drawer>
        <v-app-bar 
    clipped-left
     clipped-right
   app
   flat
      fixed 
      color="deep-purple accent-1"
      >
<v-toolbar-title class="text-uppercase black--text"  >
   
    <span class="font-weight-light">Call Of</span>
    <span>Code</span></v-toolbar-title>
   <v-divider
      class="mx-4"
      vertical
      inset
    ></v-divider>
    <v-toolbar-items>
      
    
</v-toolbar-items>
<v-spacer></v-spacer>

      <span class="font-weight-light">Session Expires:{{datetime}}</span>
<v-toolbar-items class="hidden-sm-and-down ">
<v-divider vertical></v-divider>
<v-btn text color="#C6B9FF" @click="logout" > 
<span>Sign Out</span>
<v-icon right >mdi-logout</v-icon>
</v-btn>
</v-toolbar-items>

           </v-app-bar>
            
       
   </div>
</template>
<script>

import { mapGetters,mapActions } from 'vuex'
export default {
  components: {  },
  
  computed: mapGetters({
   user:'authentication/finishauthenticated',isLoggedIn:'authentication/isLoggedIn',datetime:'authentication/datetime'
 
  }),



methods:{
 logout(){
   
  this.$store.dispatch('authentication/logoutteacher' )
       .then(() =>
       
       this.$router.push('/authen/login'))
    }
},
    data () {
        return{
            drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-home-city',route:'/indexteacher' },
         
         
         
        ],
        mini: true,
        }
    }
}
</script>