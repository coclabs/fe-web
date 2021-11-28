<template>
  <v-app>
    <Navbarv6 />
    <v-main style="background-color: #ede7f6">
      <v-row no-gutters v-if="question != null">
        <v-col>
          <v-card class="pa-2" outlined tile height="800px">
            <v-subheader class="text-h5 black--text"
              >Question{{ questionindex + 1 }}</v-subheader
            >

            <v-card-title
              class="body-1"
              v-html="$md.render(question.Question.questiondescription)"
            >
            </v-card-title>
          </v-card>
        </v-col>
        <v-col order="12">
          <v-card
            class="pa-2"
            outlined
            tile
            height="800px"
            style="background-color: black"
          >
            <h2 style="color: white">Test Result</h2>

            <h3 style="color: orange">Example Test Cases</h3>
            <ul>
              <li
                v-for="item in validateresultexampletest.successes"
                :key="item.index"
              >
                Test: {{ item.description }} <br />
                <h3 style="color: green">{{ item.case }} Pass</h3>
              </li>
            </ul>
            <ul>
              <li
                v-for="item in validateresultexampletest.failures"
                :key="item.index"
              >
                <h3 style="color: red">
                  Test: {{ item.description }} <br />
                  {{ item.case }} Fail<br />
                  Reason: <br />
                  {{ item.reason }}
                </h3>
              </li>
            </ul>

            <div
              style="color: red"
              v-if="validateresultexampletest.code == 500"
            >
              Test: {{ item.description }} <br />
              Error :{{ validateresultexampletest.reason }}
            </div>
          </v-card>
        </v-col>
        <v-col order="1">
          <v-card class="pa-2" outlined tile height="800px" width="600px">
            <div
              id="description3"
              style="
                height: 580px;
                width: 100%;
                border: solid 1px rgba(0, 0, 0, 0.3);
              "
            ></div>
            <textarea name="description3" style="display: none" />
            <v-footer app color="transparent" inset padless height="200" dark>
              <v-row justify="center" no-gutters>
                <v-btn style="margin-left: 300px" @click="validateexampletest"
                  >Run</v-btn
                >
                <v-dialog v-model="dialog" persistent max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="deep-purple accent-1"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="mockdata"
                    >
                      Submit
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5"> Submit </v-card-title>
                    <v-card-text
                      >If You Submit Your Answer Will Be Collected</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="amber darken-1"
                        text
                        @click="returnmockdata"
                      >
                        Disagree
                      </v-btn>
                      <v-btn color="teal accent-2" text @click="submit">
                        Agree
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialog2" persistent max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="amber darken-1"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="mockdata"
                      :disabled="!isDisabled"
                    >
                      End
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5"> End </v-card-title>
                    <v-card-text
                      >If you End Your Assignment Will Be Marked As
                      Done</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="amber darken-1"
                        text
                        @click="returnmockdata"
                      >
                        Disagree
                      </v-btn>
                      <v-btn color="teal accent-2" text @click="end">
                        Agree
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-footer>
          </v-card>
        </v-col>
      </v-row>
      <v-footer app color="transparent" inset padless dark>
        <v-bottom-navigation v-model="value">
          <v-btn @click="back" :disabled="questionindex == 0"> Back </v-btn>

          {{ questionindex + 1 }}/{{ questions.length }}

          <v-btn
            @click="next"
            :disabled="questionindex == questions.length - 1"
          >
            Next
          </v-btn>
        </v-bottom-navigation>
      </v-footer>

      <v-row v-if="question == null">
        <h1 style="color: red">
          NO Question Please Add Question To Assignment
        </h1>
        <div
          id="description3"
          style="
            height: 550px;
            width: 100%;
            border: solid 1px rgba(0, 0, 0, 0.3);
          "
        ></div>
        <textarea name="description3" style="display: none" />
      </v-row>
    </v-main>
  </v-app>
</template>




