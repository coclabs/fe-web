
<template>
<v-app>
 
 </v-app>

</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import Navbarv1 from '../components/Navbarv1.vue';


export default {
  components: { Navbarv1 },


beforeCreate(){

var token
     token = this.$cookies.get('token');
    // If the user is not authenticated
    if (!token) {
    
        this.$router.push("authen/login")
    }
var role =this.$cookies.get('role')

if(role=="Teacher"){
    this.$router.push("/indexteacher")
}else{
    this.$router.push("/indexstudent")
}



}
  ,
data(){
return {
 
}
},
  computed: mapGetters({
   user:'authentication/getauthenticated',isLoggedIn:'authentication/isLoggedIn',datetime:'authentication/datetime'
 
  }),
  methods: {
...mapActions({
signIn:'authentication/signIn'
})
      
  
  }
  // this.$store
  //       .dispatch("question/validatetestcase", data)
  //       .then(resp=>(
        
  //         this.validateresultrealtest=JSON.parse(resp.data
          
          
  //         ))
  }
</script>

<style>

</style>