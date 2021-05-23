<template>

  <v-app>
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
          color="amber lighten-1"
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
   flat
      outlined
      fixed 
      style="border-bottom: 1px solid rgba(0,0,0,.12)!important; ">
     
           
           
              
<v-toolbar-title class="text-uppercase grey--text"  >
   
    <span class="font-weight-light">Call Of</span>
    <span>Code</span></v-toolbar-title>
   <v-divider
      class="mx-4"
      vertical
      inset
    ></v-divider>
    <v-toolbar-items>
     <v-btn  text color="pink"
     >
        News
      </v-btn> 

      <v-divider vertical inset></v-divider>
<v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-btn text color="#FFC800"  v-bind="attrs"
          v-on="on">
        Blog
      </v-btn>
     </template>
      <span>Tooltip</span>
    </v-tooltip>
</v-toolbar-items>

      


<v-spacer></v-spacer>

<v-btn icon color="pink " > 
<v-icon >mdi-bell</v-icon>
</v-btn>

<v-btn icon color="pink" > 
<v-icon >mdi-account-circle</v-icon>
</v-btn>
<v-toolbar-items class="hidden-sm-and-down ">
<v-divider vertical></v-divider>
<v-btn text color="#C6B9FF"  > 
<span>Sign Out</span>
<v-icon right>mdi-logout</v-icon>
</v-btn>
</v-toolbar-items>

           </v-app-bar>
            
               
           <v-main class="mainpage md-auto "  >
           
             
               <v-container class="pa-6 md-auto"
                >
                   
         
      <h2 class="meen pa-2 ">Add Question</h2>
      <v-row >
      <v-col>
      <v-card
          class=" me1 pa-2  rounded-xl   "
          elevation
          style=" background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4); "
          
        >
        <!-- 1.1 -->
       
         
 <h1 class="pa-2 ">Create Question With Test</h1>
  
      <h3 class="pa-2">Add Question</h3>
   <div class="pa-2 font-weight-bold"> Question Description (MarkDown Allowed)</div>

      <v-textarea class="me2 textfield pa-2 purple--text"
        v-model="question.questiondescription"
        filled
          name="input-7-4"
    extension-height=8
        required
        rows=6
        no-resize=true
        oninput="if(Number(this.rows) == 8) this.rows = 8;"
      ></v-textarea>
<div class="pa-2 font-weight-bold"> Question Topic</div>
      <v-text-field
      class="pa-2 "
            filled
        required
      ></v-text-field>
<div class="pa-2 font-weight-bold"> Question Difficulty</div>
      <v-text-field
       class="pa-2 "
            filled
        required
      ></v-text-field>
<v-col></v-col>
 

 
        </v-card>
       </v-col>

        <v-col
         cols="12"
        md="6">
        
        <v-card 
          class="pa-2 rounded-xl"
          height="698"
          style=" background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4); "
          elevation="1"
        >
       
        <h1 class="pa-2">  Preview</h1>
        <h3 class="pa-2">Question Description</h3>
          
          
  <v-responsive
    class="overflow-y-auto"
    max-height="400"
  >
    <div class="pa-6 text-center">
      <v-card-text class="me3" v-html="$md.render(question.questiondescription)" style="maxheigth:200px; "></v-card-text>
    </div>

    <v-responsive
      height="200vh"
      class="text-center pa-2"
    >
      <v-responsive min-height="50vh"></v-responsive>
      <div class="text-center body-2 mb-12">
       
      </div>

      <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-card
          class="mx-auto"
          max-width="336"
        >
          <v-card-title>Card title</v-card-title>

          <v-card-text>
            Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.

            In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus hendrerit tortor. Ut varius tincidunt libero.
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-responsive>
  </v-responsive>

        </v-card>
        </v-col>
</v-row>
        
         
      <h2 class="pa-2">Add Test</h2>
      
         
      <v-card class="pa-2 font-weight-bold rounded-xl"
      >
          
              
    
<v-tabs color="pink" v-model="tab">
<v-tab class="font-weight-bold " >TestSolution</v-tab>
 
