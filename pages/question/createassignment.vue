<template>
<v-app>
  
     <Navbarv1/>
     <v-main  style="background-color: #EDE7F6;">
       <v-container class="pa-6 md-auto"
       >
          <v-card-text >
           
                <v-row>
         <v-card   style="border: 2px solid #212121; ">


    
   
    <v-row no-gutters >
      <v-col
      
       
       >
        <v-card
          class="pa-6"
          outlined
          tile
          height="837"
        >
        <!-- 1.1 -->
         <template >
     

 <div >
 <h2>Create Assignment </h2>
  

<br>

      <h3>Add Assignment</h3>
    Assignment Name 
    
<v-text-field
style="width:500px"
        v-model="assignment.assignmentname"
        filled
        class="textfield"
        required
      ></v-text-field>
       <v-card class="pa-2 font-weight-bold rounded-xl"
      style="border: 1px solid #212121; "
      >     
<v-tabs   v-model="tab" color="#576dc6" >
<v-tab >Assignment Descirption</v-tab>
 
<v-tab>Preview</v-tab>


 <v-tab-item > 
   <div class=" me3 textfield font-weight-light">
   <v-textarea class="textfield"
       v-model="assignment.assignmentdescription"
        filled
        name="input-7-4"
    extension-height=8
        required
        rows=6
        no-resize=true
        oninput="if(Number(this.rows) == 8) this.rows = 8;"
      ></v-textarea>
   </div>
       </v-tab-item>
    <v-tab-item >
     <v-responsive
    class="overflow-y-auto"
    max-height="200"
  >
    <div class=" me3 pa-6 text-left">
      <v-card-text v-html="$md.render(assignment.assignmentdescription)" style="width:300px"> </v-card-text>
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
</v-tab-item >
    
    

      
</v-tabs>
       </v-card>


<v-col></v-col>

      
Max Score
<v-slider
      v-model="assignment.maxpossiblescore"
     
       thumb-label="always"
       style="width:500px"
       color="#576dc6"

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




<br><br>
      <v-btn color="#7776AC"  dark @click="submit">Create Assignment</v-btn>
   
 </div>
         </template>


        </v-card>
      </v-col>
     
<v-col cols="12"
        md="6" >
    <v-card 
          class="pa-6"
          height="837"
          
        >
        <div>
          <h2>Add Question For Your Assignment</h2>

  <v-card-title>
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
    style="border: 1px solid #212121; "
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
    
    
 

    




    
   
    
  
  
     
  

 
</v-row>

    </v-card-text>
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

import Navbarv1 from '../../components/Navbarv1.vue'


    export default {
      components: { minisidenav,  TestCases,  Testssolution, Exampletestcases, Initsolution,Navbarv1,},
        data(){
return {
  isActive: false,
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
    
      const questions = await this.$axios.$get('http://127.0.0.1:8000/showtenquestions/1')
    const questionpage= await this.$axios.$get('http://127.0.0.1:8000/questionpage/')
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
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&family=Prompt:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap');


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