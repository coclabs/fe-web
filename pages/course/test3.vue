<template>
    <v-app>
        <v-main>
         <v-app-bar 
    clipped-left
   app
   
      
      fixed 
      color="amber lighten-2"
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
          v-on="on"
          href="/course/classroomteacher">
        Blog
      </v-btn>
      
     </template>
      <span>Tooltip</span>
    </v-tooltip>
    
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
          <v-col></v-col>

        <v-container>
            <v-row>
                <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="cyan darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan lighten-2" elevation="0">
                          <v-icon color="white">fab fa-bitcoin</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        $8520.50
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text">Market Cap $151.458</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
            </v-row>
        </v-container>
       </v-main>
    </v-app>
</template>