<v-tab class="font-weight-bold">ExampleTestCases</v-tab>
<v-tab class="font-weight-bold">TestCase</v-tab>
<v-tab class="font-weight-bold">InitSolution</v-tab>


<v-tab-item > <testssolution v-on:ChangeTestSolution="updateTestSolution($event)"></testssolution> </v-tab-item>
    <v-tab-item> <exampletestcases v-on:ChangeExampleTestCase="updateExampleTestCase($event)"></exampletestcases> </v-tab-item>
    <v-tab-item><test-cases v-on:ChangeTestCase="updateTestCase($event)"></test-cases></v-tab-item>
    <v-tab-item><initsolution v-on:ChangeInitSolution="updateInitSolution($event)"></initsolution></v-tab-item>


       <v-btn @click="spanVisible=false" elevation="2"
  outlined color="pink">Validate TestCase</v-btn>
</v-tabs>

  
  <div class="pa-2"><v-btn :disabled="spanVisible" @click="submit" elevation="2"
  outlined color="pink">Add Question and Test</v-btn>
  </div> 
  <div v-if="spanVisible">U Need To Validate Test First!!</div>

  
  </v-card>

<v-col></v-col>

      <v-card  class="pa-2 rounded-xl mx-auto" style="color:white;background-color:black"  outlined
          tile 
>
   
   <h1 style="padding:50px">Validate Test Result</h1>
    <div v-if="!spanVisible" style="padding:25px"><h2>ExampleTestCases </h2>
     <h3 style="color:green">AssertEqual(sum(4,8),12))  (Pass)</h3>
      <h2>RealTestCases </h2>
      <h3 style="color:green">Test1  (Pass) </h3>
validate pass</div>



  </v-card>
  <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
  
               </v-container>
               
           </v-main>
           

 </v-app>
</template>

<script>
import minisidenav from '../../components/minisidenav.vue'

import TestCases from '../../components/TestCases.vue';
import Testssolution from '../../components/testssolution.vue';
import Exampletestcases from '../../components/exampletestcases.vue';
import Initsolution from '../../components/initsolution.vue';
  export default {
     components: { minisidenav,   TestCases,  Testssolution, Exampletestcases, Initsolution,},
    props: {
      attrs: {
        type: Object,
        default: () => ({}),
      },
    },

    data () {
      return {activetab: 1,question: {
        questiondescription: "  ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16            ",
        questiontopic: "",
        questiondifficulty: "",
        questioninit:""
      },
      test: {
        testsolution: "",
        testcases: "",
        exampletestcases: "",
        testframework: "",
        testlanquage: ""
      }
      ,spanVisible: true,
      tab: null,
        drawer: true,
        selectedItem: 0,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account',route:'/question/Meen' },
          { title: 'Users', icon: 'mdi-account-group-outline',route:'/question/Team' },
          { title: 'Team', icon: 'mdi-account',route:'/question/Meen'},
        ],
        mini: true,
        isActive: false,
        };
        },overlay: true
        ,
        
      mounted(){
 
        },
           methods: {
    submit: function() {
      if(this.question.questiontopic==""||this.question.questiondifficulty==""){
        alert("please Fill All Data!")
      }
      else{
      let data = [this.question, this.test];
      this.$store
        .dispatch("question/createquestionwithtest", data)
        .then(resp => this.$router.push("/question/showallquestion"))
        .catch(err => console.log(err));
      }
    },
     
            updateTestSolution (testsolution) {
      this.test.testsolution=testsolution
            }
      //  console.log(this.test.testsolution) // someValue
     
,updateTestCase(testcase){
  this.test.testcases=testcase
  // console.log(this.test.testcases)
}
,updateExampleTestCase(exampletest){
  this.test.exampletestcases=exampletest
  // console.log(this.test.exampletestcases)
}
    ,updateInitSolution(initSolution){
  this.question.initsolution=initSolution
// console.log(this.question.initsolution)
}
  }
        
      }
      
   
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&family=Prompt:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap');


.me2{
  font-family: 'Prompt', sans-serif;
  
  font-Size: 20;
}
.me3{
  font-family: 'Prompt', sans-serif;
  
  font-Size: 20;
}


</style>
