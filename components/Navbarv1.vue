<template>
<div>
     <v-navigation-drawer  app 
    
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      clipped
      fixed
      style="border-bottom: 1px solid rgba(0,0,0,.12)!important"
      
      
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider class="mx-2 my-2"></v-divider>
      

      <v-list   >
        <v-list-item-group
        v-model="selectedItem"
          
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link router :to="item.route"
        >
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
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

<v-btn icon  > 
<v-icon >mdi-bell</v-icon>
</v-btn>

<v-btn icon > 
<v-icon >mdi-magnify</v-icon>
</v-btn>
<v-toolbar-items class="hidden-sm-and-down ">
<v-divider vertical></v-divider>
<v-btn text color="#C6B9FF"  > 
<span>Sign Out</span>
<v-icon right>mdi-logout</v-icon>
</v-btn>
</v-toolbar-items>

           </v-app-bar>
            
       
   </div>
</template>
<script>
export default {
    data () {
        return{
            drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city',route:'/authen/login' },
          { title: 'createquestion', icon: 'mdi-plus-box',route:'/question/createquestion' },
          { title: 'showallquestion', icon: 'mdi-book',route:'/question/showallquestion' },
          { title: 'createassignment', icon: 'mdi-plus-box',route:'/question/createassignment'},
          { title: 'showallassignment', icon: 'mdi-book',route:'/question/showallassignment'},
         
        ],
        mini: true,
        }
    }
}
</script>