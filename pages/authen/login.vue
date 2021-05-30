<template>
 <v-app>
<Navbarv1/>
<v-main style="background-color: #EDE7F6;">
  <v-container>
 <v-card style="border: 2px solid #212121; " class="rounded-xl mt-2">
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
                </v-app-bar>
                <h3 class="grey--text">Welcome</h3>
                <p class="grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur dolorum, 
                      quibusdam eum pariatur, laboriosam quia provident placeat corrupti repellat odio at.
                       Hic commodi .</p>
                       
                       
                       <v-btn rounded color="warning">start</v-btn>
                      
              </v-col>
            </v-row>
          </v-card>

</v-container>
</v-main>
 </v-app>
</template> 

<script>
import Navbarv1 from '../../components/Navbarv1.vue'
 
 export default {
 components: { Navbarv1,},
 
beforeCreate(){

var token
     token = this.$cookies.get('token');
    // If the user is not authenticated
    if (token) {
    
        this.$router.push("/")


}
}
 ,
    data(){
      return {
      
      }
    },

 methods: {
    
     
  }
 }
</script>