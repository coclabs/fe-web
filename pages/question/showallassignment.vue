<template>
<v-app>
  <h1>Assignment</h1>
   <v-card>
    <v-card-title>
   <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
       
      ></v-text-field>
    </v-card-title>
  <v-data-table dark
    v-model="selected"
    :headers="headers"
    :items="assignments"
    :single-select="singleSelect"
    item-key="assignmentid"
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
    <!-- <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
       TestSolution : {{item.tests}} 
      </td>
    </template> -->


  
  </v-data-table>
<v-pagination
              v-model="page"
              class="my-4"
              :length="assignmentpage"
              @input="fetchnextpage"
            ></v-pagination>
            </v-card>
            
  </v-app>
</template>

<script>
export default {
    data(){
return{
assignments:[
  {assignmentname:'a',assignmentdescription:'b'},  {assignmentname:'a',assignmentdescription:'b'}
  ,  {assignmentname:'a',assignmentdescription:'b'},  {assignmentname:'a',assignmentdescription:'b'},  {assignmentname:'a',assignmentdescription:'b'}
]
,assignmentpage:0
,page:1, search: '',
        headers: [
          {
            text: 'AssignmentName',
            align: 'start',
            
            value: 'assignmentname',
          },{ text: 'AssignmentDescription', value: 'assignmentdescription' },

       
       
            
          
     

        ]
        ,singleSelect: false,
        selected: []


}

    },
    methods:{

   fetchnextpage: function () {

        this.$store.dispatch('assignment/fetchnextpage',this.page)
       .then((resp) => this.assignments=resp.data)
       .catch(err => console.log(err))
      }
   }
    
,
  async fetch() {
    console.log(this.page)
    const assignments = await this.$axios.$get('http://127.0.0.1:8000/showtenassignment/1')
    const assignmentpage= await this.$axios.$get('http://127.0.0.1:8000/assignmentpage/')
   this.assignments=assignments
    this.assignmentpage=assignmentpage
   
  }
  ,mounted(){
     this.overlay = false
  }

}
</script>

<style>

</style>