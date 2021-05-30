<template>

  <v-app>
   <Navbarv1/>
            
               
           <v-main  style="background-color: #EDE7F6;" >
           
             
               <v-container class="pa-6 md-auto " style="background-color: #EDE7F6;"
                >
                   
         
      <h2 class="meen pa-2 ">Add Question</h2>
      <v-row >
      <v-col>
      <v-card
          class=" me1 pa-2  rounded-xl   "
          elevation
        style="border: 2px solid #212121; "
          
        >
        <!-- 1.1 -->
       
         
 <h2 class="pa-2 ">Create Question With Test</h2>
  
      <h3 class="pa-2">Add Question</h3>
   <div class="pa-2 font-weight-bold"> Question Description (MarkDown Allowed)</div>

      <v-textarea class="me2 textfield pa-2 purple--text "
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
      <v-text-field v-model="question.questiontopic"
      class="pa-2 "
            filled
        required
      ></v-text-field>
      <div class="pa-2 font-weight-bold"> Question Difficulty</div>
      <v-text-field
       v-model="question.questiondifficulty"
   filled
    class="textfield"
        required
      ></v-text-field>
<div class="pa-2 font-weight-bold"> Question Lanquage</div>
      <v-combobox
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Your Lanquage"
    multiple
    solo
    required
  >
    <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
       outlined
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
<v-col></v-col>
 

 
        </v-card>
       </v-col>

        <v-col
         cols="12"
        md="6">
        
        <v-card 
          class="app-card  pa-2 rounded-xl"
          height="800"
       style="border: 2px solid #212121; "
          elevation="1"
        >
       
        <h2 class="pa-2">  Preview</h2>
        <h3 class="pa-2">Question Description</h3>
          
          
  <v-responsive
    class="overflow-y-auto"
    max-height="400"
  >
    <div class="pa-6 text-left">
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
          
        </v-card>
      </v-lazy>
    </v-responsive>
  </v-responsive>

        </v-card>
        </v-col>
</v-row>
        
         
      <h2 class="pa-2">Add Test</h2>
      
         
      <v-card class="pa-2 font-weight-bold rounded-xl"
      style="border: 2px solid #212121; "
      >
          
              
    
<v-tabs color="#576dc6" v-model="tab">
<v-tab class="font-weight-bold " >TestSolution</v-tab>
 
<v-tab class="font-weight-bold">ExampleTestCases</v-tab>
<v-tab class="font-weight-bold">TestCase</v-tab>
<v-tab class="font-weight-bold">InitSolution</v-tab>


<v-tab-item > <testssolution v-on:ChangeTestSolution="updateTestSolution($event)"></testssolution> </v-tab-item>
    <v-tab-item> <exampletestcases v-on:ChangeExampleTestCase="updateExampleTestCase($event)"></exampletestcases> </v-tab-item>
    <v-tab-item><test-cases v-on:ChangeTestCase="updateTestCase($event)"></test-cases></v-tab-item>
    <v-tab-item><initsolution v-on:ChangeInitSolution="updateInitSolution($event)"></initsolution></v-tab-item>


       <v-btn @click="spanVisible=false" elevation="2"
  outlined color="#576dc6">Validate TestCase</v-btn>
</v-tabs>

  
  
  <div class="pa-2" v-if="spanVisible">U Need To Validate Test First!!</div>

  
  </v-card>
  <div class="pa-2"><v-btn :disabled="spanVisible" @click="submit" 
  color="#7776AC" dark  >Add Question and Test</v-btn>
  </div> 



      <v-card  class="pa-2 rounded-xl mx-auto" style="color:white;background-color:black"  outlined
          tile 
>
   
   <h1 style="padding:30px">Validate Test Result</h1>
    <div v-if="!spanVisible" style="padding:25px"><h2>ExampleTestCases </h2>
     <h3 style="color:green">AssertEqual(sum(4,8),12))  (Pass)</h3>
      <h2>RealTestCases </h2>
      <h3 style="color:green">Test1  (Pass) </h3>
validate pass</div>



  </v-card>
  
               </v-container>
               
           </v-main>
           

 </v-app>
</template>

<script>
import minisidenav from '../../components/minisidenav.vue'
import Navbarv1 from '../../components/Navbarv1.vue'
import TestCases from '../../components/TestCases.vue';
import Testssolution from '../../components/testssolution.vue';
import Exampletestcases from '../../components/exampletestcases.vue';
import Initsolution from '../../components/initsolution.vue';
  export default {
     components: { minisidenav,   TestCases,  Testssolution, Exampletestcases, Initsolution,Navbarv1},
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
        chips: [],
        items: ['Python', 'Java'],
        
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
 ,remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
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
.app-card {
 display: flex;
 flex-direction: column;
 
 font-size: 16px;
 background-color: rgb(146 151 179 / 13%);
 border-radius: 14px;
 border: 1px solid rgba(16 18 27 / 40%);
 padding: 20px;
 cursor: pointer;
 transition: 0.3s ease;
}


</style>

