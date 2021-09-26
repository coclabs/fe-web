<template>
  <v-app>
    <Navbarv1 />
    <v-main style="background-color: #efe5fd">
      <v-container class="pa-6 xs-auto">
        <h2>Assignment</h2>

        <v-card-title>
          <v-text-field
            background-color="white"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            color="black"
            outlined
          ></v-text-field>
        </v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="assignments"
          :single-select="singleSelect"
          item-key="assignmentid"
          show-select
          :search="search"
          style="border: 2px solid #212121"
          hide-default-footer
          show-expand
          class="app-card"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Manage</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>

              <v-dialog v-model="dialog" max-width="1850px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="deep-purple accent-1"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    @click="questionselected = []"
                  >
                    New Assignment
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline" style="margin-left: 600px">{{
                      formTitle
                    }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <!-- add more assignment -->

                        <v-row no-gutters>
                          <v-card class="pa-10" flat>
                            <template>
                              <div>
                                <h2>Create Assignment</h2>

                                <br />

                                Assignment Name

                                <v-text-field
                                  style="width: 500px"
                                  v-model="assignment.assignmentname"
                                  filled
                                  color="#7776AC"
                                  class="textfield"
                                  required
                                ></v-text-field>
                                <v-card
                                  class="pa-2 font-weight-bold rounded-xl"
                                  style="border: 2px solid #212121"
                                >
                                  <v-tabs v-model="tab" color="#7776AC">
                                    <v-tab>Assignment Descirption</v-tab>

                                    <v-tab>Preview</v-tab>

                                    <v-tab-item>
                                      <div
                                        class="me3 textfield font-weight-light"
                                      >
                                        <v-textarea
                                          v-model="
                                            assignment.assignmentdescription
                                          "
                                          color="#7776AC"
                                          filled
                                          name="input-7-4"
                                          extension-height="8"
                                          required
                                          rows="6"
                                          no-resize="true"
                                          oninput="if(Number(this.rows) == 8) this.rows = 8;"
                                        ></v-textarea>
                                      </div>
                                    </v-tab-item>

                                    <v-tab-item>
                                      <v-responsive
                                        class="overflow-y-auto"
                                        max-height="200"
                                      >
                                        <div class="me3 pa-6 text-left">
                                          <v-card-text
                                            v-html="
                                              $md.render(
                                                assignment.assignmentdescription
                                              )
                                            "
                                            style="width: 400px"
                                          >
                                          </v-card-text>
                                        </div>

                                        <v-responsive
                                          height="200vh"
                                          class="text-center pa-2"
                                        >
                                          <v-responsive
                                            min-height="50vh"
                                          ></v-responsive>
                                          <div
                                            class="text-center body-2 mb-12"
                                          ></div>

                                          <v-lazy
                                            v-model="isActive"
                                            :options="{
                                              threshold: 0.5,
                                            }"
                                            min-height="200"
                                            transition="fade-transition"
                                          >
                                            <v-card
                                              class="mx-auto"
                                              max-width="336"
                                            >
                                            </v-card>
                                          </v-lazy>
                                        </v-responsive>
                                      </v-responsive>
                                    </v-tab-item>
                                  </v-tabs>
                                </v-card>

                                <v-col></v-col>

                                Max Score
                                <v-slider
                                  v-model="assignment.maxpossiblescore"
                                  thumb-label="always"
                                  style="width: 500px"
                                  color="#7776AC"
                                ></v-slider>

                                VisibleAt
                                <br />
                                <input
                                  type="datetime-local"
                                  id="meeting-time"
                                  v-model="assignment.visibleat"
                                />
                                <br />
                                AvaliableAt
                                <br />
                                <input
                                  type="datetime-local"
                                  id="meeting-time"
                                  v-model="assignment.avaliableat"
                                />
                                <br />

                                DisibleAt
                                <br />
                                <input
                                  type="datetime-local"
                                  id="meeting-time"
                                  v-model="assignment.disableat"
                                />

                                <br />
                                InVisibleAt
                                <br />
                                <input
                                  type="datetime-local"
                                  id="meeting-time"
                                  v-model="assignment.invisibleat"
                                />
                              </div>
                            </template>
                          </v-card>

                          <v-col>
                            <v-card class="pa-10" flat>
                              <div>
                                <h2>Add Question For Your Assignment</h2>

                                <v-card-title>
                                  <v-text-field
                                    background-color="white"
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    color="black"
                                    outlined
                                  ></v-text-field>
                                </v-card-title>
                                <v-data-table
                                  v-model="questionselected"
                                  :headers="headers2"
                                  :items="questions"
                                  :single-select="questionsingleSelect"
                                  item-key="questionid"
                                  show-select
                                  :search="search"
                                  class="app-card"
                                  style="border: 2px solid #212121"
                                  hide-default-footer
                                  show-expand
                                >
                                  <template v-slot:top>
                                    <v-toolbar flat>
                                      <v-toolbar-title>Manage</v-toolbar-title>
                                      <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                      ></v-divider>
                                      <v-spacer></v-spacer>
                                    </v-toolbar>
                                    <v-switch
                                      v-model="questionsingleSelect"
                                      label="Single select"
                                      class="pa-3"
                                      color="#7776AC"
                                    ></v-switch>
                                  </template>
                                </v-data-table>

                                <v-pagination
                                  v-model="qpage"
                                  class="my-4"
                                  :length="questionpage"
                                  @input="fetchquestionnextpage"
                                  color="deep-purple accent-1"
                                ></v-pagination>
                              </div>
                            </v-card>
                          </v-col>
                        </v-row>

                        <!-- end of add one assignment -->
                      </v-row>
                      <v-row> </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#7776AC" text @click="close"> Cancel </v-btn>
                    <v-btn color="#7776AC" text @click="save"> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogEdit2" max-width="800px">
                <v-card class="rounded">
                  <v-card-title>
                    <span class="headline" style="margin-left: 250px"
                      >Edit Assignment Detail</span
                    >
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-card
                        class="pa-10"
                        outlined
                        tile
                        style="border: 1px solid #212121"
                      >
                        <template>
                          <div style="margin-left: 65px">
                            <br />

                            Assignment Name

                            <v-text-field
                              style="width: 500px"
                              v-model="assignment.assignmentname"
                              filled
                              class="textfield"
                              required
                            ></v-text-field>
                            <v-card
                              class="pa-2 font-weight-bold rounded-xl"
                              style="border: 2px solid #212121; width: 500px"
                            >
                              <v-tabs v-model="tab" color="#7776AC">
                                <v-tab>Assignment Descirption</v-tab>

                                <v-tab>Preview</v-tab>

                                <v-tab-item>
                                  <v-textarea
                                    class="me3 textfield font-weight-light"
                                    style="width: 500px"
                                    v-model="assignment.assignmentdescription"
                                    filled
                                    extension-height="8"
                                    required
                                    rows="6"
                                    no-resize="true"
                                    oninput="if(Number(this.rows) == 8) this.rows = 8;"
                                  ></v-textarea>
                                </v-tab-item>

                                <v-tab-item>
                                  <v-responsive
                                    class="overflow-y-auto"
                                    max-height="200"
                                  >
                                    <div class="me3 pa-6 text-left">
                                      <v-card-text
                                        v-html="
                                          $md.render(
                                            assignment.assignmentdescription
                                          )
                                        "
                                        style="width: 400px"
                                      >
                                      </v-card-text>
                                    </div>

                                    <v-responsive
                                      height="200vh"
                                      class="text-center pa-2"
                                    >
                                      <v-responsive
                                        min-height="50vh"
                                      ></v-responsive>
                                      <div
                                        class="text-center body-2 mb-12"
                                      ></div>

                                      <v-lazy
                                        v-model="isActive"
                                        :options="{
                                          threshold: 0.5,
                                        }"
                                        min-height="200"
                                        transition="fade-transition"
                                      >
                                        <v-card class="mx-auto" max-width="336">
                                        </v-card>
                                      </v-lazy>
                                    </v-responsive>
                                  </v-responsive>
                                </v-tab-item>
                              </v-tabs>
                            </v-card>

                            <v-col></v-col>

                            Max Score
                            <v-slider
                              v-model="assignment.maxpossiblescore"
                              color="#7776AC"
                              thumb-label="always"
                              style="width: 500px"
                            ></v-slider>

                            VisibleAt
                            <br />
                            <input
                              type="datetime-local"
                              id="meeting-time"
                              v-model="assignment.visibleat"
                            />
                            <br />
                            AvaliableAt
                            <br />
                            <input
                              type="datetime-local"
                              id="meeting-time"
                              v-model="assignment.avaliableat"
                            />
                            <br />

                            DisibleAt
                            <br />
                            <input
                              type="datetime-local"
                              id="meeting-time"
                              v-model="assignment.disableat"
                            />

                            <br />
                            InVisibleAt
                            <br />
                            <input
                              type="datetime-local"
                              id="meeting-time"
                              v-model="assignment.invisibleat"
                            />
                          </div>
                        </template>
                      </v-card>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#7776AC" text @click="closeEdit">
                      Cancel
                    </v-btn>
                    <v-btn color="#7776AC" text @click="save"> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#7776AC" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="#7776AC" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-switch
              v-model="singleSelect"
              label="Single select"
              class="pa-3"
              color="deep-purple accent-1"
            ></v-switch>

            <v-dialog v-model="dialogadddelquestion" max-width="1800px">
              <v-card>
                <v-card-title>
                  <span class="headline" style="margin-left: 250px"
                    >Add/Del Question</span
                  >
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-card class="pa-10" outlined tile>
                      <template>
                        <div style="margin-left: 65px">
                          <v-data-table
                            v-model="questionselected"
                            :headers="headers2"
                            :items="questions"
                            :single-select="questionsingleSelect"
                            item-key="questionid"
                            show-select
                            :search="search"
                            class="elevation-1"
                            hide-default-footer
                            show-expand
                          >
                            <template v-slot:top>
                              <v-toolbar flat>
                                <v-toolbar-title>Manage</v-toolbar-title>
                                <v-divider
                                  class="mx-4"
                                  inset
                                  vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                              </v-toolbar>
                              <v-switch
                                v-model="questionsingleSelect"
                                label="Single select"
                                class="pa-3"
                                color="deep-purple accent-1"
                              ></v-switch>
                            </template>
                          </v-data-table>

                          <v-pagination
                            v-model="qpage"
                            class="my-4"
                            :length="questionpage"
                            @input="fetchquestionnextpage"
                            color="deep-purple accent-1"
                          ></v-pagination>
                        </div>
                      </template>
                    </v-card>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="amber darken-1" text @click="closeadddel">
                    Cancel
                  </v-btn>
                  <v-btn color="deep-purple accent-1" text @click="saveadddel">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon class="mr-2" small @click="deleteItem(item)">
              mdi-delete
            </v-icon>

            <v-icon small @click="adddelquestion(item)">
              mdi-playlist-plus
            </v-icon>
            <v-btn
              color="amber darken-1"
              small
              dark
              class="ms-8"
              @click="togglestatus(item)"
            >
              assign

              <v-icon :color="a[assignments.indexOf(item)] ? 'green' : 'red'">
                mdi-checkbox-marked-circle
              </v-icon>
            </v-btn>
          </template>

          <template v-slot:no-data>
            <v-avatar size="200" tile>
              <v-img :src="require('~/assets/nodata.svg')"> </v-img>
            </v-avatar>
          </template>
          <!-- <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
       TestSolution : {{item.tests}}
      </td>
    </template> -->
        </v-data-table>
        <v-col></v-col>
        <v-btn color="amber darken-1" dark class="mb-3" @click="multipledelete">
          Multiple Delete
        </v-btn>
        <v-pagination
          v-model="page"
          class="my-4"
          :length="assignmentpage"
          @input="fetchassignmentnextpage"
          color="deep-purple accent-1"
        ></v-pagination>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbarv1 from "../../../components/Navbarv1.vue";
