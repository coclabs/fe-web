<template>
<div>

     <div id="description" style="height: 350px; width: 100%; border: solid 1px rgba(0,0,0,.3); " > </div>
<textarea name="description"   style="display:none; " />

</div>
</template> 

<script>

import $ from 'jquery'
    export default {
 props: {
   someData: Object
 },
        data(){
return {answer:'',code:'',first:0

,

}
        },
    
        
         watch:{
      someData(newVal){
        

const editor = ace.edit('description');
const textarea = $('textarea[name="description"]');

editor.getSession().on("change", function () {
    textarea.val(editor.getSession().getValue());
});
;

editor.setOptions({
                theme: 'ace/theme/monokai',
                mode: 'ace/mode/python',
                printMargin: false,
                vScrollBarAlwaysVisible: true,
                scrollPastEnd: 1,
                fontSize: 20,
            });
             editor.setValue(
this.someData.tests[0].testsolution, -1);
this.answer=editor.getValue();
  
      }
  },
        
        

        methods:{
           
            check(){
                
             this.answer=$('textarea[name="description"]').val()
            
            },
             ChangeTestSolution(){
       this.$emit('ChangeTestSolution', this.answer)
    }

        },
         mounted(){
          
 const editor = ace.edit('description');
const textarea = $('textarea[name="description"]');

editor.getSession().on("change", function () {
    textarea.val(editor.getSession().getValue());
});
;


  editor.setOptions({
                theme: 'ace/theme/monokai',
                mode: 'ace/mode/python',
                printMargin: false,
                vScrollBarAlwaysVisible: true,
                scrollPastEnd: 1,
                fontSize: 20,
            });
             editor.setValue(
"def hello(avg): \n if avg>=91 and avg<=100 :return 'A'  \n elif avg>=80 and avg<=90 :return 'B' \n else: return 'F'", -1);
this.answer=editor.getValue();

        },
        
         created(){
             



// aceEditor.setTheme("ace/theme/clouds");


             setInterval(() => {
                 this.check()
	this.ChangeTestSolution()
   if(this.first==0&&this.someData!=null){
             const editor = ace.edit('description');
const textarea = $('textarea[name="description"]');

editor.getSession().on("change", function () {
    textarea.val(editor.getSession().getValue());
});
;

editor.setOptions({
                theme: 'ace/theme/monokai',
                mode: 'ace/mode/python',
                printMargin: false,
                vScrollBarAlwaysVisible: true,
                scrollPastEnd: 1,
                fontSize: 20,
            });
             editor.setValue(
this.someData.tests[0].testsolution, -1);
this.code=editor.getValue();
  this.first+=1

           }
	}, 100)
         }

          ,
          




        }
    
        
        
    
</script>