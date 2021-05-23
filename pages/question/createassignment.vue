<template>

  <div>
     
 <v-card  >


    
   
    <v-row no-gutters >
      <v-col
      style="height:1000px;"
       cols="6"
        md="4"
       >
        <v-card
          class="pa-10"
          outlined
          tile
          
        >
        <!-- 1.1 -->
         <template >
     

 <div >
 <h1>Create Assignment </h1>
  

<br>

      <h3>Add Assignment</h3>
    Assignment Name 
    
<v-text-field
style="width:500px"
        v-model="assignment.assignmentname"
        color="white white-2"
        class="textfield"
         background-color="grey lighten-2"
        required
      ></v-text-field>
      
<v-tabs   v-model="tab" color="red" >
<v-tab >Assignment Descirption</v-tab>
 
<v-tab>Preview</v-tab>


 <v-tab-item > <v-textarea class="textfield"
      style="width:500px"
        v-model="assignment.assignmentdescription"
        color="white white-2"
        background-color="grey lighten-2"
    extension-height=8
        required
        rows=6
        no-resize=true
        oninput="if(Number(this.rows) == 8) this.rows = 8;"
      ></v-textarea> </v-tab-item>
    <v-tab-item> <div v-html="$md.render(assignment.assignmentdescription)" style="maxheigth:200px"></div></v-tab-item>
    

      
</v-tabs>





      
Max Score
<v-slider
      v-model="assignment.maxpossiblescore"
     
       thumb-label="always"
       style="width:500px"
    ></v-slider>

VisibleAt   
<br>
<input type="datetime-local" id="meeting-time"
       v-model="assignment.visibleat" 
      >
<br>
AvaliableAt 
<br>
<input type="datetime-local" id="meeting-time"
       v-model="assignment.avaliableat" 
      >
<br>

DisibleAt  
<br>
<input type="datetime-local" id="meeting-time"
       v-model="assignment.disableat" 
      >

<br>
InVisibleAt
<br>
<input type="datetime-local" id="meeting-time"
       v-model="assignment.invisibleat" 
      >




<br><br><br>
      <v-btn @click="submit">Create Assignment</v-btn>
   
 </div>
         </template>


        </v-card>
      </v-col>
     
<v-col style="height:1000px;">
    <v-card
          class="pa-10"
          outlined
          tile
          
        >
        <div>
          <h1>Add Question For Your Assignment</h1>

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
          max-width="500px"
        >
        </v-dialog>

       </v-toolbar>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>

    

     
    </template>
   


  
  </v-data-table>

  
<v-pagination
              v-model="page"
              class="my-4"
              :length="questionpage"
              @input="fetchnextpage"
            ></v-pagination>
  
        </div>
    </v-card>
</v-col>


    </v-row>

   



 
  
    </v-card>
    
    
 
</div>
    




    
   
    
  
  
     
  

 
</template>

<script>


import minisidenav from '../../components/minisidenav.vue'


import TestCases from '../../components/TestCases.vue';
import Testssolution from '../../components/testssolution.vue';
import Exampletestcases from '../../components/exampletestcases.vue';
import Initsolution from '../../components/initsolution.vue';




    export default {
      components: { minisidenav,  TestCases,  Testssolution, Exampletestcases, Initsolution,},
        data(){
return {
  dialog:false,
  search:'',
   headers: [
          {
            text: 'QuestionTopic',
            align: 'start',
            
            value: 'questiontopic',
          },{ text: 'questiondescription', value: 'questiondescription' },
          { text: 'questiondifficulty', value: 'questiondifficulty'}
  
            
   ],
  questions:[
    //mock
  {questiontopic:'a',questiondescription:'b',questiondifficulty:'c'},{questiontopic:'a',questiondescription:'b',questiondifficulty:'c'}
,{questiontopic:'a',questiondescription:'b',questiondifficulty:'c'}

  ],singleSelect: false,
  activetab: 1,assignment: {
       assignmentdescription: "  ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16            ",
        assignmentname: "",
       
        maxpossiblescore:50
        ,visibleat:''
        ,invisibleat:'',
        disableat:''
        ,avaliableat:''
      ,
      },
      test: {
        testsolution: "",
        testcases: "",
        exampletestcases: "",
        testframework: "",
        testlanquage: ""
      },questionpage:0
,page:1
, selected: []

      
    ,spanVisible: true,
      tab: null,
        
   };
        
        
        }
        ,
         async fetch() {
    
      const questions = await this.$axios.$get('https://api.pdm-dev.me/showtenquestions/1')
    const questionpage= await this.$axios.$get('https://api.pdm-dev.me/questionpage/')
    this.questions = questions
    this.questionpage=questionpage
   
  }
        ,
             
        
        

        methods: {
             fetchnextpage() {

        this.$store.dispatch('question/fetchnextpage',this.page)
       .then((resp) => this.questions=resp.data)
       .catch(err => console.log(err))
      }
   ,
    submit() {
  if(this.selected[0]==null)alert ("please select question !!")

if(this.assignment.assignmentname.length<=0)alert("please input assignment name")

if(this.assignment.visibleat.length<=0)alert("please select visibleat")
if(this.assignment.invisibleat.length<=0)alert("please select invisibleat")
if(this.assignment.avaliableat.length<=0)alert("please select avaliableat")
if(this.assignment.disableat.length<=0)alert("please select disableat")

if(this.selected[0]!=null&&this.assignment.assignmentname.length>0&&this.assignment.invisibleat.length>0&&
this.assignment.avaliableat.length>0&&this.assignment.disableat.length>0){

      let data = [this.assignment,this.selected];
      this.$store
        .dispatch("assignment/createassignmentwithquestion", data)
        .then(resp => this.$router.push("/question/showallassignment"))
        .catch(err => console.log(err));
}
     
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