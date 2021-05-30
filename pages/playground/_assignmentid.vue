<template>
  <v-app>
<Navbarv1/>
<v-main style="background-color: #EDE7F6;">
 <v-container  style="height:690px; background-color: #EDE7F6;">
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
          height="690px"
          style="border: 2px solid #212121; "
        >

    <h1 class="pa-2">Question{{questionindex+1}} </h1>
        <v-responsive
    class="overflow-y-auto"
    max-height="400"
  >
    <div class=" me3 pa-6 text-left">
      <v-card-text v-html="$md.render(question[0].questiondescription)"  style="maxheigth:400px"> </v-card-text>
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
      <v-col order="12">
        <v-card
          class="pa-2"
          outlined
          tile
           height="690px"
           style="background-color:black"
        >

       
     
        </v-card>
      </v-col>
      <v-col order="1">
        <v-card
          class="pa-2"
          outlined
          tile
           height="690px"
           style="border: 2px solid #212121; background-color:black;"
        >
           <div id="description3" style="height: 610px; width: 100%; border: solid 1px rgba(0,0,0,.3);" >   </div>
<textarea name="description3"   style="display:none;" />
<br>
 <v-btn color="#7776AC"
              dark style="margin-left:200px">Run</v-btn>
  <v-btn color="#B2B0F3"
              dark  >Submit</v-btn>
        </v-card>
      </v-col>
    </v-row>
   <v-bottom-navigation  style="border: 1px solid #212121; background-color: #DADAF5;" v-model="value" >
    <v-btn color="#9575CD"
        text @click="back" :disabled="questionindex==0" >
      Back
    </v-btn>


    {{questionindex+1}}/{{questions.length}}

    <v-btn    color="#9575CD"
        text  @click="next "  :disabled="questionindex==questions.length-1" >
        Next
    </v-btn>
  </v-bottom-navigation>
  </v-container>
  </v-main>
  </v-app>
</template>

<script>
import Navbarv1 from '../../components/Navbarv1.vue'

import $ from 'jquery'
export default {
  components: { Navbarv1,},
    data(){
return{
  isActive: false,
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
   this.questions= await this.$axios.$get('http://127.0.0.1:8000/getquestionbyassignmentid/'+this.$route.params.assignmentid)
  
this.question=this.questions[this.questionindex]
},


methods:{
  fetchnext(){
this.question=this.questions[this.questionindex]
console.log(this.questions)
  
},back(){
 

   this.questionindex-=1;
   this.fetchnext()
  
   

},
  next(){
   this.questionindex+=1;
   this.fetchnext()
   
  //  this.$route.params.questionid=335
  }
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
             editor.setValue(
"", -1);
this.answer=editor.getValue();

        },
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