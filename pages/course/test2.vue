<template>
    <v-app style="background-color: #efe5fd;">
       <Navbarv1/>
       <v-navigation-drawer
      app
      clipped
      right
    >
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-main  style="background-color: #EDE7F6;">

       <v-container class="pa-8 my-auto mx-auto xs-12" style="background-color: #EDE7F6;">
    
      <v-row wrap  >
         <v-flex
        sm6
        xs12
        md6
        lg8
       
      >
       <v-card
           color="amber accent-2"
            class=" pa-2 rounded-xl "
 
          >
           <v-list-item three-line>
      <v-list-item-content  class="ms-8">
        <div class="text-overline mb-2">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="250"
        class="ma-3"
      >
       <v-img  :src="require('~/assets/Learning-animate.svg')"  ></v-img></v-list-item-avatar>
    </v-list-item>
          </v-card>
      </v-flex>
      
      <v-col cols="12" md="3" class="mx-auto">
      
       
      <v-card
      color="teal accent-1 rounded-xl"
    class="mx-auto"
    max-width="344"
    
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
     
       
      </v-col>

       <v-col

              class="mt-3"
              cols="12"
            >
              <strong>Course</strong>
            </v-col>
        
          <v-col
          v-for="card in items"
          :key="card.title"
          :cols="12"
          :md="4"
          class="mt-1"
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
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
      </v-row>
       </v-container>
      </v-main>
  
        
    </v-app>
</template>
<script>
import Navbarv1 from '../../components/Navbarv1.vue'
export default {
  data: () => ({ drawer: null ,
  items: [
        {
          color: '#FF5252',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'python101',
          artist: 'Foster the People',
        },
        {
          color: '#64FFDA',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
         {
          color: '#B388FF',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
         {
          color: '#B388FF',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
         
      ],
  
  
  
  }),
    components: { Navbarv1 },
}
</script>