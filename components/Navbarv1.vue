<template>
  <!-- navbarfor teacher -->
  <div>
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
              href="/course/classroomteacher"
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
  components: {},
  mounted() {
    this.user = this.$cookies.get("user");
  },

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
      user: {},
      selectedItem: 0,
      drawer: true,
      items: [
        {
          title: "Courseroom",
          icon: "mdi-account-group",
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
    };
  },
};
</script>
<style>
.border {
  background: #efe5fd;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  text-decoration: none;
}
.border b:nth-child(1) {
  position: absolute;
  top: -20px;
  height: 20px;
  width: 83%;
  background: #efe5fd;

  display: none;
}
.border b:nth-child(1)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: #b388ff;
}
.border b:nth-child(2) {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 83%;
  background: #efe5fd;
  display: none;
}
.border b:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 20px;
  background: #b388ff;
}
.border b:nth-child(1),
.border b:nth-child(2) {
  display: block;
}
</style>

