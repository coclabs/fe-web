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


       <v-btn @click="validatetestcase" elevation="2"
  outlined color="#576dc6" >Validate TestCase</v-btn>
</v-tabs>

  
  
  

  
  </v-card>
  <div class="pa-2"><v-btn color="#7776AC" dark :disabled="validateresultrealtest.code==500||validateresultexampletest.code==500||validateresultrealtest.failures[0]!=null||!valid||validateresultexampletest.failures[0]!=null||test.testcases==''||test.exampletestcases==''" @click="submit">Create Question With Test</v-btn> <div v-if="spanVisible">U Need To  Test First!!</div>

  </div> 



      <v-card  class="pa-2 rounded-xl mx-auto" style="color:white;background-color:black"  outlined
          tile 
>
   
   <h1 style="padding:30px">Validate Test Result</h1>
   
   <div style="color:red" v-if="validateresultrealtest.code==500">{{validateresultrealtest.reason}}</div>

    <div style="padding:25px">
      <h2 >1.RealTestCases </h2>
      Success[<br>
   <ul >
  <li v-for="item in validateresultrealtest.successes" :key="item.index">
   <h3 style="color:green"> {{ item.case }} , Score: {{item.score}}</h3>
  </li>
</ul>
      
      ]
      <br>
      Fail[<br>
        <ul >
  <li v-for="item in validateresultrealtest.failures" :key="item.index">
   <h3 style="color:red"> {{ item.case }} <br> Reason: <br> {{item.reason}}</h3></li></ul>
      ]
      <h2>2.ExampleTestCases </h2>
    
       Success[<br>
     <ul >
  <li v-for="item in validateresultexampletest.successes" :key="item.index">
   <h3 style="color:green"> {{ item.case }} , Score: {{item.score}}</h3>
  </li>
</ul>
          
      ]
      <br>
      Fail[<br>
      <ul >
  <li v-for="item in validateresultexampletest.failures" :key="item.index">
   <h3 style="color:red"> {{ item.case }} <br> Reason: <br> {{item.reason}}</h3></li></ul>
      ]
     <!-- <h3 style="color:green">AssertEqual(sum(4,8),12))  (Pass)</h3>

      <h3 style="color:green">Test1  (Pass) </h3> -->
</div>




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
      components: { minisidenav,   TestCases,  Testssolution, Exampletestcases, Initsolution,Navbarv1}
      ,
        data(){
return {

 valid:false,
  validateresultrealtest:{
   errors:[],failures:[],successes:[],total:0,code:0
  },
  validateresultexampletest:{
   errors:[],failures:[],successes:[],total:0,code:0
  }
  ,
  activetab: 1,question: {
        questiondescription: "  ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16            ",
        questiontopic: "IF-Else",
        questiondifficulty: "Beginner",
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
        mini: true,
        isActive: false,
        chips: [],
        items: ['Python', 'Java']
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
      let data = [this.question, this.test,this.question.questioninit];
      this.$store
        .dispatch("question/createquestionwithtest", data)
        .then(resp => this.$router.push("/question/showallquestion"))
        .catch(err => console.log(err));
        
      }
    },
     
            updateTestSolution (testsolution) {
              if(testsolution!=this.test.testsolution)this.valid=false;
      this.test.testsolution=testsolution
        if(this.test.testsolution=="") this.valid=false;
            }
    
     
,updateTestCase(testcase){
     if(testcase!=this.test.testcases)this.valid=false;
  this.test.testcases=testcase
          if(this.test.testcases=="") this.valid=false;
  
  
}
,updateExampleTestCase(exampletest){
  if(exampletest!=this.test.exampletestcases)this.valid=false;
  this.test.exampletestcases=exampletest;
     if(this.test.exampletestcases=="") this.valid=false;
  
}
    ,updateInitSolution(initSolution){
  this.question.questioninit=initSolution

},validatetestcase(){
 if(this.test.testcase!=""&&this.test.exampletestcases!="") this.valid=true; 
  let data=[this.test.testsolution,this.test.testcases]
   let data2=[this.test.testsolution,this.test.exampletestcases]
  this.$store
        .dispatch("question/validatetestcase", data)
        .then(resp=>(
        
          this.validateresultrealtest=JSON.parse(resp.data
          
          
          ))
        .catch(err => console.log(err)));
    this.$store
        .dispatch("question/validatetestcase", data2)
        .then(resp=>(this.validateresultexampletest=JSON.parse(resp.data))
        .catch(err => console.log(err)));    
       

     
}
,ll(){
  console.log(this.validateresultrealtest)
 

},remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
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

