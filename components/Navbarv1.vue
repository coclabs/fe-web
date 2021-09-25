<template>
  <!-- navbarfor teacher -->
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      clipped
      fixed
      style="border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important"
      color="white"
      class="hidden-sm-and-down"
    >
      <v-divider class="mx-2 my-2"></v-divider>

      <v-list shaped nav dense>
        <v-list-item-group v-model="selectedItem" color="deep-purple accent-1">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router
            :to="item.route"
            active-class="border"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list>
    </v-navigation-drawer>
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
        {
          title: "Courseroom",
          icon: "mdi-post-outline",
          route: "/" + this.$cookies.get("courseid") + "/coursepageteacher",
        },
        {
          title: "createquestion",
          icon: "mdi-file-document-edit-outline",
          route:
            "/" + this.$cookies.get("courseid") + "/question/createquestion",
        },
        {
          title: "showallquestion",
          icon: "mdi-file-cabinet",
          route:
            "/" + this.$cookies.get("courseid") + "/question/showallquestion",
        },
        {
          title: "createassignment",
          icon: "mdi-file-document-edit-outline",
          route:
            "/" + this.$cookies.get("courseid") + "/question/createassignment",
        },
        {
          title: "showallassignment",
          icon: "mdi-bag-personal-outline",
          route:
            "/" + this.$cookies.get("courseid") + "/question/showallassignment",
        },
        {
          title: "invite/remove students",
          icon: "mdi-account-multiple-plus-outline",
          route: "/" + this.$cookies.get("courseid") + "/teacherselectstudent",
        },
        {
          title: "AssignmnetAnalytic",
          icon: "mdi-post-outline",
          route: "/" + this.$cookies.get("courseid") + "/allassignmentteacher",
        },
      ],
      mini: true,
    };
  },
};
</script>
<style>
.border {
  border-left: 4px solid #b388ff;
}
</style>