export default {
  components: { Navbarv1 },
  data() {
    return {
      a: [],
      isActive: false,
      dialogadddelquestion: false,
      dialogDelete: false,
      tab: "",
      dialog: false,

      questionpage: 1,
      editedAssignment: [],
      editedquestion: [],
      questions: [],
      dialogEdit2: false,
      models: {
        base: false,
        conditional: false,
      },
      assignment: {
        assignmentdescription:
          "  ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16            ",
        assignmentname: "",
        question: [],
        maxpossiblescore: 50,
        visibleat: "",
        invisibleat: "",
        disableat: "",
        avaliableat: "",
        assignmentid: 0,
      },
      respdata: [],
      assignments: [],
      assignmentpage: 0,
      editedIndex: -1,
      page: 1,
      search: "",
      qpage: 1,

      headers: [
        {
          text: "AssignmentName",
          align: "start",

          value: "assignmentname",
        },
        {
          text: "AssignmentId",
          value: "assignmentid",
        },

        { text: "Actions", value: "actions", sortable: false },
      ],
      questionsingleSelect: false,
      singleSelect: false,
      headers2: [
        {
          text: "QuestionTopic",
          align: "start",

          value: "questiontopic",
        },
        { text: "questiondifficulty", value: "questiondifficulty" },
        {
          text: "questionid",
          value: "questionid",
        },
      ],
      selected: [],
      questionselected: [],
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex == -1 ? "New Assignment" : "Edit Assignment";
    },
  },
  methods: {
    async togglestatus(item) {
      this.editedAssignment = Object.assign({}, item);

      await this.$axios.$post(
        process.env.baseUrl + "/toggle_course_assignment",
        {
          courseid: this.$route.params.course,
          assignmentid: this.editedAssignment.assignmentid,
        }
      );

      const status = await this.$axios.$get(
        process.env.baseUrl +
          "/" +
          this.$route.params.course +
          "/read_course_assignment_status?page=" +
          this.page
      );
      this.a = status;
    },
    multipledelete() {
      if (this.selected[0] == null) {
        alert("please select item to delete");
      } else {
        var result = confirm(
          "Are you sure to delete these " + this.selected.length + " questions"
        );
        if (result == true) {
          this.$store
            .dispatch("assignment/multipledeleteassignment", this.selected)
            .then((resp) => this.$nuxt.refresh());
        } else {
        }
      }
    },
    closeadddel() {
      this.dialogadddelquestion = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    saveadddel() {
      let data = [this.assignment.assignmentid, this.questionselected];
      this.$store
        .dispatch("assignment/updateassignmentquestion", data)
        .then((resp) => this.fetchassignmentnextpage);
      this.closeadddel();
    },
    save() {
      if (this.editedIndex != -1) {
        this.$store
          .dispatch("assignment/updateassignment", this.assignment)
          .then((resp) => this.fetchassignmentnextpage);

        this.closeEdit();
      } else {
        //add new assignment

        if (this.questionselected[0] == null)
          alert("please select question !!");

        if (this.assignment.assignmentname.length <= 0)
          alert("please input assignment name");

        if (this.assignment.visibleat.length <= 0)
          alert("please select visibleat");
        if (this.assignment.invisibleat.length <= 0)
          alert("please select invisibleat");
        if (this.assignment.avaliableat.length <= 0)
          alert("please select avaliableat");
        if (this.assignment.disableat.length <= 0)
          alert("please select disableat");

        if (
          this.questionselected[0] != null &&
          this.assignment.assignmentname.length > 0 &&
          this.assignment.invisibleat.length > 0 &&
          this.assignment.avaliableat.length > 0 &&
          this.assignment.disableat.length > 0
        ) {
          if (this.assignmentpage == 0) {
            let data = [this.assignment, this.questionselected];
            this.$store
              .dispatch("assignment/createassignmentwithquestion", data)
              .then((resp) => this.fetchassignmentnextpage());

            this.assignmentpage = 1;
            this.page = 1;

            this.close();
          } else {
            if (
              this.assignments[9] != null &&
              this.page == this.assignmentpage
            ) {
              let data = [this.assignment, this.questionselected];
              this.$store
                .dispatch("assignment/createassignmentwithquestion", data)
                .then((resp) => this.$nuxt.refresh)
                .then((this.assignmentpage += 1))
                .then((this.page += 1))
                .then((resp) => this.fetchassignmentnextpage());

              this.close();
            } else {
              let data = [this.assignment, this.questionselected];
              this.$store
                .dispatch("assignment/createassignmentwithquestion", data)
                .then((resp) => this.$nuxt.refresh)
                .then((this.page = this.assignmentpage))
                .then((resp) => this.fetchassignmentnextpage());

              this.close();
            }
          }
        }
      }
    },
    deleteItem(item) {
      this.editedIndex = this.assignments.indexOf(item);
      this.editedAssignment = Object.assign({}, item);
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;

      this.$nextTick(() => {
        this.editedIndex = -1;
      });
    },
    deleteItemConfirm() {
      console.log(this.editedAssignment.assignmentid + "asd");
      this.$store
        .dispatch(
          "assignment/deleteonequestion",
          this.editedAssignment.assignmentid
        )

        .then((resp) => this.fetchassignmentnextpage())
        .catch((err) => console.log(err));

      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeEdit() {
      this.dialogEdit2 = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    editItem(item) {
      this.editedIndex = this.assignments.indexOf(item);
      this.questionselected = [];

      this.assignment = Object.assign({}, item);

      this.dialogEdit2 = true;
    },
    adddelquestion(item) {
      this.editedIndex = this.assignments.indexOf(item);

      this.editedAssignment = Object.assign({}, item);
      this.assignment = Object.assign({}, item);

      this.dialogadddelquestion = true;

      this.$store
        .dispatch("assignment/getquestion", this.assignment.assignmentid)
        .then((resp) => (this.questionselected = resp.data));
    },

    fetchassignmentnextpage: async function () {
      this.$store
        .dispatch("assignment/fetchnextpage", this.page)
        .then((resp) => (this.assignments = resp.data))
        .catch((err) => console.log(err));

      const status = await this.$axios.$get(
        process.env.baseUrl +
          "/" +
          this.$route.params.course +
          "/read_course_assignment_status?page=" +
          this.page
      );
      this.a = status;

      console.log(this.assignments);
    },

    fetchquestionnextpage: function () {
      this.$store
        .dispatch("question/fetchnextpage", this.qpage)
        .then((resp) => (this.questions = resp.data))
        .catch((err) => console.log(err));
    },

    onClickOutsideStandard() {
      this.models.base = false;
    },
  },

  async fetch() {
    const assignments = await this.$axios.$get(
      process.env.baseUrl + "/showtenassignment/1"
    );
    const assignmentpage = await this.$axios.$get(
      process.env.baseUrl + "/assignmentpage/"
    );
    this.assignments = assignments;
    this.assignmentpage = assignmentpage;

    const questions = await this.$axios.$get(
      process.env.baseUrl + "/showtenquestions/1"
    );
    const questionpage = await this.$axios.$get(
      process.env.baseUrl + "/questionpage/"
    );
    this.questions = questions;
    this.questionpage = questionpage;

    const status = await this.$axios.$get(
      process.env.baseUrl +
        "/" +
        this.$route.params.course +
        "/read_course_assignment_status?page=1"
    );
    this.a = status;
  },
  mounted() {
    this.overlay = false;
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300&family=Prompt:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap");

.me2 {
  font-family: "Prompt", sans-serif;

  font-size: 20;
}
.me3 {
  font-family: "Prompt", sans-serif;

  font-size: 20;
}
.app-card {
  display: flex;
  flex-direction: column;

  font-size: 16px;
  background-color: rgb(146 151 179 / 13%);
  border-radius: 14px;
  border: 1px solid rgba(16 18 27 / 40%);
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
}
</style>
