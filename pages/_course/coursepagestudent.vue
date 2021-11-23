<template>
  <v-app>
    <Navbarv5 />
    <v-main class="mx-2" style="background-color: #efe5fd">
      <v-col cols="12" md="8" sm="6" lg="8" class="px-8 mx-auto">
        <v-card
          max-height="250"
          style="border: 1px solid #000000"
          class="pa-2 rounded-xl hidden-sm-and-down"
        >
          <!-- {{ course.coursecode }} -->
          <!-- {{ course.coursename }} -->
          <v-list-item three-line>
            <v-list-item-content class="ms-8 hidden-sm-and-down">
              <v-list-item-title class="text-h4 mb-1">
                {{ course.coursename }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-h6">
                {{ course.coursecode }}
              </v-list-item-subtitle>
              <div class="text-overline mb-2"></div>
            </v-list-item-content>

            <v-list-item-avatar tile size="250" class="mx-1">
              <v-img :src="course.imagesrc"> </v-img
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>

      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent" class="hidden-sm-and-down">
                <v-list-item v-for="n in 1" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title
                      ><v-icon color="amber"> mdi-book </v-icon> Post
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link >
                  <v-list-item-content>
                    <nuxt-link
                      :to="{
                        name: 'course-coursechat',
                        params: { course: this.$route.params.course },
                      }"
                      class="text-decoration-none black--text"
                    >
                      <v-list-item-title
                        ><v-icon color="amber"> mdi-message-text</v-icon> Chat
                      </v-list-item-title>
                    </nuxt-link>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="8" sm="6" lg="8">
            <v-sheet min-height="70vh" rounded="lg">
              <v-list two-line>
                <template v-for="(item, index) in items">
                  <v-subheader v-if="item.header" :key="item.header" inset>
                    {{ item.header }}
                  </v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    inset
                  ></v-divider>

                  <v-list-item v-else :key="item.title" ripple>
                    <v-list-item-avatar>
                      <img :src="item.avatar" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbarv5 from "../../components/Navbarv5.vue";
export default {
  async fetch() {
    this.$cookies.set("courseid", this.$route.params.course);
    this.course = await this.$axios.$get(
      process.env.baseUrl + "/" + this.$route.params.course + "/course"
    );
  },
  data: () => ({
    course: [],

    items: [
      {
        header: "Today",
      },
      { divider: true },
      {
        avatar: "https://picsum.photos/250/300?image=660",
        title: "Meeting @ Noon",
        subtitle: `<span class="font-weight-bold">Spike Lee</span> &mdash; I'll be in your neighborhood`,
      },
      {
        avatar: "https://picsum.photos/250/300?image=821",
        title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
        subtitle:
          '<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.',
      },
      {
        avatar: "https://picsum.photos/250/300?image=783",
        title: "Yes yes",
        subtitle:
          '<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations',
      },
      {
        header: "Yesterday",
      },
      { divider: true },
      {
        avatar: "https://picsum.photos/250/300?image=1006",
        title: "Dinner tonight?",
        subtitle:
          '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
      },
      {
        avatar: "https://picsum.photos/250/300?image=146",
        title: "So long",
        subtitle:
          '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
      },
      {
        header: "Last Week",
      },
      { divider: true },
      {
        avatar: "https://picsum.photos/250/300?image=1008",
        title: "Breakfast?",
        subtitle:
          '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
      },
      {
        avatar: "https://picsum.photos/250/300?image=839",
        title:
          'Winter Porridge <span class="grey--text text--lighten-1"></span>',
        subtitle:
          '<span class="font-weight-bold">cc: Daniel</span> &mdash; Tell me more...',
      },
      {
        avatar: "https://picsum.photos/250/300?image=145",
        title: "Oui oui",
        subtitle:
          '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
      },
    ],

    search: "",
    links: [
      { title: "Home", icon: "mdi-home-city", route: "/indexteacher" },
      {
        title: "createquestion",
        icon: "mdi-plus-box",
        route: "/question/createquestion",
      },
      {
        title: "showallquestion",
        icon: "mdi-book",
        route: "/question/showallquestion",
      },
      {
        title: "createassignment",
        icon: "mdi-plus-box",
        route: "/question/createassignment",
      },
      {
        title: "showallassignment",
        icon: "mdi-book",
        route: "/question/showallassignment",
      },
    ],
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
};
</script>
