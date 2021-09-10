<template>
  <v-app> </v-app>
</template>

<script>
import Navbarv1 from "../../components/Navbarv1.vue";
export default {
  async fetch() {
    this.course = await this.$axios.$get(
      "http://127.0.0.1:8000/" + this.$route.params.course + "/course"
    );
  },
  data: () => ({
    course: [],

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
  components: { Navbarv1 },
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