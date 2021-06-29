<template>
<!-- navbar for student -->
<div>
     <v-navigation-drawer  app 
    
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      clipped
      fixed
      style="border-bottom: 1px solid rgba(0,0,0,.12)!important"
      color="purple lighten-4"
      
    >
      

      <v-divider class="mx-2 my-2"></v-divider>
      

      <v-list   >
        <v-list-item-group
        v-model="selectedItem"
          
      >
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link router :to="item.route"
        >
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:red lighten-5">{{ item.title }}</v-list-item-title>
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
   app
   
      
      fixed 
      color="white"
      >
     
           
           
              
<v-toolbar-title class="text-uppercase grey--text"  >
   
    <span class="font-weight-light">Call Of</span>
    <span>Code</span></v-toolbar-title>
   <v-divider
      class="mx-4"
      vertical
      inset
    ></v-divider>
    <v-toolbar-items>
     <v-btn  text 
     >
        News
      </v-btn> 

      <v-divider vertical inset></v-divider>
<v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-btn text   v-bind="attrs"
          v-on="on">
        Blog
      </v-btn>
     </template>
      <span>Tooltip</span>
    </v-tooltip>
</v-toolbar-items>

      


<v-spacer></v-spacer>


Session Expires:{{datetime}}
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
          { title: 'Home', icon: 'mdi-home-city',route:'/authen/login' },
        
         
        ],
        mini: true,
        }
    }
}
</script>