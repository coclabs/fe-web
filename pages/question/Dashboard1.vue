<template>
    <v-app>
 <v-app-bar flat app clipped-left
           color="cyan lighten-5">
               <v-app-bar-nav-icon class="brown--text hidden-md-and-down" @click="drawer = !drawer"></v-app-bar-nav-icon>
<v-toolbar-title class="text-uppercase grey--text">
   
    <span class="font-weight-light">Call Of</span>
    <span>Code</span>
     <v-btn text>
        News
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Blog
      </v-btn>

      <v-divider vertical></v-divider>
</v-toolbar-title>

<v-spacer></v-spacer>
<v-btn icon color="pink " class="hidden-md-and-down"> 
<v-icon >mdi-bell</v-icon>
</v-btn>
<v-btn icon color="pink" class="hidden-md-and-down"> 
<v-icon >mdi-account-circle</v-icon>
</v-btn>
<v-btn text color="pink" class="hidden-md-and-down"> 
<span>Sign Out</span>
<v-icon right>mdi-logout</v-icon>
</v-btn>


           </v-app-bar>

<v-navigation-drawer app v-model= "drawer"  class="deep-purple lighten-4"
 clipped
        >
    <v-layout column align-center>
        <v-flex class="mt-5">
            <v-avatar size="50">
<v-icon class="white--text " size="50" >mdi-account-circle</v-icon> 
            </v-avatar>
        </v-flex>
    </v-layout>

<v-list  
          >
    <v-list-item-group >

    <v-list-item v-for="(link, i) in links"
          :key="i"  router :to="link.route" >
        <v-list-item-icon>
            <v-icon class="#3E2723--text">
                {{ link.icon}}
            </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title class="#3E2723--text">{{ link.title}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-list-item-group>
</v-list>
</v-navigation-drawer>

<v-main class="question-Dashboard1 white">

  <v-col></v-col>
    <v-carousel
    class="mx"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
        
      >
        <v-row
          class="fill-height "
          align="center"
          justify="center"
        >
          <div class="display-3" >
            {{ slide }} Slide
            
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
   <v-col></v-col>
    <v-container class="md-auto ">
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#F8BBD0"
            dark
            
          >
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
                
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  

</v-main>
    </v-app>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
    name:'Dashboard1',
     components: { Navbar,},
    
    data: () => ({
        drawer: false,
            links:[
                {title: 'Home', icon: 'mdi-home',route:'/question/Meen'},
                 { title: 'Dashboard', icon: 'mdi-view-dashboard',route:'/question/Dashboard1' },
          { title: 'Project', icon: 'mdi-folder' ,route: '/question/Projects' },
          { title: 'Team', icon: 'mdi-account',route:'/question/Team'},
          { title: 'Couse', icon: 'mdi-book',route:'/question/m3'},
            ],
            
     items: [
        {
          color: '#E1BEE7',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#FFCDD2',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],

  }),
};
</script>
