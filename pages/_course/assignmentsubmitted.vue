<template>
  <v-app>
    <div v-if="role == 'Teacher'"><Navbarv1 /></div>
    <div v-if="role == 'Student'"><Navbarv5 /></div>
    <v-main style="background-color: #ede7f6">
      <div>
        <br />

        <div class="headline font-weight-black mx-6">Assignment Submitted</div>
        <div class="mx-6 my-6">
          <v-data-table
            :headers="headers"
            :items="studentassignment"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1 rounded-lg"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-chip color="amber darken-1" dark @click="viewdata(item)">
                Result
              </v-chip>
            </template>
            <template v-slot:[`item.Assignment.assignmentid`]="{ item }">
              <v-chip color="amber darken-1" dark>
                {{ item.Assignment.assignmentid }}
              </v-chip>
            </template>
          </v-data-table>
        </div>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
            color="deep-purple accent-1"
          ></v-pagination>
        </div>
      </div>

      <v-dialog v-model="dialog">
        <v-card min-height="500">
          <v-toolbar flat dark color="deep-purple accent-1">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Assignment result</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <ul>
            <div class="py-2"></div>
            <v-col
              v-for="studentassignment in studentassignmentquestion"
              :key="studentassignment.studentassignmentquestionid"
              cols="12"
            >
              <div class="text--primary px-16">
                <!-- Using the elevation prop -->

                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      :elevation="hover ? 24 : 6"
                      class="mx-auto rounded-lg"
                      style="border-left: 8px solid #b388ff"
                    >
                      <v-list subheader three-line>
                        <v-list-item>
                          <v-list-item-avatar>
                            <v-icon
                              color="amber"
                              class="text-left ma-2"
                              large
                              cols="12"
                              fab
                            >
                              mdi-medal-outline
                            </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            Question {{ studentassignment.questionnumber }}
                            <v-list-item-title class="py-2"
                              >Answer:
                              {{
                                studentassignment.studentanswer
                              }}</v-list-item-title
                            >

                            <div v-if="role == 'Teacher'">
                              {{ studentassignment.testresult }}
                            </div>

                            <v-list-item-subtitle
                              v-text="studentassignment.createdat"
                            ></v-list-item-subtitle>
                          </v-list-item-content>
                          <div class="px-2">
                            <v-chip color="teal accent-2">
                              totalcorrect: {{ studentassignment.totalcorrect }}
                            </v-chip>
                          </div>
                          <div class="px-2">
                            <v-chip color="amber darken-1" dark>
                              totalnotcorrect:
                              {{ studentassignment.totalnotcorrect }}
                            </v-chip>
                          </div>
                          <v-chip color="deep-purple accent-1" dark>
                            score: {{ studentassignment.studentscore }}
                          </v-chip>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </template>
                </v-hover>
              </div>
            </v-col>
          </ul>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>




<script>
import $ from "jquery";
import Navbarv1 from "../../components/Navbarv1.vue";
import Navbarv5 from "../../components/Navbarv5.vue";
export default {
  components: { Navbarv1, Navbarv5 },

  async fetch() {
    this.role = this.$cookies.get("role");

    if (this.role == "Student") {
      this.studentassignment = await this.$axios.$get(
        process.env.baseUrl +
          this.$cookies.get("id") +
          "/studentassignment"
      );
    }

    if (this.role == "Teacher") {
      this.studentassignment = await this.$axios.$get(
        process.env.baseUrl +
          this.$route.params.course +
          "/studentassignment"
      );
    }
  },

  data() {
    return {
      role: "",
      selected: [],
      studentassignmentquestion: [],
      dialog: false,
      attempt: 0,
      studentassignment: [],
      page: 1,
      pageCount: 0,
      interval: {},
      value: 0,

      headers: [
        { text: "AssignmentId", value: "Assignment.assignmentid" },
        {
          text: "AssignmentName",
          align: "start",
          sortable: false,
          value: "Assignment.assignmentname",
        },
        { text: "Scores Received", value: "StudentAssignment.totalscore" },

        { text: "Test Pass", value: "StudentAssignment.totalcorrect" },
        { text: "Test NotPass", value: "StudentAssignment.totalnotcorrect" },
        { text: "Start", value: "StudentAssignment.created_at" },
        { text: "Finish", value: "StudentAssignment.update_at" },
        { text: "Actions", value: "actions", sortable: false },
        // { text: "Max", value: "fat" },
        // { text: "Min", value: "carbs" },
        // { text: "Mean", value: "protein" },
        // { text: "Attemps", value: "attempt" },
      ],
      me2: [
        {
          assignmentname: "Homework 1",
          coursename: "python101",
        },
        {
          assignmentname: "Homework 2",
          coursename: "python102",
        },
      ],
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    async viewdata(item) {
      this.selected = Object.assign({}, item);
      console.log(this.selected);

      if (this.role == "Student") {
        this.studentassignmentquestion = await this.$axios.$get(
          process.env.baseUrl +
            this.$cookies.get("id") +
            "/studentassignmentquestion?studentassignmentid=" +
            this.selected.StudentAssignment.studentassigmentid
        );
      } else {
        this.studentassignmentquestion = await this.$axios.$get(
          process.env.baseUrl +
            this.$route.params.course +
            "/studentassignmentquestion?studentassignmentid=" +
            this.selected.StudentAssignment.studentassigmentid
        );
      }

      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
  },
};
</script>

<style>
</style>
