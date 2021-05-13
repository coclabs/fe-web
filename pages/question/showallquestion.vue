<template>
<v-app>
  <h1>Question</h1>
   <v-card>
    <v-card-title>
   <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
       
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
    class="elevation-1"
     hide-default-footer
    show-expand 
  >
    <template v-slot:top>
       <v-toolbar
        flat
      >

 <v-toolbar-title>Manage</v-toolbar-title>
   <v-divider
          class="mx-4"
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
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Question
            </v-btn>
          </template>
          <v-card >
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container >
                <v-row>
                                    
<v-tabs   v-model="tab2">
<v-tab >Question Description </v-tab>
     <v-tab>Preview</v-tab>
<v-tab>Question Topic</v-tab>
<v-tab>Question Difficulty</v-tab>


    

     




 <v-tab-item > 
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
     </v-tab-item>
     


    <v-tab-item> <div v-html="$md.render(question.questiondescription)" style="maxheigth:200px"></div></v-tab-item>
    
    <v-tab-item>
        <v-text-field
        v-model="question.questiontopic"
        color="white white-2"
        class="textfield"
         background-color="grey lighten-2"
        required
      ></v-text-field>
        </v-tab-item>
    <v-tab-item>

      <v-text-field
        v-model="question.questiondifficulty"
        color="white white-2"
         background-color="grey lighten-2"
    class="textfield"
        required
      ></v-text-field>

    </v-tab-item>
    <v-tab-item></v-tab-item>

</v-tabs>
                </v-row>
                <v-row>
                  
<v-tabs   v-model="tab">
<v-tab >TestSolution</v-tab>
 
<v-tab>ExampleTestCases</v-tab>
<v-tab>TestCase</v-tab>
<v-tab>InitSolution</v-tab>


 <v-tab-item > <testssolution :someData="question.questiondescription"  v-on:ChangeTestSolution="updateTestSolution($event)"></testssolution> </v-tab-item>
    <v-tab-item> <exampletestcases :someData="question.questiondescription" v-on:ChangeExampleTestCase="updateExampleTestCase($event)"></exampletestcases> </v-tab-item>
    <v-tab-item><test-cases :someData="question" v-on:ChangeTestCase="updateTestCase($event)"></test-cases></v-tab-item>
    <v-tab-item><initsolution :someData="question" v-on:ChangeInitSolution="updateInitSolution($event)"></initsolution></v-tab-item>


       <v-btn @click="spanVisible=false">Validate TestCase</v-btn>
</v-tabs>

  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
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
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>


       </v-toolbar>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>

     
    </template>
    <template v-slot:expanded-item="{ headers, item }">
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
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
<v-pagination
              v-model="page"
              class="my-4"
              :length="questionpage"
              @input="fetchnextpage"
            ></v-pagination>

            </v-card>
        
  </v-app>
</template>

<script>
export default {
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Question' : 'Edit Item'
      }},
    data(){
return{
  
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
,questionpage:0
,page:1, search: '',
        headers: [
          {
            text: 'QuestionTopic',
            align: 'start',
            
            value: 'questiontopic',
          },{ text: 'questiondescription', value: 'questiondescription' },
          { text: 'questiondifficulty', value: 'questiondifficulty'},
          {text:'questionid' ,value:'questionid'},
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
    console.log(this.page)
    const questions = await this.$axios.$get('http://127.0.0.1:8000/showtenquestions/1')
    const questionpage= await this.$axios.$get('http://127.0.0.1:8000/questionpage/')
    this.questions = questions
    this.questionpage=questionpage
   
  }
  ,mounted(){
     this.overlay = false
  }
,methods:{
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
      this.test.testsolution=testsolution
        console.log(this.test.testsolution) // someValue
            }
     
     
,updateTestCase(testcase){
  this.test.testcases=testcase
  console.log(this.test.testcases)
}
,updateExampleTestCase(exampletest){
  this.test.exampletestcases=exampletest
  console.log(this.test.exampletestcases)
}
    ,updateInitSolution(initSolution){
  this.question.questioninit=initSolution
 

}
,close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      }
      ,deleteItem (item) {
        this.editedIndex = this.questions.indexOf(item)
        this.editedQuestion = Object.assign({}, item)
        this.dialogDelete = true
        console.log(this.editedQuestion)
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
          let data = [this.question,this.test];
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
        
      let data = [this.question, this.test,this.initsol];
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
</script>

<style>

</style>