<template>

<v-app >
    
  
<Navbar/>


<v-col></v-col>
  <v-main class="mx-4 pink " app>
    
    <v-parallax
    
    :src="require('~/assets/3506328.jpg')"
  > Hello World
  
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
     
    
       </v-parallax>
    <h1 class="display-1 font-weight-thin ">Hello</h1>
   
     
    <p class="pink lighten-4 red--text text--darken-4">hello try write </p>
    <h1 class="display-4">Massive Display</h1>
<h1 class="display-1 font-weight-thin ">Massive Display</h1>


<v-btn class="a" elevation="2"
  outlined color="#ac8fb6">สวัสดี</v-btn>
  <v-btn text
      color="pink"  >click me</v-btn>

<v-btn elevation="2" outlined color="#ac8fb6"><v-icon>mdi-email</v-icon></v-btn>

<v-btn elevation="2" outlined color="pink">
    <v-icon left>mdi-shopping</v-icon>
    <span>shop now</span>
    </v-btn>

     <v-btn elevation="2" outlined small color="pink">
    <v-icon left small>mdi-shopping</v-icon>
    <span>shop now</span>
    </v-btn>

    <v-btn elevation="2" outlined color="#ac8fb6">
    <span>shop now</span>
    <v-icon right>mdi-shopping</v-icon>
    </v-btn>
     
     <v-btn color="purple"
              fab
              dark
              small
              >
          <v-icon >mdi-heart-circle</v-icon>
     </v-btn>

     <v-btn text fab dark><v-icon color="purple">mdi-heart</v-icon></v-btn> 
     <v-card
    class="pa-md-4 mx-lg-auto"
    color="amber lighten-4"
    width="250px"
    
  >
    <v-card-text>
      Adjust screen size to see spacing changes
    </v-card-text>
  </v-card>
  
   <v-responsive
      max-width="400"
      class="mx-auto mb-4"
    >
      <v-text-field
        v-model="benched"
        type="number"
        label="Total Benched"
        min="0"
        max="10"
      ></v-text-field>
    </v-responsive>

    <v-card
      elevation="16"
      max-width="400"
      class="mx-auto"
    >
      <v-virtual-scroll
        :bench="benched"
        :items="items"
        height="300"
        item-height="64"
      >
        <template v-slot:default="{ item }">
          <v-list-item :key="item">
            <v-list-item-action>
              <v-btn
                fab
                small
                depressed
                color="primary"
              >
                {{ item }}
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                User Database Record <strong>ID {{ item }}</strong>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon small>
                mdi-open-in-new
              </v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>

      


    </v-card>

    <v-card elevation="16"
      max-width="400"
      class="mx-auto"
      >
       
      
        <tbody>
          <tr>
             <v-treeview
    activatable
    color="warning"
    :items="itemsm"
  ></v-treeview>
             </tr>
         </tbody>
        
        </v-card>

        <v-col></v-col>
        
       
  <v-treeview
    activatable
    color="warning"
    :items="itemsm"
  ></v-treeview>



    <v-container class="grey lighten-5 rounded-xl">
    <v-row
      v-for="j in justify"
      :key="j"
      :justify="j"
    >
      <v-col
        v-for="k in 2"
        :key="k"
        md="4"
      >
        <v-sheet
            
            class="mx-auto rounded-xl"
            height="100"
            width="100"
            
            color="#f72047"
            
          ></v-sheet>

          
      </v-col>

       <v-col
        class="d-flex"
        cols="6"
        md="2"
      >
        <v-sheet
          class="d-flex mt-auto"
          
          height="300"
          style="border: 3px solid purple ; "
        >
          <sheet-footer>
            #6: (2r x 1c)
          </sheet-footer>
        </v-sheet>

      </v-col>
      <v-col cols="4">
        <v-card
          class="pa-2"
          outlined
          style="border: 1px solid pink; : border: 1px solid white;"
          tile
        >
          .col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
  <v-col cols="4">
        <v-card
          class="pa-2 "
          outlined
           
          style="border: 1px solid black"
          tile
        >
          .col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
        </v-card>
      </v-col>

      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6 >
            
            <v-card   height="200" style="border: 1px solid black">1</v-card>
           
          </v-flex>
          
         <v-flex xs12 md6 >
            
            <v-card   height="200" style="border: 1px solid red; : border: 1px solid white;">1</v-card>
           
          </v-flex>
          
        </v-layout>
      </v-container>

      
    <v-card id="limited-products" style="border: 1px solid red; : border: 1px solid pink; " >
meen
    </v-card>
<v-card-text style="height: 100px; position: relative">
            <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="pink"
                dark
                absolute
                top
                right
                fab
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
     
    </v-main>
   
</v-app>


</template>

<script>
import Navbar from '../../components/Navbar.vue'

export default {
    name:'Meen',
    components: { Navbar,},
    
    data: () => ({
     benched: 0,
    drawer: null ,
    
      links:[
                {title: 'Home', icon: 'mdi-home',route:'/question/Meen'},
                 { title: 'Dashboard', icon: 'mdi-view-dashboard',route:'/question/Dashboard1' },
          { title: 'Project', icon: 'mdi-folder' ,route: '/question/Projects' },
          { title: 'Team', icon: 'mdi-account',route:'/question/Team'},
          { title: 'Couse', icon: 'mdi-book',route:'/question/m3'},
            ],
            justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
         itemsm: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],  
  }),
   computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 10
      },
    },
    
}

</script>

<style>

.v-main {
font-family: 'Prompt', sans-serif;
font-Size: 20;
/* background: linear-gradient(to right, #d3cce3, #e9e4f0); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}


</style>