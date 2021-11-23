<template>
  <v-app>
    <Navbarv1 />
    <v-main style="background-color: #efe5fd">
      <v-container class="my-6">
        <h2>invite and remove students</h2>
        <v-row justify="center" class="py-3">
          <v-col md="4">
            <v-dialog v-model="dialog" persistent max-width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  class="pa-2 rounded-lg"
                  outlined
                  tile
                  color="deep-purple accent-1"
                >
                  <p class="text-center">invite students</p>
                  <v-card-subtitle class="pa-2 text-center">
                    <v-btn
                      color="black"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      icon
                      large
                    >
                      <v-icon large>mdi-account-multiple-plus</v-icon>
                    </v-btn></v-card-subtitle
                  >
                </v-card>
              </template>

              <v-card class="rounded-lg">
                <v-card-title class="text-h6"> invite students </v-card-title>

                <v-row align="center" justify="start" class="mx-auto my-auto">
                  <v-col
                    v-for="(selection, i) in selections"
                    :key="selection.firstname"
                    class="shrink"
                  >
                    <v-chip
                      :disabled="loading"
                      close
                      @click:close="selected.splice(i, 1)"
                    >
                      <v-avatar left>
                        <v-img :src="selection.avatar"> </v-img>
                      </v-avatar>
                      {{ selection.firstname }}
                    </v-chip>
                  </v-col>
                </v-row>

                <v-col v-if="!allSelected" cols="12">
                  <v-text-field
                    color="#7776AC"
                    ref="search"
                    v-model="search"
                    full-width
                    hide-details
                    label="Search"
                    single-line
                  ></v-text-field>
                </v-col>

                <v-divider v-if="!allSelected"></v-divider>

                <v-responsive class="overflow-y-auto" max-height="200">
                  <v-list subheader>
                    <v-subheader>Search result</v-subheader>

                    <template v-for="item in categories">
                      <v-list-item
                        v-if="!selected.includes(item)"
                        :key="item.firstname"
                        :disabled="loading"
                        @click="selected.push(item)"
                      >
                        <v-list-item-avatar>
                          <v-img :disabled="loading" :src="item.avatar">
                          </v-img>
                        </v-list-item-avatar>
                        <v-list-item-title
                          v-text="item.firstname"
                        ></v-list-item-title>
                        <v-list-item-icon>
                          <v-icon> mdi-message-outline </v-icon>
                        </v-list-item-icon>
                      </v-list-item>
                    </template>
                  </v-list>

                  <v-lazy
                    v-model="isActive"
                    :options="{
                      threshold: 0.5,
                    }"
                    transition="fade-transition"
                  >
                  </v-lazy>
                </v-responsive>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="amber darken-1" text @click="dialog = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    :disabled="!selected.length"
                    :loading="loading"
                    color="deep-purple accent-1"
                    text
                    @click="addstudent"
                  >
                    invite
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>

          <v-col md="4">
            <v-dialog v-model="dialog2" persistent max-width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  class="pa-2 rounded-lg"
                  outlined
                  tile
                  color="amber lighten-1"
                >
                  <p class="text-center">remove students</p>
                  <v-card-subtitle class="pa-2 text-center">
                    <v-btn color="black" v-bind="attrs" v-on="on" icon large>
                      <v-icon large>mdi-account-multiple-remove</v-icon>
                    </v-btn>
                  </v-card-subtitle>
                </v-card>
              </template>

              <v-card class="rounded-lg">
                <v-card-title class="text-h6"> remove students </v-card-title>

                <v-row align="center" justify="start" class="mx-auto my-auto">
                  <v-col
                    v-for="(selection, i) in selectionsremove"
                    :key="selection.text"
                    class="shrink"
                  >
                    <v-chip
                      :disabled="loading"
                      close
                      @click:close="selected.splice(i, 1)"
                    >
                      <v-avatar left>
                        <v-img :src="selection.avatar"> </v-img>
                      </v-avatar>
                      {{ selection.text }}
                    </v-chip>
                  </v-col>
                </v-row>

                <v-col v-if="!allSelected" cols="12">
                  <v-text-field
                    color="#7776AC"
                    ref="searchremove"
                    v-model="searchremove"
                    full-width
                    hide-details
                    label="Search"
                    single-line
                  ></v-text-field>
                </v-col>

                <v-divider v-if="!allSelected"></v-divider>

                <v-responsive class="overflow-y-auto" max-height="200">
                  <v-list subheader>
                    <v-subheader>Search result</v-subheader>

                    <template v-for="item in categoriesremove">
                      <v-list-item
                        v-if="!selected2.includes(item)"
                        :key="item.text"
                        :disabled="loading"
                        @click="selected2.push(item)"
                      >
                        <v-list-item-avatar>
                          <v-img :disabled="loading" :src="item.avatar">
                          </v-img>
                        </v-list-item-avatar>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                        <v-list-item-icon>
                          <v-icon> mdi-message-outline </v-icon>
                        </v-list-item-icon>
                      </v-list-item>
                    </template>
                  </v-list>

                  <v-lazy
                    v-model="isActive"
                    :options="{
                      threshold: 0.5,
                    }"
                    transition="fade-transition"
                  >
                  </v-lazy>
                </v-responsive>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="amber darken-1" text @click="dialog2 = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    :disabled="!selected2.length"
                    :loading="loading"
                    color="deep-purple accent-1"
                    text
                    @click="addstudent"
                  >
                    remove
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbarv1 from "../../components/Navbarv1.vue";
const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};
export default {
  async fetch() {
    this.items = await this.$axios.$get(
      process.env.baseUrl +
        "/" +
        this.$route.params.course +
        "/studentnotinthiscourse"
    );
  },
  data: () => ({
    items: [
      {
        text: "Nature",

        avatar: srcs[1],
      },
      {
        text: "Nightlife",

        avatar: srcs[2],
      },
      {
        text: "November",

        avatar: srcs[3],
      },
      {
        text: "Portland",

        avatar: srcs[4],
      },
      {
        text: "Biking",

        avatar: srcs[5],
      },
      {
        text: "Bebe",

        avatar: srcs[1],
      },
      {
        text: "Bibi",

        avatar: srcs[2],
      },
    ],
    itemsremove: [
      {
        text: "Natu",

        avatar: srcs[1],
      },
      {
        text: "Nightday",

        avatar: srcs[2],
      },
      {
        text: "Jatlarr",

        avatar: srcs[3],
      },
      {
        text: "Portland",

        avatar: srcs[4],
      },
      {
        text: "Biking",

        avatar: srcs[5],
      },
      {
        text: "Bebe",

        avatar: srcs[1],
      },
      {
        text: "Bibi",

        avatar: srcs[2],
      },
    ],

    student: [],
    loading: false,
    search: "",
    searchremove: "",
    selected: [],
    selected2: [],
    isActive: false,
    dialog: false,
    dialog2: false,
  }),

  components: { Navbarv1 },
  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.items;

      return this.items.filter((item) => {
        const firstname = item.firstname.toLowerCase();

        return firstname.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    },
    allSelectedremove() {
      return this.selected2.length === this.itemsremove.length;
    },
    categoriesremove() {
      const searchremove = this.searchremove.toLowerCase();

      if (!searchremove) return this.itemsremove;

      return this.itemsremove.filter((item) => {
        const textremove = item.text.toLowerCase();

        return textremove.indexOf(searchremove) > -1;
      });
    },
    selectionsremove() {
      const selectionsremove = [];

      for (const selectionremove of this.selected2) {
        selectionsremove.push(selectionremove);
      }

      return selectionsremove;
    },
  },

  watch: {
    selected() {
      this.search = "";
    },
    selected2() {
      this.searchremove = "";
    },
  },

  methods: {
    async fetchnew() {
      this.items = await this.$axios.$get(
        process.env.baseUrl +
          "/" +
          this.$route.params.course +
          "/studentnotinthiscourse"
      );
    },
    async addstudent() {
      for (let i = 0; i < this.selected.length; i++) {
        await this.$axios.$post(process.env.baseUrl + "/studentenrollcourse", {
          studentid: this.selected[i].studentid,
          courseid: this.$route.params.course,
        });
      }

      this.fetchnew();

      this.dialog = false;
      alert("successfully add: " + this.selected.length + " student");
      this.selected = [];
    },

    next() {
      this.loading = true;
      this.dialog = false;

      setTimeout(() => {
        this.search = "";
        this.searchremove = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
