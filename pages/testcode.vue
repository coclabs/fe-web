<template>
  <div>
    <v-select :items="items" label="Standard" v-model="x">
      <template v-slot:selection="{ item }">
        <img :src="item.image" />{{ item.name }}
      </template>

      <template v-slot:item="{ item }"
        ><img :src="item.image" />{{ item.name }}</template
      >
    </v-select>
    <v-button @click="s">click me</v-button>
    <v-img
      class="white--text deep-purple lighten-3 align-end"
      height="200px"
      :src="x"
    >
    </v-img>
  </div>
</template>

<script>
export default {
  methods: {
    s() {
      alert(this.x.image);
    },
  },
  data() {
    return {
      x: require("~/assets/pythonclass.svg"),

      items: [
        {
          name: "Foo",
          image: require("~/assets/pythonclass.svg"),
        },
        {
          name: "Bar",
          image:
            "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
        },
        {
          name: "Hoo",
          image:
            "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
        },
        {
          name: "Coo",
          image:
            "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
        },
      ],
    };
  },
};
</script>

<style>
</style>