<template>
  <div>
<h1>{{someData}}</h1>

  </div>
</template>

<script>
export default {
    data(){
        return {someData:"asds"}
    },
props: ['someData']

}

</script>

<style>

</style>