<template>
<div>
    <v-tabs>
  <v-tab>Yourcode</v-tab>
<v-tab-item><initsolution v-on:ChangeInitSolution="updateInitSolution($event)"></initsolution></v-tab-item>
    </v-tabs>
</div>
</template>

<script>
export default {
methods:{
    updateInitSolution(initSolution){
  
// console.log(this.question.initsolution)
}
}
}
</script>

<style>

</style>