<template>
<v-app>
    
<v-textarea 
        v-model="data"
        label="Description"
        maxlength="3000"
        full-width
        single-line
      ></v-textarea>  <h1>Preview:</h1><div v-html="$md.render(data)" ></div>

</v-app>
</template>


<script>
export default {
data(){
    return{
        data:''
    }
}
}
</script>

<style>

</style>