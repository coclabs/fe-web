<template>
  <v-app style="background-color: #EFE5FD">
    <div v-if="role == 'Teacher'"><Navbarv1 /></div>
    <div v-if="role == 'Student'"><Navbarv5 /></div>
      <v-navigation-drawer
      v-model="drawer"
      app right
    >
      

      <v-divider></v-divider>

      <v-list two-line v-for="(item, index) in items" :key="index">
        <template >
        <v-list-item v-if="item.id == 1"
        >
         <v-list-item-avatar >
                      <v-avatar
              color="#b388ff"
              class="white--text"
            >T</v-avatar>
                    </v-list-item-avatar>
          
          <v-list-item-content>
            <v-list-item-title>
              <div>Teacher Online :</div>
             <div v-if="item.message[0]!=null"> {{ item.message[0].firstname}}</div>
              
            </v-list-item-title>
            
          </v-list-item-content>
        </v-list-item>
        </template>
        <template >
         <v-list-item v-if="item.id == 2"
        >
           <v-list-item-avatar >
                      <v-avatar
              color="amber darken-1"
              class="white--text "
            >S</v-avatar>
                    </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              
              <div>Student Online :</div>
                 <div v-if="item.message[0]!=null"> {{ item.message[0].firstname}}</div>
             
            
            </v-list-item-title>
            
          </v-list-item-content>
        </v-list-item>
        </template>
        
      </v-list>

    </v-navigation-drawer>
    
    <v-main style="background-color: #EFE5FD">
      <div>

        <ul id="example-2">
         
           <v-card>
              <v-subheader class="text-h5"><v-icon color="amber darken-1"> mdi-message-text</v-icon>Group Chat : Room {{ courseid }}</v-subheader>

              <v-list two-line v-for="(item, index) in items" :key="index">
                <template >
                  <v-card color="#ede7f6">
                  <v-list-item
                   v-if="item.id == 5"
                    
                  >
                    <v-list-item-avatar >
                      <v-avatar
              color="grey darken-1"
              class="white--text"
            >T</v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.message }}</v-list-item-title>

                      <v-list-item-subtitle >
                       
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  </v-card>
                  
                </template>
                <template >
                  <v-card color="#FFECB3">
                  <v-list-item
                    v-if="item.id == 6"
                    
                  >
                    <v-list-item-avatar>
                       <v-avatar
              color="grey darken-1"
              class="white--text"
            >S</v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title></v-list-item-title>

                      <v-list-item-subtitle>
                        {{ item.message }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  </v-card>
                </template>
               
              </v-list>
              
         <v-footer
      app
      color="transparent"
      height="72"
      inset
    >
      <v-text-field
       v-model="message"
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field> <v-btn  color="amber accent-3 " rounded @click="sendMessage()">Send</v-btn>
    </v-footer>
            </v-card>
           
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
    var ws = new WebSocket(
      `ws://localhost:8000/ws/` +
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