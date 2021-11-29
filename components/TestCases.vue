<template>
  <div>
    <div
      id="description2"
      style="height: 350px; width: 100%; border: solid 1px rgba(0, 0, 0, 0.3)"
    ></div>
    <textarea name="description2" style="display: none" />
  </div>
</template> 

<script>
import $ from "jquery";
export default {
  props: {
    someData: Object,
  },
  data() {
    return { answer: "", code: "", first: 0 };
  },

  watch: {
    someData(newVal) {
      const editor = ace.edit("description2");
      const textarea = $('textarea[name="description2"]');

      editor.getSession().on("change", function () {
        textarea.val(editor.getSession().getValue());
      });
      editor.setOptions({
        theme: "ace/theme/monokai",
        mode: "ace/mode/python",
        printMargin: false,
        vScrollBarAlwaysVisible: true,
        scrollPastEnd: 1,
        fontSize: 20,
      });
      editor.setValue(newVal.tests[0].testcases, -1);
      this.answer = editor.getValue();
    },
  },

  methods: {
    check() {
      this.answer = $('textarea[name="description2"]').val();
    },
    ChangeTestCase() {
      this.$emit("ChangeTestCase", this.answer);
    },
  },
  mounted() {
    const editor = ace.edit("description2");
    const textarea = $('textarea[name="description2"]');

    editor.getSession().on("change", function () {
      textarea.val(editor.getSession().getValue());
    });
    editor.setOptions({
      theme: "ace/theme/monokai",
      mode: "ace/mode/python",
      printMargin: false,
      vScrollBarAlwaysVisible: true,
      scrollPastEnd: 1,
      fontSize: 20,
    });
    editor.setValue(
      "assert_equal(actual=hello(100), expected='A', pass_score=5,description='Test Getting A condition')\nassert_equal(actual=hello(91), expected='A', pass_score=5,description='Test Getting A condition')\nassert_equal(actual=hello(85), expected='B', pass_score=5,description='Test Getting B condition')\nassert_equal(actual=hello(80), expected='B', pass_score=5,description='Test Getting B condition')\nassert_equal(actual=hello(20), expected='F', pass_score=5,description='Test Getting F condition')",
      -1
    );
    this.answer = editor.getValue();
  },

  created() {
    // aceEditor.setTheme("ace/theme/clouds");

    setInterval(() => {
      this.check();
      this.ChangeTestCase();
      if (this.first == 0 && this.someData != null) {
        const editor = ace.edit("description2");
        const textarea = $('textarea[name="description2"]');

        editor.getSession().on("change", function () {
          textarea.val(editor.getSession().getValue());
        });
        editor.setOptions({
          theme: "ace/theme/monokai",
          mode: "ace/mode/python",
          printMargin: false,
          vScrollBarAlwaysVisible: true,
          scrollPastEnd: 1,
          fontSize: 20,
        });
        editor.setValue(this.someData.tests[0].testcases, -1);
        this.code = editor.getValue();
        this.first += 1;
      }
    }, 100);
  },
};
</script>