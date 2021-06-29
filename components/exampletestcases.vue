<template>
<div>

     <div id="description3" style="height: 350px; width: 100%; border: solid 1px rgba(0,0,0,.3);"    > </div>
<textarea name="description3"   style="display:none;"  />

</div>
</template> 

<script>

import $ from 'jquery'
    export default {
 props: {
   someData: Object
 },
        data(){
<<<<<<< Updated upstream
return {answer:'',code:'',first:0,editor:{}
=======
return {answer:'',code:'',first:0,editor:{},someData:null
>>>>>>> Stashed changes

,

}
        },
    
        
         watch:{
      someData(newVal){
        

const editor = ace.edit('description3');
const textarea = $('textarea[name="description3"]');

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
                fontSize: 25,
            });
             editor.setValue(
this.someData.tests[0].exampletestcases, -1);
this.answer=editor.getValue();
  
      }
  },
        
        

        methods:{
           
            check(){
                  

             this.answer=$('textarea[name="description3"]').val()
            
            },
             ChangeExampleTestCase(){
       this.$emit('ChangeExampleTestCase', this.answer)
    }

        },
         mounted(){
          
 const editor = ace.edit('description3');
const textarea = $('textarea[name="description3"]');

editor.getSession().on("change", function () {
    textarea.val(editor.getSession().getValue());
});
this.editor=editor;
 
;


  editor.setOptions({
                theme: 'ace/theme/monokai',
                mode: 'ace/mode/python',
                printMargin: false,
                vScrollBarAlwaysVisible: true,
                scrollPastEnd: 1,
                fontSize: 25,
            });
             editor.setValue(
"assert_equal(actual=hello(0), expected='F', pass_score=0)", -1);
this.answer=editor.getValue();

        },
        
         created(){
             


// aceEditor.setTheme("ace/theme/clouds");


             setInterval(() => {
                 this.check()
	this.ChangeExampleTestCase()
   if(this.first==0&&this.someData!=null){
             const editor = ace.edit('description3');
const textarea = $('textarea[name="description3"]');

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
                fontSize: 25,
            });
             editor.setValue(
this.someData.tests[0].exampletestcases, -1);
this.code=editor.getValue();
  this.first+=1
  
           }
	}, 100)
         }

          ,
          




        }
    
        
        
    
</script>