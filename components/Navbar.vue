<template>

    <div>
            

<v-navigation-drawer app v-model= "drawer"  class="deep-purple lighten-4 " >
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

<v-app-bar  app flat
           color="cyan lighten-5">
               <v-app-bar-nav-icon class="brown--text " @click="drawer = !drawer"></v-app-bar-nav-icon>
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



        </div>

</template>

<script>
export default {
    data(){
        return{
            drawer: null,
            links:[
                {title: 'Home', icon: 'mdi-home',route:'/question/Meen'},
                 { title: 'Dashboard', icon: 'mdi-view-dashboard',route:'/question/Dashboard1' },
          { title: 'Project', icon: 'mdi-folder' ,route: '/question/Projects' },
          { title: 'Team', icon: 'mdi-account',route:'/question/Team'},
          { title: 'Couse', icon: 'mdi-book',route:'/question/m3'},
            ]
            
        }
        
    }
    
    
}
</script>

<style>

</style>