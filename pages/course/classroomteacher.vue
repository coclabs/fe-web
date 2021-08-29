<template>
<v-app>
<Navbarv3/>
<v-main style="background-color: #efe5fd;">
      <v-container>
        <v-row class="d-flex justify-end ma-2">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
    >
      <template v-slot:activator="{ on, attrs }">
       <v-btn
     
          color="amber darken-1"
          dark
          v-bind="attrs"
          v-on="on"
           class="rounded-xl"
            
        >
           <v-icon  v-if="fab">
            mdi-close
          </v-icon>
          <v-icon left v-else>
            mdi-account-multiple-plus
          </v-icon>
          create course
        </v-btn>
      </template>
      <v-card class="rounded-lg">
        <v-card-title class="text-h5 ">
         Create Course
        </v-card-title>

        <v-col
          cols="12"
        >
         <v-text-field
           color="#7776AC"
             label="Course Code"
            filled
          ></v-text-field>
          <v-text-field
           color="#7776AC"
             label="Course Name"
            filled
          ></v-text-field>
          <v-text-field
           color="#7776AC"
             label="Course Year"
            filled
          ></v-text-field>
          <v-text-field
           color="#7776AC"
             label="Course Description"
            filled
          ></v-text-field>
        </v-col>

        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="amber darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="#7776AC"
            text
            @click="dialog = false"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
        <v-col  md="4"
        offset-md="8">
        <v-text-field
       background-color="white"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        color="black"
        outlined
      ></v-text-field>
        </v-col>
    
        <v-row>
          <v-col
           v-for="(item, i) in searching"
        :key="i"
          :cols="12"
          :md="4"
          class="mt-1"
        >
        
        
        <v-hover v-slot="{ hover }">
       
         
          <v-card
    class="mx-auto rounded-xl"
    max-width="400"
    :elevation="hover ? 5 : 2"
              :class="{ 'on-hover': hover }"
               href="/course/coursepageteacher"
  >
    <v-img
    
    class="white--text deep-purple lighten-2 align-end"
      height="200px"
       :src="item.src"   
    >
      <v-card-title v-text="item.coursename"></v-card-title>
    </v-img>

    

    <v-card-text class="text--primary" >
      <span
      class="d-inline-block text-truncate"
      style="max-width: 150px;"
      v-text="item.coursedescription"
    >
      
    </span>

      <div></div>
    </v-card-text>

    
  </v-card>
        </v-hover>
        
        </v-col>
        </v-row>
      </v-container>
    </v-main>


</v-app>
</template>


<script>
import Navbarv3 from '../../components/Navbarv3.vue'
export default {
  data: () => ({ drawer: null ,
   dialog: false,
   
  items: [
        {
          
          src: require('~/assets/pythonclass.svg'),
          coursename : 'python101',
          coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
        },
        {
         
          src: require('~/assets/pythonclass2.svg'),
          coursename : 'python102',
          coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
        },
         {
          
          src: require('~/assets/pythonclass.svg'),
          coursename : 'python103',
         coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
        },
        {
        
          src: require('~/assets/pythonclass.svg'),
          coursename : 'python104',
          coursedescription:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.',
        },
        
         
      ],
      create: [
        { title: 'Join class' },
        { title: 'Create class' },
      ],
  
  search: '',
  
  }),
    components: { Navbarv3 },
    computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.coursename.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
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