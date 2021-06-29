
<template>
<v-app>
  
<Navbarv1/>

<v-main style="background-color: #EDE7F6;">
  <v-container>
 <v-card style="border: 2px solid #212121; " class="rounded-xl mt-2" height="500"> 
            <v-row>
              <v-col cols="12" sm="4" align="center">
                  <v-avatar size="300" tile>
                    <v-img :src="require('~/assets/Untitled_Artwork.png')"  >
     
     </v-img>
                  </v-avatar>
                  <v-btn fab icon class="ml-14"><v-icon>fas fa-minus</v-icon></v-btn>
                  
                  <v-btn fab icon><v-icon>fas fa-plus</v-icon></v-btn>
              </v-col>
              <v-col cols="12" sm="8" class="px-10">
                <v-app-bar flat color="rgba(0,0,0,0)">
                  <v-spacer></v-spacer>
                  <v-icon color="grey lighten-1">fas fa-heart</v-icon>
                </v-app-bar><div>
               <h1>Welcome Teacher !</h1>
               <h3 class="grey--text"> <br>
                 firstname: {{user.firstname}}<br>
                 lastname: {{user.lastname}}</h3>
                 <br>
                 <h4>we are glad to have u here</h4>
                 </div>
                       
<div>



</div>
                      
                      
              </v-col>
            </v-row>
          </v-card>

</v-container>
</v-main>
 </v-app>

</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import Navbarv1 from '../components/Navbarv1.vue';


export default {
  components: { Navbarv1 },


beforeCreate(){

var token
     token = this.$cookies.get('token');
    // If the user is not authenticated
    if (!token) {
    
        this.$router.push("authen/login")


}
}
  ,
data(){
return {
 
}
},
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