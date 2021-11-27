<template>
  <v-app>
    <div>
      <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
      <v-app-bar
        app
        absolute
        class="app-header"
        flat
        elevate-on-scroll
        color="rgba(0,0,0,0)"
      >
        <!-- Logo -->

        <v-img
          :src="require('~/assets/logococ-3.jpg')"
          max-height="50px"
          max-width="50px"
          alt="logo"
          contain
          eager
          class="app-logo me-1 ms-16"
        ></v-img>
        <v-toolbar-title>
          <h4 class="app-title text--primary">Call Of Code</h4></v-toolbar-title
        >
        <v-spacer></v-spacer>
        <div>
          <v-btn text href="/"> home </v-btn>
        </div>

        <v-btn
          color="amber darker-1"
          nuxt
          target="_blank"
          href="/authen/login"
          elevation="0"
          rounded
          class="me-8"
        >
          Log in
        </v-btn>
        <!-- Desktop view Navigation -->
      </v-app-bar>
      <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
    </div>
    <div>
      <v-container class="banner-wrapper">
        <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left">
              <h1 class="banner-title font-weight-bold black--text">
                Call Of Code
              </h1>
              <h4 class="banner-subtitle black--text font-weight-regular">
                A system that help teachers to add classrooms and independently
                manage homework and exercise
              </h4>
              <div class="mt-16 pt-2">
                <v-btn
                  color="amber darker-1"
                  class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
                  nuxt
                  large
                  target="_blank"
                  href="/"
                  elevation="0"
                  rounded
                >
                  Get Started
                </v-btn>
                <!-- <v-btn
                nuxt
                large
                to="/coming-soon"
                class="btn-custom-md"
                outlined
                color="#b388ff"
                elevation="0"
                rounded
              >
                Upgrade to Pro
              </v-btn> -->
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="6" class="hidden-sm-and-down">
            <v-img :src="require('~/assets/cocp1.svg')"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->

    <div class="banner2-component" style="background-color: #efe5fd">
      <!-- -----------------------------------------------
            Start Banner2
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="d-flex align-center">
          <div class="text-center">
            <h2 class="banner2-title font-weight-light">
              We are Call Of Code, Welcome
              <span class="font-weight-bold"> Teacher & Student </span>
              Connecting
            </h2>

            <div class="mt-16 pt-2">
              <v-btn
                nuxt
                large
                to="/"
                class="btn-custom-lg btn-arrow"
                depressed
                color="amber darker-1"
                elevation="0"
                rounded
              >
                <span>Check Your Course</span>
                <i class="mdi mdi-arrow-right"></i>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner2
        ----------------------------------------------- -->
    </div>

    <div class="feature1-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Feature 1
        ----------------------------------------------- -->

        <v-row justify="center" class="mt-13">
          <v-col cols="12" md="6">
            <v-card elevation="0">
              <v-card-text>
                <v-avatar size="300" tile>
                  <v-img :src="require('~/assets/team.svg')"> </v-img>
                </v-avatar>
                <!-- <h5 class="font-weight-medium font-18">Instant Solutions</h5>
                <p class="mt-10 mb-8">
                  You can relay on our amazing features list and also our
                  customer services will be great experience. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Praesent tristique
                  pellentesque ipsum.
                </p>
                <a
                  href="#"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  Explore More <i class="mdi mdi-arrow-right"></i>
                </a> -->
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="0">
              <v-card-text>
                <h1 class="banner-title1 font-weight-bold black--text">
                  Learn Computing science on the go
                </h1>

                <p class="mt-10 mb-8">
                  Even if you don’t have a lot of time, you can always learn
                  using the app. It's easy to use, and it's a fun way to launch
                  your programming journey
                </p>
                <a
                  href="#"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  Explore More <i class="mdi mdi-arrow-right"></i>
                </a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  layout: "empty",
  name: "Banner",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.banner-title {
  font-size: 80px;
  line-height: 54px;
  margin: 20px 0 15px;
}
.banner-subtitle {
  font-size: 21px;
}
.banner-wrapper {
  background: #ffff;
  padding: 20px 0 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .banner-title {
    font-size: 29px;
    line-height: 40px;
  }
  .banner-wrapper {
    padding: 90px 0 20px;
  }
}

@media (min-width: 1200px) {
  .banner-subtitle {
    margin-right: 150px;
  }
}
.feature1-component {
  .icon-round {
    font-size: 45px;
    width: 80px;
    color: #b388ff;
    line-height: 80px;
    text-align: center;
    display: inline-block;
    margin: 20px 0 30px;
    border-radius: 100%;
  }
}
.linking {
  i {
    margin-left: 10px;
    transition: 0.2s ease-in;
    font-size: 16px;
  }
  &:hover {
    i {
      margin-left: 15px;
    }
  }
}
.section-title {
  font-size: 30px;
  margin: 20px 0 15px;
  line-height: 36px;
}
@media (max-width: 767px) {
  .section-title {
    font-size: 23px;
  }
}

.btn-custom-md {
  padding: 15px 35px !important;
}
.banner-title1 {
  font-size: 30px;
  line-height: 54px;
  margin: 20px 0 15px;
}
.banner2-component {
  padding: 145px 0;

  .banner2-title {
    line-height: 50px;
    font-size: 36px;
    margin: 20px 0 15px;
  }
}

@media (max-width: 991px) {
  .banner2-component {
    padding: 45px 0;
    .banner2-title {
      font-size: 32px;
    }
  }
}
</style>