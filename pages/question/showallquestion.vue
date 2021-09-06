<template>
<v-app>

  <Navbarv1/>
  <v-main  style="background-color: #efe5fd;">
    <v-container class="pa-6 md-auto">
  <h2>Question</h2>

    <v-card-title >
   <v-text-field
   background-color="white"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        color="black"
        outlined
      ></v-text-field>
    </v-card-title>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="questions"
    :single-select="singleSelect"
    item-key="questionid"
    show-select
     :search="search"
          :elevation="hover ? 24 : 6"
          style="border: 2px solid #212121; "
     hide-default-footer
    show-expand 
   class="app-card"
  >
    <template v-slot:top>
       <v-toolbar
        flat
      >
      

 <v-toolbar-title>Manage</v-toolbar-title>
   <v-divider
          class="mx-10"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-dialog
        
          v-model="dialog"
          max-width="1000px"
        >
          <template v-slot:activator="{ on, attrs }">
           
            <v-btn
              color="deep-purple accent-1"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              @click="editedIndex=-1"
            >
              New Question
            </v-btn>
              
          </template>
          <v-card    >
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container >
                <v-row>
                    <v-col cols="12"> 
                      <v-card class="pa-2 font-weight-bold rounded-xl"
      style="border: 2px solid #212121; "
      >               
<v-tabs   v-model="tab2" color="#7776AC">
<v-tab >Question Description </v-tab>
     <v-tab>Preview</v-tab>
<v-tab>Question Topic</v-tab>
<v-tab>Question Difficulty</v-tab>


    

     




 <v-tab-item > 
   <div class=" me3 textfield font-weight-light">
    <v-textarea 
    filled
    color="#7776AC"
        v-model="question.questiondescription"
    extension-height=8
     name="input-7-4"
        required
        rows=6
        no-resize=true
        oninput="if(Number(this.rows) == 8) this.rows = 8;"
      ></v-textarea>
      </div>
     </v-tab-item>
     


    <v-tab-item> 
    <v-responsive
    class="overflow-y-auto"
    max-height="200"
  >
    <div class=" me3 pa-6 text-left">
      <v-card-text v-html="$md.render(question.questiondescription)" style="maxheigth:200px"> </v-card-text>
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
    </v-tab-item>
    
    <v-tab-item>
        <v-text-field
        v-model="question.questiontopic"
        class="textfield"
         filled
        required
      ></v-text-field>
        </v-tab-item>
    <v-tab-item>

      <v-text-field
        v-model="question.questiondifficulty"
       filled
    class="textfield"
        required
      ></v-text-field>

    </v-tab-item>
    <v-tab-item></v-tab-item>

</v-tabs>
  </v-card>
                </v-col>
                <v-col cols="12">
                  
<v-card class="pa-2 font-weight-bold rounded-xl"
      style="border: 2px solid #212121; "
      >
          
              
    
<v-tabs color="#7776AC" v-model="tab">
<v-tab class="font-weight-bold " >TestSolution</v-tab>
 
<v-tab class="font-weight-bold">ExampleTestCases</v-tab>
<v-tab class="font-weight-bold">TestCase</v-tab>
<v-tab class="font-weight-bold">InitSolution</v-tab>


<v-tab-item > <testssolution :someData="question" v-on:ChangeTestSolution="updateTestSolution($event)"></testssolution> </v-tab-item>
    <v-tab-item> <exampletestcases :someData="question" v-on:ChangeExampleTestCase="updateExampleTestCase($event)"></exampletestcases> </v-tab-item>
    <v-tab-item><test-cases  :someData="question" v-on:ChangeTestCase="updateTestCase($event)"></test-cases></v-tab-item>
    <v-tab-item><initsolution  :someData="question" v-on:ChangeInitSolution="updateInitSolution($event)"></initsolution></v-tab-item>


       <v-btn @click="validatetestcase" elevation="2"
  outlined color="#7776AC">Validate TestCase</v-btn>
</v-tabs>

  <br><br><br>
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

  
  </v-card>
</v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
               color="amber darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
               color="deep-purple accent-1" 
                text
                :disabled="validateresultrealtest.code==500||validateresultexampletest.code==500||validateresultrealtest.failures[0]!=null||!valid||validateresultexampletest.failures[0]!=null||test.testcases==''||test.exampletestcases==''"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
<v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="amber darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="deep-purple accent-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>


       </v-toolbar>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
        color="deep-purple accent-1"
      ></v-switch>

     
    </template>
    <template v-slot:expanded-item="{ headers, item }" 
    >
      <td :colspan="headers.length">
       TestSolution : {{item.tests}} 
       
      </td>
    </template>


   <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
    <v-avatar size="200" tile>
                    <v-img :src="require('~/assets/nodata.svg')"  >
     
     </v-img>
                  </v-avatar>
    </template>
  </v-data-table>
  <v-col></v-col>
   <v-btn
              color="amber darken-1"
              dark
              class="mb-3"
              @click="multipledelete"
            
              
            >
              Multiple Delete
            </v-btn>
<v-pagination
              v-model="page"
              class="my-4"
              :length="questionpage"
              @input="fetchnextpage"
              color="deep-purple accent-1" 
            ></v-pagination>

            
            </v-container>
        </v-main>
  </v-app>
</template>

