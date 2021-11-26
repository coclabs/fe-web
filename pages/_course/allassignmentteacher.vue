<template>
  <v-app>
    <Navbarv1 />
    <v-main style="background-color: #ede7f6">
      <div>
        <br />

        <div class="headline font-weight-black mx-6">Assignment Record</div>

        <div class="mx-6 my-6">
          <v-data-table
            :headers="headers"
            :items="studentassignment"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-chip color="amber darken-1" dark @click="viewdata(item)">
                View Detail</v-chip
              >
            </template>
            <template v-slot:[`item.assignmentid`]="{ item }">
              <v-chip color="amber darken-1" dark>
                {{ item.assignmentid }}
              </v-chip>
            </template>
          </v-data-table>
        </div>
        <div class="text-center pt-2">
          <v-pagination color="deep-purple accent-1" v-model="page" :length="pageCount"></v-pagination>
        </div>
      </div>

      <v-dialog v-model="dialog">
        <v-card min height="500">
          <v-toolbar flat dark color="deep-purple accent-1">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Assignment result</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <ul>
            <div class="py-2"></div>
            <v-data-table
              :headers="headers2"
              :items="student"
              :page.sync="page2"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-chip color="amber darken-1 " dark @click="viewdata2(item)">
                  Record</v-chip
                >
              </template>

              <template v-slot:[`item.avatar`]="{ item }">
                <v-avatar>
                  <v-img
                    class="white--text deep-purple lighten-3 align-end"
                    :src="item.avatar"
                  >
                  </v-img>
                </v-avatar>
              </template>
            </v-data-table>
          </ul>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>




<script>
import $ from "jquery";
import Navbarv1 from "../../components/Navbarv1.vue";
export default {
  components: { Navbarv1 },

  async fetch() {
    this.studentassignment = await this.$axios.$get(
      process.env.baseUrl + "/read_all_student_assignment_record"
    );

    for (let i = 0; i < this.studentassignment.length; i++) {
      this.studentassignment[i]["mean"] =
       ( this.studentassignment[i].allscore / this.studentassignment[i].attempt).toFixed(2);
       const d= new Date(this.studentassignment[i].firstdonetime);
        const d2= new Date(this.studentassignment[i].lastdonetime);
       this.studentassignment[i].firstdonetime= d.toLocaleString();
       this.studentassignment[i].lastdonetime= d2.toLocaleString();
    }
  },

  data() {
    return {
      selected2: [],
      selected: [],
      studentassignmentquestion: [],
      dialog: false,
      attempt: 0,
      studentassignment: [],
      page: 1,
      page2: 1,

      pageCount: 0,

      headers2: [
        { text: "avatar", value: "avatar" },
        { text: "studentid", value: "studentid" },

        { text: "firstname", value: "firstname" },

        { text: "lastname", value: "lastname" },

        { text: "Actions", value: "actions" },
        // { text: "Mean", value: "protein" },
        // { text: "Attemps", value: "attempt" },
      ],
      headers: [
        { text: "AssignmentId", value: "assignmentid" },

        { text: "totalscore", value: "allscore" },

        { text: "max", value: "max" },
        { text: "mean", value: "mean" },
        { text: "min", value: "min" },

        { text: "attemp", value: "attempt" },
        { text: "firstdone", value: "firstdonetime" },
        { text: "lastdone", value: "lastdonetime" },

        { text: "Action", value: "actions" },
        // { text: "Min", value: "carbs" },
        // { text: "Mean", value: "protein" },
        // { text: "Attemps", value: "attempt" },
      ],
    };
  },
  methods: {
    viewdata2(item) {
      this.selected2 = Object.assign({}, item);
      this.$router.push(
        "/" + this.$cookies.get("courseid")+ "/assignmentsubmitted?studentid="+this.selected2.studentid
      );
    },
    async viewdata(item) {
      this.selected = Object.assign({}, item);
      console.log(this.selected);

      this.student = await this.$axios.$get(
        process.env.baseUrl + "/read_record_student?assignmentid=" +
          this.selected.assignmentid
      );

      // this.studentassignmentquestion = await this.$axios.$get(
      //   process.env.baseUrl + "/2/studentassignmentquestion?studentassignmentid=" +
      //     this.selected.StudentAssignment.studentassigmentid
      // );

      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
  },
};
</script>

<style>
</style>
