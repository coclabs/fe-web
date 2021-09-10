<template>
  <v-app>
    <Navbarv3 />
    <v-main style="background-color: #efe5fd">
      <v-container>
        <v-row class="d-flex justify-end ma-2">
          <v-dialog v-model="dialog" persistent max-width="700">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="amber darken-1"
                dark
                v-bind="attrs"
                v-on="on"
                class="rounded-xl"
              >
                <v-icon v-if="fab"> mdi-close </v-icon>
                <v-icon left v-else> mdi-account-multiple-plus </v-icon>
                create course
              </v-btn>
            </template>
            <v-card class="rounded-lg">
              <v-card-title class="text-h5"> Create Course </v-card-title>

              <v-col cols="12">
                <v-text-field
                  color="#7776AC"
                  v-model="course.coursecode"
                  label="Course Code"
                  filled
                ></v-text-field>
                <v-text-field
                  v-model="course.coursename"
                  color="#7776AC"
                  label="Course Name"
                  filled
                ></v-text-field>

                <v-textarea
                  color="#7776AC"
                  v-model="course.coursedescription"
                  background-color="grey lighten-3"
                  label="Course Description"
                ></v-textarea>

                <v-textarea
                  color="#7776AC"
                  v-model="course.courseobjective"
                  background-color="grey lighten-3"
                  label="Course Objective"
                ></v-textarea>
                <v-select
                  :items="items2"
                  label="Class Image"
                  v-model="imageselected"
                  max-width="500"
                >
                  <template v-slot:selection="{ item }">
                    <img :src="item.image" />{{ item.name }}
                  </template>
                  <template v-slot:item="{ item }"
                    ><img :src="item.image" />{{ item.name }}</template
                  >
                </v-select>
              </v-col>

              <v-card-text></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="amber darken-1" text @click="dialog = false">
                  Cancel
                </v-btn>
                <v-btn color="deep-purple accent-1" text @click="createcourse">
                  Create
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <v-col md="4" offset-md="8">
          <v-text-field
            background-color="white"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            color="black"
            outlined
          ></v-text-field>
        </v-col>

        <v-row>
          <v-col
            v-for="(item, i) in searching"
            :key="i"
            :cols="12"
            :md="4"
            class="mt-2"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="mx-4 rounded-lg"
                max-width="400"
                :elevation="hover ? 5 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img
                  class="white--text deep-purple lighten-3 align-end"
                  height="200px"
                  :src="item.imagesrc"
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
                      name: 'course-coursepageteacher',
                      params: { course: item.courseid },
                    }"
                    class="text-decoration-none white--text"
                  >
                    <v-card-title v-text="item.coursename"></v-card-title>
                  </nuxt-link>
                </v-img>

                <v-card-subtitle class="pb-0"> </v-card-subtitle>

                <v-card-text class="text--primary">
                  <span
                    class="d-inline-block text-truncate"
                    style="max-width: 150px"
                    v-text="item.coursedescription"
                  >
                  </span>

                  <div></div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import Navbarv3 from "../../components/Navbarv3.vue";
export default {
  data: () => ({
    imageselected: {},
    course: {
      coursecode: "",
      coursename: "",
      coursedescription: "",
      courseobjective: "",
      teacherid: 1,
      imagesrc: "",
    },

    items2: [
      {
        name: "Python Class1",
        image: require("~/assets/pythonclass.svg"),
      },
      {
        name: "Python Class2",
        image: require("~/assets/pythonclass2.svg"),
      },
    ],
    drawer: null,
    dialog: false,

    items: [
      {
        imagesrc: require("~/assets/pythonclass.svg"),
        coursename: "python101",
        coursedescription:
          "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.",
      },
      {
        imagesrc: require("~/assets/pythonclass2.svg"),
        coursename: "python102",
        coursedescription:
          "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.",
      },
      {
        imagesrc: require("~/assets/pythonclass.svg"),
        coursename: "python103",
        coursedescription:
          "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.",
      },
      {
        imagesrc: require("~/assets/pythonclass2.svg"),
        coursename: "python104",
        coursedescription:
          "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.",
      },
    ],
    create: [{ title: "Delete" }],

    search: "",
  }),
  components: { Navbarv3 },
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
        const text = item.coursename.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
  methods: {
    async fetchnew() {
      this.items = await this.$axios.$get(
        "http://127.0.0.1:8000/1/getallcourseteacher"
      );
    },

    async createcourse() {
      this.course.imagesrc = this.imageselected.image;
      if (
        this.course.imagesrc == "" ||
        this.course.coursename == "" ||
        this.coursedescription == "" ||
        this.course.courseobjective == "" ||
        this.course.coursecode == ""
      ) {
        alert("Please Fill All Data");
      } else {
        await this.$axios.post(
          "http://127.0.0.1:8000/createcourseteacher",
          this.course
        );
        this.dialog = false;
        this.fetchnew();
      }
    },
  },
  async fetch() {
    this.items = await this.$axios.$get(
      "http://127.0.0.1:8000/1/getallcourseteacher"
    );
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300&family=Prompt:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap");

.me2 {
  font-family: "Prompt", sans-serif;

  font-size: 20;
}
.me3 {
  font-family: "Prompt", sans-serif;

  font-size: 20;
}
.app-card {
  display: flex;
  flex-direction: column;

  font-size: 16px;
  background-color: rgb(146 151 179 / 13%);
  border-radius: 14px;
  border: 1px solid rgba(16 18 27 / 40%);
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
}
</style>