<script>
import Navbarv1 from '../../components/Navbarv1.vue'
import { mapGetters,mapActions } from 'vuex'
export default {

  components: { Navbarv1 },
  props: {
   someData: String
},
  computed: 
mapGetters({
   user:'authentication/get',isLoggedIn:'authentication/isLoggedIn',datetime:'authentication/datetime'
 
  }),

      
    data(){
return{
   valid:false,
  validateresultrealtest:{
   errors:[],failures:[],successes:[],total:0,code:0
  },
  validateresultexampletest:{
   errors:[],failures:[],successes:[],total:0,code:0
  },
  isActive:false,
  search:'',
  dialogDelete: false,
  question: {
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
      },
    editedIndex: -1,
   dialog: false,tab:'',tab2:'',
questions:[
// mock

{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'1'},
{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'2'},
{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'3'},
{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'4'},
{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'5'},
{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'6'},
{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'7'},
{questiontopic:'asdasdasd',questiondescription:'asd',questiondifficulty:'b',questiondifficulty:'c',questionid:'8'}
]
,questionpage:0,questioninit:''
,page:1, search: '',
        headers: [
          {
            text: 'QuestionTopic',
            align: 'start',
            
            value: 'questiontopic',
          },
          { text: 'questiondifficulty', value: 'questiondifficulty'},
       
          {text: 'Actions', value: 'actions', sortable: false } 
            
          
     

        ]
        ,singleSelect: false,
        selected: []

,
  editedQuestion: {
      

      },
      
    
}

    },
    
    

  async fetch() {

    const questions = await this.$axios.$get('http://127.0.0.1:8000/showtenquestions/1')
    const questionpage= await this.$axios.$get('http://127.0.0.1:8000/questionpage/')
    this.questions = questions
    this.questionpage=questionpage
   
  }
  ,mounted(){
     this.overlay = false
  }
,methods:{
  multipledelete(){

if(this.selected[0]==null){
  alert("please select item to delete")
}else{
var result = confirm("Are you sure to delete these "+this.selected.length + " questions");
            if (result == true) {
                this.$store
        .dispatch("question/multipledeletequestion", this.selected).then((resp)=>
        this.$nuxt.refresh()
        )
            } else {
                
            }



}
  },


    editItem (item) {
        this.editedIndex = this.questions.indexOf(item)

        this.question = Object.assign({}, item) 
        this.dialog = true
       
      },

   fetchnextpage: function () {
   

        this.$store.dispatch('question/fetchnextpage',this.page)
       .then((resp) => this.questions=resp.data)
       .catch(err => console.log(err))

      },
   updateTestSolution (testsolution) {
     if(testsolution!=this.test.testsolution)this.valid=false;
      this.test.testsolution=testsolution
     if(this.test.testsolution=="") this.valid=false;
     // someValue
            }
     
     
,updateTestCase(testcase){
       if(testcase!=this.test.testcases)this.valid=false;
  this.test.testcases=testcase
  if(this.test.testcases=="") this.valid=false;
}
,updateExampleTestCase(exampletest){
         if(exampletest!=this.test.exampletestcases)this.valid=false;
  this.test.exampletestcases=exampletest
   if(this.test.exampletestcases=="") this.valid=false;
   

}
    ,updateInitSolution(initSolution){
  this.questioninit=initSolution
 


},
validatetestcase(){
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
,close () {
        this.dialog = false
        this.$nextTick(() => {
         
          this.editedIndex = -1
       
       
        })
      
      }
      ,deleteItem (item) {
        this.editedIndex = this.questions.indexOf(item)
        this.editedQuestion = Object.assign({}, item)
        this.dialogDelete = true
      
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
         
          this.editedIndex = -1
        })
      },
       deleteItemConfirm () {
         //delete question
      
       this.$store.dispatch('question/deleteonequestion',this.editedQuestion.questionid)
      
       .then((resp) =>   this.fetchnextpage())
       .catch(err => console.log(err))
    
     

        this.closeDelete()
      },
      save () {
        if (this.editedIndex > -1) {
          let data = [this.question,this.test,this.questioninit];
          this.$store
        .dispatch("question/updatequestion", data).then((resp)=>
        this.fetchnextpage())
      
     
          this.close();
        } else {
         //add new question


  if(this.question.questiontopic==""||this.question.questiondifficulty==""){
        alert("please Fill All Data!")
      }
      else{
        if(this.questionpage==0){
let data = [this.question, this.test,this.questioninit];

      this.$store
        .dispatch("question/createquestionwithtest", data).then((resp)=>
        this.fetchnextpage()
      
        )
       this.questionpage=1;
       this.page=1;

       
        this.close();
        
        }else{
          
if(this.questions[9]!=null&&this.page==this.questionpage){
   let data = [this.question, this.test,this.questioninit];

      this.$store
        .dispatch("question/createquestionwithtest", data).then((resp)=>
         this.$nuxt.refresh()
        ).then(this.questionpage+=1).then(this.page=this.questionpage)
        .then((resp) =>   this.fetchnextpage())
    
        this.close();
}else{

  
   let data = [this.question, this.test,this.questioninit];

      this.$store
        .dispatch("question/createquestionwithtest", data).then((resp)=>
         this.$nuxt.refresh()
        ).then(this.page=this.questionpage)
        .then((resp) =>   this.fetchnextpage())
    
        this.close();
}
        }
        }

     
        

    

        }
        
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