<script>
import $ from "jquery";
import Navbarv6 from "../../../components/Navbarv6.vue";
export default {
  async fetch() {
    // this.question= await this.$axios.$get(process.env.baseUrl + '/getquestionbyquestionid/'+this.$route.params.questionid)
    this.questions = await this.$axios.$get(
      process.env.baseUrl +
        "/getquestionbyassignmentid/" +
        this.$route.params.assignmentid
    );

    //create assignment to track time do
    //use in production
    console.log(this.questions + "track1");

    this.question = this.questions[this.questionindex];
    console.log(this.questions);
  },
  computed: {
    isDisabled() {
      // you can  check your form is filled or not here.

      return this.now == this.questions.length - 1;
    },
  },
  components: { Navbarv6 },
  data() {
    return {
      totalcorrect: 0,
      totalnotcorrect: 0,
      totalscore: 0,
      assignment: [],
      now: 0,
      numquestionnow: 0,
      mock: {},
      dialog: false,
      dialog2: false,
      numberquestion: 0,
      validateresulttest: { code: 0 },
      validateresultexampletest: { code: 0 },
      ace: {},
      first: 0,
      check: false,
      defaultquestion: {
        questiondescription:
          "No Question! Please Add Question To This Assignment",
      },
      questions: [
        //mock
        [
          {
            questiondifficulty: "asd",
            questiontopic: "asd",
            questionid: 320,
            questioninit: "asd",
            questiondescription:
              " ## Add a list of numbers and return its sum. \n ### Example:\n #### Input [ 3 , 4 , 2 , 7 ]\n #### Result 16 ",
          },
          {
            testframework: "",
            exampletestcases: "asd",
            testsolution: "asdasd",
            question_id: 320,
            testlanquage: "",
            testcases: "asd",
            testid: 322,
          },
        ],
        [
          {
            questiondifficulty: "asd",
            questiontopic: "asd",
            questionid: 333,
            questioninit: "asd",
            questiondescription:
              " ## Add a list of numbers and return its sum. \n ### Example:\n #### Inputn #### Result 16 ",
          },
          {
            testframework: "",
            exampletestcases: "asd",
            testsolution: "asd",
            question_id: 333,
            testlanquage: "",
            testcases: "asd",
            testid: 335,
          },
        ],
        [
          {
            questiondifficulty: "dasd",
            questiontopic: "asd",
            questionid: 335,
            questioninit: "asd",
            questiondescription:
              " ## Add a list of numbers and return its sum. \n ### Example:\n  ",
          },
          {
            testframework: "",
            exampletestcases: "sad",
            testsolution: "adas",
            question_id: 335,
            testlanquage: "",
            testcases: "asd",
            testid: 337,
          },
        ],
      ],
      keep: "",
      value: "recent",
      maxnum: 0,
      questionindex: 0,
      question:
        //mock
        [],
    };
  },

  methods: {
    // write here
    postassigment() {
      this.$axios
        .$post(process.env.baseUrl + "/studentassignment", {
          courseid: this.$cookies.get("courseid"),
          assignmentid: this.$route.params.assignmentid,
          totalscore: 0,
          studentid: this.$route.params.student,
          totalcorrect: 0,
          totalnotcorrect: 0,
        })
        .then((resp) => (this.assignment = resp));
    },
    fetchnext() {
      this.question = this.questions[this.questionindex];
    },
    mockdata() {
      this.mock = $('textarea[name="description3"]').val();
    },
    returnmockdata() {
      this.dialog = false;
      this.dialog2 = false;
      this.ace.setValue(this.mock, -1);
    },
    async validateexampletest() {
      let a = $('textarea[name="description3"]').val();
      let data = [
        $('textarea[name="description3"]').val(),
        this.question.Test.exampletestcases,
      ];
      await this.$store
        .dispatch("question/validatetestcase", data)
        .then(
          (resp) => (this.validateresultexampletest = JSON.parse(resp.data))
        );

      this.ace.setValue(a, -1);
    },
    async end() {
      var courseid = this.$cookies.get("courseid");
      console.log(this.assignment.studentassigmentid);
      console.log(this.totalscore);

      await this.$axios.$put(process.env.baseUrl + "/studentassignment", {
        courseid,
        studentassignmentid: this.assignment.studentassigmentid,
        totalscore: this.totalscore,
        totalcorrect: this.totalcorrect,
        totalnotcorrect: this.totalnotcorrect,
      });

      await this.$axios.post(process.env.baseUrl + "/write_assignment_record", {
        courseid,
        assignmentid: this.$route.params.assignmentid,
        studentscore: this.totalscore,
      });

      this.$router.push(
        "/" + this.$cookies.get("courseid") + "/assignmentsubmitted"
      );
    },
    async submit() {
      let codee = $('textarea[name="description3"]').val();

      let context = {
        test: this.question.Test.testcases,
        scoring: "any_pass",
        mode: "submit",
      };

      let code = {
        language: "python",
        version: "3.9.2",
        value: codee,
      };

      let validateresulttest = JSON.parse(
        await this.$axios.$post(process.env.baseUrl + "/gogo", {
          code,
          context,
        })
      );
      let num = this.now + 1;
      let testresultstring = "Test Result";

      if (validateresulttest.code == 500) {
        alert(
          "question" +
            num +
            " contain error so you cant submit untill you solve error" +
            "\n" +
            "error: " +
            validateresulttest.reason
        );
      } else {
        this.totalscore += validateresulttest.total;
        let totalcorrect = 0;
        let totalnotcorrect = 0;

        if (validateresulttest.successes.length != 0) {
          for (let i = 0; i < validateresulttest.successes.length; i++) {
            let test = JSON.stringify(validateresulttest.successes[i]);
            testresultstring = testresultstring + "\n" + test;

            totalcorrect += 1;
            this.totalcorrect += 1;
          }
        }
        if (validateresulttest.failures.length != 0) {
          for (let i = 0; i < validateresulttest.failures.length; i++) {
            let test = JSON.stringify(validateresulttest.failures[i]);
            testresultstring = testresultstring + "\n" + test;

            totalnotcorrect += 1;
            this.totalnotcorrect += 1;
          }
        }

        await this.$axios.$post(
          process.env.baseUrl + "/studentassignmentquestion",
          {
            questionnumber: num,
            studentscore: validateresulttest.total,
            testresult: testresultstring,
            studentanswer: codee,
            totalcorrect: totalcorrect,
            totalnotcorrect: totalnotcorrect,
            studentassignmentid: this.assignment.studentassigmentid,
          }
        );

        alert("submitted");
      }

      this.dialog = false;
    },
    // async submit() {
    //   let totalallscore = 0;
    //   let alldata = false;
    //   let codee = $('textarea[name="description3"]').val();

    //   localStorage.setItem(this.questions.length - 1, codee);

    //   for (let i = 0; i < this.questions.length; i++) {
    //     let code1 = localStorage.getItem(i);

    //     let context = {
    //       test: this.questions[i].Test.testcases,
    //       scoring: "any_pass",
    //       mode: "submit",
    //     };

    //     let code = {
    //       language: "python",
    //       version: "3.9.2",
    //       value: code1,
    //     };

    //     let validateresulttest = JSON.parse(
    //       await this.$axios.$post(process.env.baseUrl + "/gogo", {
    //         code,
    //         context,
    //       })
    //     );

    //     if (validateresulttest.code == 500) {
    //       let num = i + 1;
    //       alert(
    //         "question" +
    //           num +
    //           " contain error so you cant submit untill you solve error" +
    //           "\n" +
    //           "error: " +
    //           validateresulttest.reason
    //       );
    //       break;
    //     }

    //     let testresult = [];
    //     let totalcorrect = 0;
    //     let totalnotcorrect = 0;

    //     totalallscore += validateresulttest.total;
    //     if (validateresulttest.successes.length != 0) {
    //       for (let i = 0; i < validateresulttest.successes.length; i++) {
    //         testresult.push(validateresulttest.successes[i]);
    //         totalcorrect += 1;
    //       }
    //     }
    //     if (validateresulttest.failures.length != 0) {
    //       for (let i = 0; i < validateresulttest.failures.length; i++) {
    //         testresult.push(validateresulttest.failures[i]);
    //         totalnotcorrect += 1;
    //       }
    //     }
    //   }
    // await this.$axios.$post(process.env.baseUrl + "/studentassignment", {
    //   assignmentid: this.$route.params.assignmentid,
    //   totalscore: 2,
    //   studentid: 1,
    //   totalcorrect: 5,
    //   totalnotcorrect: 4,
    // });

    // this.$router.push("/1/assignmentsubmitted");

    // if (this.validateresulttest.code == 500) {
    //   await this.$axios.$post(process.env.baseUrl + "/studentassignment", {
    //     assignmentid: this.$route.params.assignmentid,
    //     totalscore: 2,
    //     studentid: 1,
    //     totalcorrect: 5,
    //     totalnotcorrect: 4,
    //   });
    // }
    // },
    back() {
      let code = $('textarea[name="description3"]').val();
      localStorage.setItem(this.questionindex, code);

      this.questionindex -= 1;

      this.now -= 1;

      this.fetchnext();

      this.ace.setValue(localStorage.getItem(this.questionindex), -1);
    },
    next() {
      let code = $('textarea[name="description3"]').val();
      localStorage.setItem(this.questionindex, code);
      this.questionindex += 1;

      this.numquestionnow += 1;
      this.now += 1;

      this.fetchnext();

      if (
        this.questionindex == this.numquestionnow &&
        this.now == this.numquestionnow
      ) {
        this.ace.setValue(this.question.Question.questioninit, -1);
      } else {
        this.ace.setValue(localStorage.getItem(this.questionindex), -1);
      }

      //  this.$route.params.questionid=335
    },
  },

  mounted() {
    this.postassigment();

    const editor = ace.edit("description3");
    const textarea = $('textarea[name="description3"]');

    editor.getSession().on("change", function () {
      textarea.val(editor.getSession().getValue());
    });
    editor.setValue(this.question.Question.questioninit, -1);
    editor.setOptions({
      theme: "ace/theme/monokai",
      mode: "ace/mode/python",
      printMargin: false,
      vScrollBarAlwaysVisible: true,
      scrollPastEnd: 1,
      fontSize: 25,
    });
    this.ace = editor;
  },
  updated() {
    if (this.numberquestion == 0) {
      this.fetchnext();
      this.numberquestion++;
    }
  },
};
</script>

<style>
</style>
