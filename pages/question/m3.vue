<template>
  <v-app >
      
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
        โจยท์
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

     

<v-navigation-drawer app v-model= "drawer"  class="deep-purple lighten-4">
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
<v-main class="white">
<v-container>
    <v-card
        style="background-color:rgb(38,39,41);color:rgb(239,239,239)"
        class="pa-2"
        outlined
        tile
      >
         
      <h3>Add Question</h3>
      </v-card>

<v-card height="500" >


    
   
    <v-row no-gutters style="height:500px;" >
      <v-col
      style="height:500px;"
       >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <!-- 1.1 -->
         <template>
     

 <div>
 <h1>Create Question With Test</h1>
  
      <h3>Add Question</h3>
    Question Description (MarkDown Allowed)

      <v-textarea class="textfield"
        
        color="white white-2"
        background-color="grey lighten-2"
    extension-height=8
        required
        rows=6
        no-resize=true
        oninput="if(Number(this.rows) == 8) this.rows = 8;"
      ></v-textarea>
Question Topic
      <v-text-field
        
        color="white white-2"
        class="textfield"
         background-color="grey lighten-2"
        required
      ></v-text-field>
Question Difficulty
      <v-text-field
       
        color="white white-2"
         background-color="grey lighten-2"
    class="textfield"
        required
      ></v-text-field>

 </div>
         </template>


        </v-card>
      </v-col>
      <v-col >
        <v-card
          class="pa-2"
          outlined
          tile

          
        >
        <h1>  Preview</h1>
        <h3>Question Description</h3>
        <div style>
          <div  style="maxheigth:200px"></div>
     
        </div>
        </v-card>
      </v-col>
      
    
    </v-row>

   
      <v-card
        style="background-color:rgb(38,39,41);color:rgb(239,239,239)"
        class="pa-2"
        outlined
        tile
      >
         
      <h3>Add Test</h3>
      </v-card>
      <v-row no-gutters style="height:500px;">
      <v-col style="height:500px;">
    

 
        <v-card>
<v-tabs  color="pink" v-model="tab">
<v-tab >TestSolution</v-tab>
 
<v-tab>ExampleTestCases</v-tab>
<v-tab>TestCase</v-tab>
<v-tab >InitSolution</v-tab>
<testsolution></testsolution>

 <v-tab-item > <testssolution ></testssolution> </v-tab-item>
    <v-tab-item> <exampletestcases ></exampletestcases> </v-tab-item>
    <v-tab-item><test-cases ></test-cases></v-tab-item>
    <v-tab-item><initsolution ></initsolution></v-tab-item>


       <v-btn @click="spanVisible=false" elevation="2"
  outlined color="pink">Validate TestCase</v-btn>
</v-tabs>

  </v-card>



 <v-btn :disabled="spanVisible">Add Question and Test</v-btn> <div v-if="spanVisible">U Need To Validate Test First!!</div>

      </v-col>
 <v-col></v-col>
      <v-col   >
       
       <v-card style="color:white;background-color:black">
   
     <h1>Validate Test Result</h1>
     <h2>ExampleTestCases </h2>
     <h3 style="color:green">AssertEqual(sum(4,8),12))  (Pass)</h3>
      <h2>RealTestCases </h2>
      <h3 style="color:green">Test1  (Pass) </h3>



  </v-card>
     
      </v-col>
    
    </v-row>
     
  

</v-card>

<v-row>

       
     </v-row>
    
 

    




    
   
    
  
  
     
  

    
      <!-- testsolution:str
    testcases:str
    exampleTestCases:str
    testlanquage:str
    testframework:str -->
    <!-- Test Solution
      <v-textarea 
        v-model="test.testsolution"
       background-color="grey lighten-2"
        maxlength="3000"
        full-width
        single-line
      ></v-textarea>
    Test Cases
      <v-textarea 
        v-model="test.testcases"
        color="white"
        maxlength="3000"
         background-color="grey lighten-2"
        full-width
        single-line
      ></v-textarea>
    ExampleTestCases
      <v-textarea
        v-model="test.exampletestcases"
        color="black"
      background-color="grey lighten-2"
        maxlength="3000"
        full-width
        single-line
      ></v-textarea>
    Test Lanquage
      <v-text-field
       
        v-model="test.testlanquage"
        color="white white-2"
        class="textfield"
        required
         background-color="grey lighten-2"
      ></v-text-field>
       Test Framework
      <v-text-field
        v-model="test.testframework"
        color="white white-2"
        class="textfield"
        required
         background-color="grey lighten-2"
      ></v-text-field>

      <div>
        <v-btn type="submit">Validate Test</v-btn>
      </div>
    </v-form>
    </div>
     </template> -->

</v-container>
</v-main>
<v-footer app>
    <!-- -->
  </v-footer>
  
  </v-app>
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
