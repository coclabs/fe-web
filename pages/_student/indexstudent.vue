
<template>
  <v-app style="background-color: #EFE5FD">
    <Navbarv2 />

    <v-main class="mx-2 " style="background-color: #EFE5FD">
      <v-row >
        <v-col cols="12" sm="8">
          <v-card
            class="mx-4 rounded-xl pa-4"
    style="border: 1px solid #b388ff"
     color="" flat
          >
          <v-row>
              <v-col cols="12" sm="8">
            <v-list-item three-line>
              <v-list-item-content >
                <v-list-item-title class="text-h4 mb-1">
                  Welcome Student
                </v-list-item-title>
                <v-list-item-subtitle >Welcome back
                  {{ user.firstname }}  {{ user.lastname }}. We are glad here.<br>
          Inspire the best work in people.enabling them to acheive 
                </v-list-item-subtitle>
                <v-list-item-subtitle >thier goals.
                </v-list-item-subtitle>
              </v-list-item-content>
              </v-list-item>
               <v-card-actions>
      <v-btn
      class="px-3"
        color="amber lighten-2"
       rounded
      >
        View Details
      </v-btn>
    </v-card-actions>
              </v-col>
              <v-col cols="12" sm="4">
              <v-avatar size="250" tile class="mt-n16 hidden-sm-and-down">
                <v-img :src="require('~/assets/learningkidanimate.svg')"></v-img
              ></v-avatar>
            
              </v-col>
          </v-row>
          </v-card>
            <v-toolbar flat color="rgba(0,0,0,0)" dense class="my-1">
    <v-toolbar-title >Course</v-toolbar-title>
     <v-icon  color="#B388FF"> mdi-book </v-icon>
    <v-spacer></v-spacer>
     <nuxt-link
                :to="{
                  name: 'student-classroomstudent',
                  params: { student: this.$route.params.student },
                }"
                class="text-decoration-none white--text"
              >
    <span  ><v-btn text class="grey--text" href="/classroomstudent">
              <v-icon dark left> mdi-arrow-right </v-icon>view all</v-btn
            ></span>
             </nuxt-link>
  </v-toolbar>
  <v-row class="mt-n5">
        <v-slide-group v-model="model"  md="8" sm="6" lg="8" show-arrows>
          <v-slide-item v-for="card in items" :key="card.title">
            <v-card class="ma-6 rounded-xl" min-width="365" >
              <v-img
                class="white--text deep-purple lighten-3 align-end"
                height="200px"
                :src="card.imagesrc"
              >
                <v-col class="text-right mb-16 pb-8 pr-0">
                  <v-menu bottom offset-x>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn dark icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item v-for="(item, i) in create" :key="i">
                        <v-list-item-title
                          ><v-icon>mdi-delete</v-icon
                          >{{ item.title }}</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>

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

        </v-col>
          <v-col cols="12" md="4">
           <v-card
    class=" rounded-xl pa-4"
    
    color="#FFFFFF" flat
  >
          <v-card
            color=" rounded-xl "
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
          <div class="mt-4">
           <v-card color="white" class="rounded-xl mx-4 pa-10" flat>
    <div class="text-center">
      <span>Enjoy<strong> your</strong> course teach and learn fun</span>
     <v-avatar size="180" tile >
      <v-img :src="require('~/assets/team.svg')" ></v-img>
      </v-avatar>
    </div>
    
 </v-card>
          </div>
           </v-card>
        </v-col>
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
      process.env.baseUrl + "/" +
        this.$route.params.student +
        "/getallcoursestudent"
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
