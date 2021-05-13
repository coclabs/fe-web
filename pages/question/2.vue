<template>

  <!-- App.vue -->

<v-app>



    
  <v-navigation-drawer app style="background-color:black">
    <minisidenav/>
  </v-navigation-drawer>

  <v-app-bar app>
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main >


    <!-- Provides the application the proper gutter -->
  
  
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
        v-model="question.questiondescription"
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
        v-model="question.questiontopic"
        color="white white-2"
        class="textfield"
         background-color="grey lighten-2"
        required
      ></v-text-field>
Question Difficulty
      <v-text-field
        v-model="question.questiondifficulty"
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
          <div v-html="$md.render(question.questiondescription)" style="maxheigth:200px"></div>
     
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

 <v-tab-item > <testssolution v-on:ChangeTestSolution="updateTestSolution($event)"></testssolution> </v-tab-item>
    <v-tab-item> <exampletestcases v-on:ChangeExampleTestCase="updateExampleTestCase($event)"></exampletestcases> </v-tab-item>
    <v-tab-item><test-cases v-on:ChangeTestCase="updateTestCase($event)"></test-cases></v-tab-item>
    <v-tab-item><initsolution v-on:ChangeInitSolution="updateInitSolution($event)" ></initsolution></v-tab-item>


       <v-btn @click="spanVisible=false" elevation="2"
  outlined color="pink">Validate TestCase</v-btn>
</v-tabs>

  </v-card>



 <v-btn :disabled="spanVisible">Add Question and Test</v-btn> <div v-if="spanVisible">U Need To Validate Test First!!</div>

      </v-col>
 
      <v-col   >
        <br><br><br>
       <v-card style="color:white;background-color:black"
       >
   
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

    

  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
  
            <v-overlay
      :opacity="1"
      :value="overlay"
    >
      <v-progress-circular indeterminate size="64">
        Loading...
      </v-progress-circular>
    </v-overlay>
</v-app>
</template>

<script>

import $ from 'jquery'
import minisidenav from '../../components/minisidenav.vue'
import Child from '../../components/Child.vue';

import mini from '../../components/mini.vue';
import TestCases from '../../components/TestCases.vue';
import Testssolution from '../../components/testssolution.vue';
import Exampletestcases from '../../components/exampletestcases.vue';
import Initsolution from '../../components/initsolution.vue';
import initsolutionVue from '../../components/initsolution.vue';



    export default {
      components: { minisidenav, Child,  TestCases,  Testssolution, Exampletestcases, Initsolution,mini},
        data(){
return {activetab: 1,question: {
        questiondescription: "  ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16            ",
        questiontopic: "",
        questiondifficulty: "",
        initsolution:""
      },
      test: {
        testsolution: "",
        testcases: "",
        exampletestcases: "",
        testframework: "",
        testlanquage: ""
      },
      spanVisible: true,
      tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        };
        },
        overlay: true
    ,
        
             
        
         mounted(){
 this.overlay=false;
        },
        methods: {
    submit: function() {
      let data = [this.question, this.test];
      this.$store
        .dispatch("question/createquestionwithtest", data)
        .then(resp => this.$router.push("/question/showallquestion"))
        .catch(err => console.log(err));
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
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

</style>