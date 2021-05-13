<template>
  <v-app>

<v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
           <v-select
        :items="theme"
        :menu-props="{ top: true, offsetY: true }"
        label="Select Theme"
        v-model="selecttheme"
        
      ></v-select>
        </v-col>
      </v-row>
    </v-container>
      </v-app>
</template>

<script>
export default {
data(){
return {answer:'',selecttheme:'twilight', theme: ['twilight','gob']}
        }

}


// aceEditor.setTheme("ace/theme/clouds");
// add theme to user theme
</script>

<style>

</style>