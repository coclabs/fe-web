
<template>
  <v-app> </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: mapGetters({
    user: "authentication/getauthenticated",
    isLoggedIn: "authentication/isLoggedIn",
    datetime: "authentication/datetime",
  }),

  beforeCreate() {
    var token;
    token = this.$cookies.get("token");
    // If the user is not authenticated
    if (!token) {
      this.$router.push("authen/login");
    }
    var role = this.$cookies.get("role");
    var id = this.$cookies.get("id");

    if (role == "Teacher") {
      this.$router.push("" + id + "/indexteacher");
    } else {
      this.$router.push("" + id + "/indexstudent");
    }
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions({
      signIn: "authentication/signIn",
    }),
  },
  // this.$store
  //       .dispatch("question/validatetestcase", data)
  //       .then(resp=>(

  //         this.validateresultrealtest=JSON.parse(resp.data

  //         ))
};
</script>

<style>
</style>