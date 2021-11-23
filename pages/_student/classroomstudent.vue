<template>
  <v-app>
    <Navbarv4 />
    <v-main style="background-color: #efe5fd">
      <v-container>
        <v-row class="d-flex justify-end ma-2"> </v-row>
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
                class="mx-4 rounded-xl"
                max-width="400"
                :elevation="hover ? 5 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img
                  class="white--text deep-purple lighten-3 align-end"
                  height="200px"
                  :src="item.imagesrc"
                >
                  <nuxt-link
                    :to="{
                      name: 'course-coursepagestudent',
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
import Navbarv4 from "../../components/Navbarv4.vue";
export default {
  async fetch() {
    this.items = await this.$axios.$get(
      process.env.baseUrl + "/" +
        this.$route.params.student +
        "/getallcoursestudent"
    );
  },
  data: () => ({
    drawer: null,

    items: [],
    create: [{ title: "Delete" }],

    search: "",
  }),
  components: { Navbarv4 },
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
