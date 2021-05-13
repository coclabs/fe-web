<template>
  <v-app >

    <v-card
      class="d-flex mb-6"
    
      
      tile
    >
      <v-card
        
        class="pa-2"
        outlined
        tile
      >
       <minisidenav/>
      </v-card>
      
      <v-card
        
        class="pa-2"
        outlined
        tile
      >
         <template>
     

 <div>
 <h1>Create Question With Test</h1>
    <v-form @submit.prevent="submit">
      <h3>Add Question</h3>

      <v-text-field
        v-model="question.questiondescription"
        color="purple darken-2"
        label="questiondescription"
        
        required
        
      ></v-text-field>

      <v-text-field
        v-model="question.questiontopic"
        color="purple darken-2"
        label="questiontopic"
        required
      ></v-text-field>

      <v-text-field
        v-model="question.questiondifficulty"
        color="purple darken-2"
        label="questiondifficulty"
        required
      ></v-text-field>

      <h3>Add Test</h3>

      <!-- testsolution:str
    testcases:str
    exampleTestCases:str
    testlanquage:str
    testframework:str -->
      <v-textarea
        v-model="test.testsolution"
        label="testsolution"
        maxlength="3000"
        full-width
        single-line
      ></v-textarea>

      <v-textarea 
        v-model="test.testcases"
        label="testcases"
        maxlength="3000"
        full-width
        single-line
      ></v-textarea>

      <v-textarea
        v-model="test.exampletestcases"
        label="exampletestcase"
        
        maxlength="3000"
        full-width
        single-line
      ></v-textarea>

      <v-text-field
        v-model="test.testlanquage"
        color="pink darken-2"
        label="testlanquage"
        required
      ></v-text-field>
      <v-text-field
        v-model="test.testframework"
        color="pink darken-2"
        label="testframework"
        required
      ></v-text-field>

      <div>
        <v-btn type="submit">Create</v-btn>
      </div>
    </v-form>
    </div>
     </template>
      </v-card>
    </v-card>
     <v-card >


    
   <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          First, but unordered
        </v-card>
      </v-col>
      <v-col order="12">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          Second, but last
        </v-card>
      </v-col>
      <v-col order="1">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          Third, but first
        </v-card>
      </v-col>
    </v-row>
  </v-container>

   
      </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    authStatus: "authentication/authStatus"
  }),
  data() {
    return {
      question: {
        questiondescription: "",
        questiontopic: "",
        questiondifficulty: ""
      },
      test: {
        testsolution: "",
        testcases: "",
        exampletestcases: "",
        testframework: "",
        testlanquage: ""
      }
    };
  },
  methods: {
    submit: function() {
      let data = [this.question, this.test];
      this.$store
        .dispatch("question/createquestionwithtest", data)
        .then(resp => this.$router.push("/question/showallquestion"))
        .catch(err => console.log(err));
    }
  }
};
</script>


