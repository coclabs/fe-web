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
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
       TestSolution : {{item.tests}} 
      </td>
    </template>


  
  </v-data-table>

<v-pagination
              v-model="page"
              class="my-4"
              :length="questionpage"
              @input="fetchnextpage"
            ></v-pagination>
            </v-card>
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
export default {
    data(){
return{
questions:[]
,questionpage:0
,page:1, search: '',
        headers: [
          {
            text: 'QuestionTopic',
            align: 'start',
            
            value: 'questiontopic',
          },{ text: 'questiondescription', value: 'questiondescription' },
          { text: 'questiondifficulty', value: 'questiondifficulty'},
          {text:'questionid' ,value:'questionid'} 
            
          
     

        ]
        ,singleSelect: false,
        selected: [], overlay: true


}

    },
    methods:{

   fetchnextpage: function () {

        this.$store.dispatch('question/fetchnextpage',this.page)
       .then((resp) => this.questions=resp.data)
       .catch(err => console.log(err))
      }
   }
    
,
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

}
</script>

<style>

</style>