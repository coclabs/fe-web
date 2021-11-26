<template>
  <v-app>
    <v-main style="background-color: #efe5fd">
      <!-- <v-container>
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
      </v-container> -->
      <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('~/assets/logococ-3.jpg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>

            <h2 class="text-2xl font-weight-semibold black--text">
              Call Of Code
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Welcome to Call Of Code! 👋🏻
          </p>
          
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
            
                v-model="user.username"
                    :rules="[(v) => !!v || 'Username is required']"
                    label="Username"
                    required
                    outlined
              class="mb-3"
               color="#7776AC"
            ></v-text-field>

            <v-text-field
              v-model="user.password"
                    :rules="[(v) => !!v || 'Password is required']"
                    label="Password"
                    :type="'password'"
                    outlined
                    required
                     color="#7776AC"
            ></v-text-field>
             <v-select
                    color="#7776AC"
                    v-model="user.role"
                    :items="['Teacher', 'Student']"
                    :rules="[(v) => !!v || 'Role is required']"
                    label="Role"
                    outlined
                    required
                  ></v-select>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Remember Me"
                hide-details
                class="me-3 mt-1"
               color="deep-purple accent-1"
              >
              </v-checkbox>

              <!-- forgot link -->
              <a
                href="javascript:void(0)"
                class="mt-1 text--deep-purple accent-1"
              >
                Forgot Password?
              </a>
            </div>

            <v-btn
              block
              color="amber darker-1"
              class="mt-6 white--text"
               @click="login"
               rounded
            >
              Login
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        
        <!-- divider -->
       

        <!-- social links -->
      
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
    
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
     :src="require('~/assets/tree.svg')"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
     :src="require('~/assets/tree.svg')"
    ></v-img>
  </div>
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
<style lang="scss">
.auth-wrapper {
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  flex-basis: 100%;
  align-items: center;

  // common style for both v1 and v2
  a {
    text-decoration: unset;
  }

  // auth v1
  &.auth-v1 {
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1.5rem;

    .auth-mask-bg {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .auth-tree,
    .auth-tree-3 {
      position: absolute;
    }
    .auth-tree {
      bottom: 0;
      left: 0;
    }
    .auth-tree-3 {
      bottom: 0;
      right: 0;
    }

    // auth card
    .auth-inner {
      width: 28rem;
      z-index: 1;
      .auth-card {
        padding: 0.9375rem 0.875rem;
      }
    }
  }
}

@media (max-width: 600px) {
  // auth bg and tree hide in sm screen
  .auth-v1 {
    .auth-tree,
    .auth-tree-3,
    .auth-mask-bg {
      display: none;
    }
  }
}
</style>