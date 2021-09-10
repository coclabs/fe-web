<template>
  <v-app>
    <v-main style="background-color: #ede7f6">
      <v-container>
        <v-card
          style="border: 2px solid #212121"
          class="rounded-xl mt-2"
          height="500"
        >
          <v-row>
            <v-col cols="12" sm="4" align="center">
              <v-avatar size="300" tile>
                <v-img :src="require('~/assets/Untitled_Artwork.png')"> </v-img>
              </v-avatar>
              <v-btn fab icon class="ml-14"
                ><v-icon>fas fa-minus</v-icon></v-btn
              >

              <v-btn fab icon><v-icon>fas fa-plus</v-icon></v-btn>
            </v-col>
            <v-col cols="12" sm="8" class="px-10">
              <v-app-bar flat color="rgba(0,0,0,0)">
                <v-spacer></v-spacer>
                <v-icon color="grey lighten-1">fas fa-heart</v-icon>
              </v-app-bar>

              <div>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="user.username"
                    :rules="[(v) => !!v || 'Username is required']"
                    label="Username"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="user.password"
                    :rules="[(v) => !!v || 'Password is required']"
                    label="Password"
                    :type="'password'"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="user.role"
                    :items="['Teacher', 'Student']"
                    :rules="[(v) => !!v || 'Role is required']"
                    label="Role"
                    required
                  ></v-select>
                  <v-btn rounded color="warning" @click="login">login</v-btn>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template> 

<script>
import Navbarv1 from "../../components/Navbarv1.vue";

export default {
  components: { Navbarv1 },

  beforeCreate() {
    var token;
    token = this.$cookies.get("token");
    // If the user is not authenticated
    if (token) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      if (this.$refs.form.validate() == true && this.user.role == "Teacher") {
        this.$store
          .dispatch("authentication/loginteacher", this.user)
          .then(() => this.$router.push("/"))
          .catch((err) => alert("Invalid Username Or Password!!"));
      } else if (
        this.$refs.form.validate() == true &&
        this.user.role == "Student"
      ) {
        this.$store
          .dispatch("authentication/loginstudent", this.user)
          .then(() => this.$router.push("/"))
          .catch((err) => alert("Invalid Username Or Password!!"));
      }
    },
  },
};
</script>