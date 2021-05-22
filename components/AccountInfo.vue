<template>
<div>
  <h1>helo</h1>
  {{username}}
  </div>
</template>

<script>
export default {
 props: {
   username: String
 },

 watch:{
         
        username: function(newVal) { 
console.log(newVal)
        }}
}
</script>

<style>

</style>