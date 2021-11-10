<template>
  <v-app>
    <div v-if="role == 'Teacher'"><Navbarv1 /></div>
    <div v-if="role == 'Student'"><Navbarv5 /></div>
    <v-main style="background-color: #ede7f6">
      <div>
        <h1>WebSocket Chat : Room {{ courseid }}</h1>
        <h2></h2>

        <v-text-field v-model="message"></v-text-field>
        <v-btn @click="sendMessage()">Send</v-btn>

        <ul id="example-2">
          <div v-for="(item, index) in items" :key="index">
            <div v-if="item.id == 1" style="color: red">
              Teacher Online :{{ item.message }}
            </div>
            <div v-if="item.id == 2" style="color: blue">
              Student Online :{{ item.message }}
            </div>

            <v-card style="background-color: white">
              <div v-if="item.id == 5" style="text-decoration: underline">
                <h4>{{ item.message }}</h4>
              </div>
            </v-card>

            <v-card style="background-color: black">
              <div
                v-if="item.id == 6"
                style="text-decoration: underline; color: white"
              >
                <h4>{{ item.message }}</h4>
              </div>
            </v-card>
          </div>
        </ul>
      </div>
    </v-main>
  </v-app>
</template>



<script>
import Navbarv1 from "../../components/Navbarv1.vue";
import Navbarv5 from "../../components/Navbarv5.vue";
export default {
  components: { Navbarv1, Navbarv5 },

  data() {
    return {
      courseid: 0,
      id: 0,
      role: "",
      message: "",
      newmessage: [],
      ws: {},
      parentMessage: "Parent",
      items: [],
      teacherinthisroom: [],
    };
  },
  async fetch() {
    this.courseid = this.$route.params.course;
    this.id = this.$cookies.get("id");
    this.role = this.$cookies.get("role");
  },
  mounted() {
    if (window.location.protocol == "https:") {
      var ws_scheme = "ws://";
    } else {
      var ws_scheme = "ws://";
    }

    var ws = new WebSocket(
      ws_scheme +
        location.host +
        "/ws/" +
        this.courseid +
        `/` +
        this.id +
        `?role=` +
        this.role
    );
    this.ws = ws;
    var item = this.items;
    var teacher = this.teacherinthisroom;
    var i = 0;
    ws.onmessage = function (event) {
      // this.newmessage.append(event.data);
      console.log(JSON.parse(event.data));

      item.push(JSON.parse(event.data));
      i++;

      if (JSON.parse(event.data).id == 100) {
        item[0].message = JSON.parse(event.data).message;
      }
      JSON.parse(event.data).message;
      if (JSON.parse(event.data).id == 200) {
        item[1].message = JSON.parse(event.data).message;
      }
      if (JSON.parse(event.data).id == 1) {
        if (i > 2) {
          item[0].message = JSON.parse(event.data).message;
          item.pop();
        }
      }
      if (JSON.parse(event.data).id == 2) {
        if (i > 2) {
          item[1].message = JSON.parse(event.data).message;
          item.pop();
        }
      }

      // if (JSON.parse(event.data).id == 2) {
      //   item[1] = null;
      // }

      // this.message=
      // this.message += event.data;
      // var messages = document.getElementById("messages");
      // var message = document.createElement("li");
      // var content = document.createTextNode(event.data);
      // message.appendChild(content);
      // messages.appendChild(message);
    };
  },
  methods: {
    sendMessage(event) {
      this.ws.send(this.message);
    },
    // change() {
    //   this.items[1].message.message = ["peddeal", "asdasdasd"];
    // },
  },
};
</script>

<style>
</style>