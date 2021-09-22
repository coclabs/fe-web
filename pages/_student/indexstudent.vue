
<template>
  <v-app style="background-color: #efe5fd">
    <Navbarv2 />

    <v-main>
      <v-row wrap class="my-2 mx-2">
        <v-col md="8" sm="6" lg="8" class="px-16">
          <v-card
            max-height="250"
            color="amber lighten-2"
            class="pa-2 rounded-xl hidden-sm-and-down"
          >
            <v-list-item three-line>
              <v-list-item-content class="ms-8 hidden-sm-and-down">
                <v-list-item-title class="text-h4 text-center">
                  Welcome Student <br />
                  {{ user.username }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-h6 text-center">
                  firstname: {{ user.firstname }} lastname: {{ user.lastname }}
                </v-list-item-subtitle>
                <div class="text-overline mb-2"></div>
              </v-list-item-content>

              <v-list-item-avatar tile size="250" class="mx-1">
                <v-img :src="require('~/assets/Learningkidanimate.svg')"></v-img
              ></v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card
            color=" rounded-xl"
            class="mx-auto"
            style="border: 1px solid #b388ff"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4"></div>
                <v-list-item-title class="text-h5 mx-3">
                  Play Ground
                </v-list-item-title>
                <v-list-item-subtitle class="mx-3"
                  >Play and learning coding python
                  language</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar tile size="160">
                <v-img :src="require('~/assets/pythonclass2.svg')"></v-img
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions class="mx-3 mb-1">
              <v-btn
                rounded
                dark
                color="deep-purple accent-1"
                href="/playground/_assignmentid"
              >
                Play
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="4" class="px-16">
          <v-icon large color="#B388FF"> mdi-book </v-icon>
          <strong>Course</strong>
        </v-col>
        <v-col class="text-right px-8" md="4" offset-md="4">
          <div>
            <div>
              <nuxt-link
                :to="{
                  name: 'student-classroomstudent',
                  params: { student: this.$route.params.student },
                }"
                class="text-decoration-none white--text"
              >
                <v-btn text href="/classroomstudent">
                  <v-icon dark left> mdi-arrow-right </v-icon>view all</v-btn
                >
              </nuxt-link>
            </div>
          </div>
        </v-col>

        <v-slide-group v-model="model" class="pa-2 mx-8" show-arrows>
          <v-slide-item v-for="card in items" :key="card.title">
            <v-card class="ma-6 rounded-lg" min-width="400">
              <v-img
                class="white--text deep-purple lighten-3 align-end"
                height="200px"
                :src="card.imagesrc"
              >
                
                <nuxt-link
                  :to="{
                    name: 'course-coursepagestudent',
                    params: { course: card.courseid },
                  }"
                  class="text-decoration-none white--text"
                >
                  <v-card-title v-text="card.coursename"></v-card-title>
                </nuxt-link>
              </v-img>

              <v-card-subtitle class="pb-0"> </v-card-subtitle>

              <v-card-text class="text--primary">
                <span
                  class="d-inline-block text-truncate"
                  style="max-width: 150px"
                  v-text="card.coursedescription"
                >
                </span>

                <div></div>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navbarv2 from "../../components/Navbarv2.vue";

export default {
  components: { Navbarv2 },
  async fetch() {
    this.items = await this.$axios.$get(
      "http://127.0.0.1:8000/2/getallcoursestudent"
    );
  },

  beforeCreate() {
    var token;
    token = this.$cookies.get("token");
    // If the user is not authenticated
    if (!token) {
      this.$router.push("authen/login");
    }
  },
  data: () => ({
    items: [],
    me: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
    ],

   
    create: [{ title: "Delete" }],
    model: null,
    active: false,
  }),

  computed: mapGetters({
    user: "authentication/getauthenticated",
    isLoggedIn: "authentication/isLoggedIn",
    datetime: "authentication/datetime",
  }),
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