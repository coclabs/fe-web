<template>
  <v-app>
   <Navbarv1/>
<v-main style="background-color: #EDE7F6;">

 <v-container   style="height:600px;width:2500pxbackground-color: #EDE7F6;" v-if="question!=null">
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
          height="600px"
      
        >

    <h1>Question{{questionindex+1}} </h1>
        
          <h3 > <div  v-html="$md.render(question.Question.questiondescription)" ></div></h3>
     
        </v-card>
      </v-col>
      <v-col order="12">
        <v-card
          class="pa-2"
          outlined
          tile
           height="600px"
           style="background-color:black"
        >

       <h2 style="color:white">Test Result


     
       </h2>
     
<h3 style="color:orange">  Example Test Cases</h3>
<ul>
 <li v-for="item in validateresultexampletest.successes" :key="item.index">
   <h3 style="color:green"> {{ item.case }}  Pass</h3>
  </li>
</ul>
  <ul >
  <li v-for="item in validateresultexampletest.failures" :key="item.index">
   <h3 style="color:red"> {{ item.case }}  Fail<br> Reason: <br> {{item.reason}}</h3></li></ul>

 <div style="color:red" v-if="validateresultexampletest.code==500">Error :{{validateresultexampletest.reason}}</div>

        </v-card>
      </v-col>
      <v-col order="1">
        <v-card
          class="pa-2"
          outlined
          tile
           height="600px"
           width="600px"
        >
           <div id="description3" style="height: 550px; width: 100%; border: solid 1px rgba(0,0,0,.3);"  > </div>
<textarea name="description3"   style="display:none;" />
 <v-btn style="margin-left:400px" @click="validateexampletest">Run</v-btn>
  <v-btn >Submit</v-btn>
        </v-card>
      </v-col>
    </v-row>
   <v-bottom-navigation v-model="value" >
    <v-btn @click="back" :disabled="questionindex==0" >
      Back
    </v-btn>

    {{questionindex+1}}/{{questions.length}}

    <v-btn @click="next "  :disabled="questionindex==questions.length-1" >
        Next
    </v-btn>
  </v-bottom-navigation>
  </v-container>
  <v-container v-if="question==null">
<h1 style="color:red">NO Question Please Add Question To Assignment</h1>
    <div id="description3" style="height: 550px; width: 100%; border: solid 1px rgba(0,0,0,.3);"  > </div>
<textarea name="description3"   style="display:none;" />
  </v-container>
</v-main>
  </v-app>
</template>

<script>
import $ from 'jquery'
import Navbarv1 from '../../components/Navbarv1.vue'
export default {
  components: { Navbarv1 },
    data(){
return{
  numberquestion:0,
  validateresultexampletest:{code:0},
  ace:{},
  first:0,
  check:false,defaultquestion:{questiondescription:"No Question! Please Add Question To This Assignment"},

questions:[
//mock
 [ { "questiondifficulty": "asd", "questiontopic": "asd", "questionid": 320, "questioninit": "asd", "questiondescription": " ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16 " }, { "testframework": "", "exampletestcases": "asd", "testsolution": "asdasd", "question_id": 320, "testlanquage": "", "testcases": "asd", "testid": 322 } ], [ { "questiondifficulty": "asd", "questiontopic": "asd", "questionid": 333, "questioninit": "asd", "questiondescription": " ## Add a list of numbers and return its sum. \n ### Example:\n #### Inputn #### Result 16 " }, { "testframework": "", "exampletestcases": "asd", "testsolution": "asd", "question_id": 333, "testlanquage": "", "testcases": "asd", "testid": 335 } ], [ { "questiondifficulty": "dasd", "questiontopic": "asd", "questionid": 335, "questioninit": "asd", "questiondescription": " ## Add a list of numbers and return its sum. \n ### Example:\n  " }, { "testframework": "", "exampletestcases": "sad", "testsolution": "adas", "question_id": 335, "testlanquage": "", "testcases": "asd", "testid": 337 } ] 


],value:'recent' ,maxnum:0,questionindex:0,question:
//mock
[ { "questiondifficulty": "asd", "questiontopic": "asd", "questionid": 320, "questioninit": "asd", "questiondescription": " ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16 " }, { "testframework": "", "exampletestcases": "asd", "testsolution": "asdasd", "question_id": 320, "testlanquage": "", "testcases": "asd", "testid": 322 } ]

}
    },
async fetch() {
 
  // this.question= await this.$axios.$get('http://127.0.0.1:8000/getquestionbyquestionid/'+this.$route.params.questionid)
   this.questions= await this.$axios.$get('https://api.pdm-dev.me/getquestionbyassignmentid/'+this.$route.params.assignmentid)
  



this.question=this.questions[this.questionindex]

},


methods:{

  fetchnext(){
this.question=this.questions[this.questionindex]


this.ace.setValue(
this.question.Question.questioninit, -1);




  
},validateexampletest(){

  let data=[$('textarea[name="description3"]').val(),this.question.Test.exampletestcases]

  this.$store
        .dispatch("question/validatetestcase", data)
        .then(resp=>(
        
          this.validateresultexampletest=JSON.parse(resp.data
          
          
          )))
       
}

,back(){
 

   this.questionindex-=1;
   this.fetchnext()
  
   

},
  next(){
   this.questionindex+=1;
   this.fetchnext()
   
  //  this.$route.params.questionid=335
  },
  
      
}, mounted(){
          
 const editor = ace.edit('description3');
const textarea = $('textarea[name="description3"]');

editor.getSession().on("change", function () {
    textarea.val(editor.getSession().getValue());
});
;


  editor.setOptions({
                theme: 'ace/theme/monokai',
                mode: 'ace/mode/python',
                printMargin: false,
                vScrollBarAlwaysVisible: true,
                scrollPastEnd: 1,
                fontSize: 25,
            });
this.ace=editor;

        },updated(){
          if(this.numberquestion==0){
this.fetchnext()
this.numberquestion++;
}
        }
    
}

</script>

<style>

</style>