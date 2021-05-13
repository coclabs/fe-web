<template>

<div><h1>Hello</h1>
<button v-on:click="updateTitle">Update title</button>

</div>
</template>

<script>
export default {
    name:'Child',
  methods: {
    onClickButton (event) {
      this.$emit('clicked', 'someValue')
    },
    updateTitle(){
       this.$emit('changeTitle', 'someValue')
    }

  }
}
</script>

<style>

</style>