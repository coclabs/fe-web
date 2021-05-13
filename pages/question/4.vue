<template>
   <v-app>
        <v-navigation-drawer
      v-model="drawer"
      app
    absolute
      temporary
     
    >
   <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
   
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple accent-1">
      
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >
        <v-btn href="mm5">Call of Code </v-btn></v-toolbar-title>

        
        <v-spacer >
          
        </v-spacer>
         <v-spacer >
          
        </v-spacer>
        <v-spacer >
          
        </v-spacer>
        <v-spacer >
          
        </v-spacer>
        <v-spacer >
          
        </v-spacer>
        <v-spacer >
          
        </v-spacer>
        <v-spacer >
          
        </v-spacer>

        <v-spacer >
          
        </v-spacer>
        <v-spacer >
          
        </v-spacer>
        <v-spacer >
          
        </v-spacer>
<v-avatar color="yellow">
      <span class="white--text headline">CJ</span>
    </v-avatar>
      <v-spacer>

</v-spacer>
      <v-responsive max-width="156" >
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
           
        ></v-text-field>
      </v-responsive>
      
      
    </v-app-bar>


    <v-spacer></v-spacer>
    <v-spacer ></v-spacer>
     <v-spacer></v-spacer>
    <v-spacer ></v-spacer>
    
<v-container fluid grid-list-xl>
  <v-layout row justify-space-between>
  <v-flex d-flex md12 sm6 md3>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
          
        </v-card>
      </v-flex>
  </v-layout>
</v-container>
     
    </v-app>


</template>

<script>
  export default {
    data: () => ({ 
      drawer: false,
      group: null,

      
      }),

      
    
  }
</script>


