<template>
  <!-- navbarfor student -->
  <div>
    <!-- <v-navigation-drawer
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
            <v-btn text v-bind="attrs" v-on="on" v-bind:href="s">
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
    </v-app-bar> -->

    <v-navigation-drawer
      dark
      app
      class="deep-purple accent-1"
      width="100"
      v-model="drawer"
    >
      <div class="text-center mt-5">
        <v-btn text color="white" x-small href="/" class="mt-5">
          <v-img
            :src="require('~/assets/logococ-3.jpg')"
            max-height="60px"
            max-width="60px"
            alt="logo"
            contain
            eager
            class="app-logo me-1"
          ></v-img>
        </v-btn>
        <!-- <v-btn fab color="white" x-large href="/">
             <v-list-item-avatar class="mx-5" size="60">
         <v-img :src="require('~/assets/logococ-3.jpg')" ></v-img>
        </v-list-item-avatar>
               
           </v-btn> -->
      </div>

      <v-list flat class="mt-5">
        <v-list-item-group v-model="selectedItem" color="black">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router
            :to="item.route"
            active-class="border"
            class="ml-2 my-3"
            :ripple="false"
          >
            <b></b>
            <b></b>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ item.title }}</span>
            </v-tooltip>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="rgba(0,0,0,0)" app flat absolute>
      <v-app-bar-nav-icon
        class="brown-text d-lg-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              href="/course/classroomstudent"
            >
              Course
            </v-btn>
          </template>
          <span>Course</span>
        </v-tooltip>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-btn icon small class="ma-2">
        <v-icon> mdi-bell-outline </v-icon>
      </v-btn>
      <v-menu
        offset-y
        left
        nudge-bottom="14"
        min-width="230"
        content-class="user-profile-menu-content"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            rounded
            dark
            v-bind="attrs"
            v-on="on"
            color="deep-purple accent-1"
          >
            <span>{{ user.firstname }} {{ user.lastname }}</span>
            <v-avatar size="30" class="ml-2">
              <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
            </v-avatar>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link>
            <v-list-item-icon class="me-2">
              <v-icon size="22"> mdi-account </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="logout">
            <v-list-item-icon class="me-2">
              <v-icon> mdi-logout </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Log-out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async fetch() {
    this.s = "/" + this.$cookies.get("id") + "/classroomstudent";
  },
  mounted() {
    this.user = this.$cookies.get("user");
  },
  components: {},

  computed: mapGetters({
    // user: "authentication/finishauthenticated",
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
      s: "",
      user: {},
      drawer: true,
      items: [
        {
          title: "Courseroom",
          icon: "mdi-post-outline",
          route: "/" + this.$route.params.course + "/coursepagestudent",
        },
        {
          title: "Assignment",
          icon: "mdi-bag-personal-outline",
          route: "/" + this.$route.params.course + "/assignmentstudent",
        },
        {
          title: "AssignmentSubmmited",
          icon: "mdi-file-cabinet",
          route: "/" + this.$route.params.course + "/assignmentsubmitted",
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