<template>
  <v-app>

 <v-container class="grey lighten-5" style="height:600px">
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
          height="600px"
        >

    <h1>Question{{questionindex+1}} </h1>
        
          <h3 > <div   v-html="$md.render(question[0].questiondescription)" ></div></h3>
         
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

       
     
        </v-card>
      </v-col>
      <v-col order="1">
        <v-card
          class="pa-2"
          outlined
          tile
           height="600px"
        >
           <div id="description3" style="height: 550px; width: 100%; border: solid 1px rgba(0,0,0,.3);" >   </div>
<textarea name="description3"   style="display:none;" />
 <v-btn style="margin-left:200px">Run</v-btn>
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
  </v-app>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
return{questions:[
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

</style>