<template>
  <v-app>
    <Navbarv5 />

    <v-main style="background-color: #efe5fd">
      <v-col cols="12" class="px-16 mt-6">
        <h2>Assignment</h2>
      </v-col>

      <v-col v-for="(item, i) in me2" :key="i" cols="12">
        <div class="text--primary px-16">
          <!-- Using the elevation prop -->

          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                class="mx-auto rounded-lg"
                style="border-left: 8px solid #b388ff"
              >
                <v-list subheader two-line>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-btn
                        color="amber darken-1"
                        dark
                        fab
                        @click="changehref(item)"
                      >
                        <v-icon> mdi-folder </v-icon>
                      </v-btn>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.assignmentname"
                      ></v-list-item-title>

                      <v-list-item-subtitle v-text="n"></v-list-item-subtitle>
                      <v-dialog
                        v-model="dialog"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                        scrollable
                      >
                        <v-card tile>
                          <v-toolbar flat dark color="deep-purple accent-1">
                            <v-btn icon dark @click="dialog = false">
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title>Assignment</v-toolbar-title>
                            <v-spacer></v-spacer>
                          </v-toolbar>
                          <v-card-text>
                            <v-list two-line subheader>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-col>
                                    <v-list-item-title
                                      ><h2 v-text="assign.assignmentname"></h2>
                                    </v-list-item-title>
                                  </v-col>
                                  <v-col
                                    class="text-center px-16"
                                    md="4"
                                    offset-md="4"
                                  >
                                    <v-list-item-title
                                      ><h4>
                                        Point :{{ assign.maxpossiblescore }}
                                      </h4>
                                    </v-list-item-title></v-col
                                  >
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-8">
                                <v-list-item-content>
                                  <v-list-item-title
                                    >Description</v-list-item-title
                                  >
                                  <v-col class="px-0">
                                    <v-card
                                      class="pa-2 font-weight-bold rounded-xl"
                                      style="border: 2px solid #212121"
                                    >
                                      <v-tabs v-model="tab" color="#7776AC">
                                        <v-tab>Preview</v-tab>
                                        <v-tab-item>
                                          <v-responsive
                                            class="overflow-y-auto"
                                            max-height="400"
                                          >
                                            <div class="me3 pa-6 text-left">
                                              {{ assign.assignmentdescription }}
                                            </div>

                                            <v-responsive
                                              height="200vh"
                                              class="text-center pa-2"
                                            >
                                              <v-responsive
                                                min-height="50vh"
                                              ></v-responsive>
                                              <div
                                                class="text-center body-2 mb-12"
                                              ></div>

                                              <v-lazy
                                                v-model="isActive"
                                                :options="{
                                                  threshold: 0.5,
                                                }"
                                                min-height="200"
                                                transition="fade-transition"
                                              >
                                                <v-card
                                                  class="mx-auto"
                                                  max-width="336"
                                                >
                                                </v-card>
                                              </v-lazy>
                                            </v-responsive>
                                          </v-responsive>
                                        </v-tab-item>
                                      </v-tabs>
                                    </v-card>
                                  </v-col>

                                  <div class="text-center">
                                    <v-btn
                                      rounded
                                      color="amber darken-1"
                                      dark
                                      v-bind:href="s"
                                    >
                                      Do Assignment
                                    </v-btn>
                                  </div>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>
                          </v-card-text>

                          <div style="flex: 1 1 auto"></div>
                        </v-card>
                      </v-dialog>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </template>
          </v-hover>
        </div>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import Navbarv5 from "../../components/Navbarv5.vue";
export default {
  async fetch() {
    this.course = await this.$axios.$get(
      process.env.baseUrl + "/" + this.$route.params.course + "/course"
    );

    this.me2 = await this.$axios.$get(
      process.env.baseUrl +
        "/" +
        this.$route.params.course +
        "/read_course_assignment"
    );

    this.studentid = this.$route.params.student;
  },
  data: () => ({
    assign: "",
    aa: true,
    studentid: 0,
    s: "",
    item: [],
    course: [],
    dialog: false,
    dialog2: false,
    dialog3: false,
    notifications: false,
    sound: true,
    widgets: false,
    isActive: false,
    tab: "",
    assignment: {},

    items: [
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg",
        title: "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong",
        category: "Travel",
        keyword: "Drinks",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png",
        title:
          "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
        category: "Technology",
        keyword: "Phones",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg",
        title: "How to Get Media Mentions for Your Business",
        category: "Media",
        keyword: "Social",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg",
        title:
          "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
        category: "Technology",
        keyword: "Military",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg",
        title: "Degrees of Freedom and Sudoko",
        category: "Travel",
        keyword: "Social",
      },
    ],
    me2: [],
    search: "",
  }),
  components: { Navbarv5 },
  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();

      return this.items.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
  methods: {
    changehref(item) {
      this.dialog = true;
      this.assign = item;
      console.log(this.assign);

      this.s =
        "/" + this.$cookies.get("id") + "/" + item.assignmentid + "/playground";
    },
  },
  mounted() {},
};
</script>
