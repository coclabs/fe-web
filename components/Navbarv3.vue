<template>
  <!-- navbarfor teacher -->
  <div>
    <v-app-bar
      clipped-left
      clipped-right
      app
      flat
      fixed
      color="deep-purple accent-1"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" href="/">
            <v-toolbar-title class="text-uppercase black--text">
              <span class="font-weight-light">Call Of</span>
              <span>Code</span></v-toolbar-title
            >
          </v-btn>
        </template>
        <span>Dashboard</span>
      </v-tooltip>

      <v-divider class="mx-4" vertical inset></v-divider>
      <v-toolbar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              href="/course/classroomteacher"
            >
              Course
            </v-btn>
          </template>
          <span>Course</span>
        </v-tooltip>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <span class="font-weight-light">Session Expires:{{ datetime }}</span>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-divider vertical></v-divider>
        <v-btn text color="#C6B9FF" @click="logout">
          <span>Sign Out</span>
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},

  computed: mapGetters({
    user: "authentication/finishauthenticated",
    isLoggedIn: "authentication/isLoggedIn",
    datetime: "authentication/datetime",
  }),

  methods: {
    logout() {
      this.$store
        .dispatch("authentication/logoutteacher")
        .then(() => this.$router.push("/authen/login"));
    },
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-home-city", route: "/indexteacher" },
      ],
      mini: true,
    };
  },
};
</script>