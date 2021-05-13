<template>
  <div>
      <h1>{{title}}</h1>
  <Child v-on:changeTitle="updateTitle($event)"></Child>

</div>
</template>

<script>
import Child from '../../components/Child.vue'
export default {
  components: { Child },
  data(){
return{
    title:'sssssssssssss'
}
  },
  methods: {
    updateTitle (title) {
      this.title=title // someValue
    }
  }
}
</script>

<style>

</style>
