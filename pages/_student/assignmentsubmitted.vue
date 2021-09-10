<template>
  <v-app>
    <Navbarv1 />
    <v-main style="background-color: #ede7f6">
      <div>
        <br />

        <div class="headline font-weight-black">Assignment Submitted</div>
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
            <v-icon small class="mr-2" @click="viewdata(item)">
              mdi-magnify
            </v-icon>
          </template>
        </v-data-table>

        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </div>
      <v-dialog v-model="dialog">
        <v-container>
          <v-card height="1000">
            <ul>
              <li
                v-for="studentassignment in studentassignmentquestion"
                :key="studentassignment.studentassignmentquestionid"
              ></li>
            </ul>
          </v-card>
        </v-container>
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
      "http://127.0.0.1:8000/1/studentassignment"
    );
  },

  data() {
    return {
      selected: [],
      studentassignmentquestion: [],
      dialog: false,
      attempt: 0,
      studentassignment: {},
      page: 1,
      pageCount: 0,

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
    };
  },
  methods: {
    async viewdata(item) {
      this.selected = Object.assign({}, item);
      console.log(this.selected);

      this.studentassignmentquestion = await this.$axios.$get(
        "http://127.0.0.1:8000/1/studentassignmentquestion?studentassignmentid=" +
          this.selected.StudentAssignment.studentassigmentid
      );

      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
  },
};
</script>

<style>
</style>