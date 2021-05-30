<template>
<div>

     <div id="description4" style="height: 350px; width: 100%; border: solid 1px rgba(0,0,0,.3);" > </div>
<textarea name="description4"   style="display:none;" />

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
        

const editor = ace.edit('description4');
const textarea = $('textarea[name="description4"]');

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
this.someData.questioninit, -1);
this.answer=editor.getValue();
  
      }
  },
        
        

        methods:{
           
            check(){
                
             this.answer=$('textarea[name="description4"]').val()
            
            },
             ChangeInitSolution(){
       this.$emit('ChangeInitSolution', this.answer)
    }

        },
         mounted(){
          
 const editor = ace.edit('description4');
const textarea = $('textarea[name="description4"]');

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
"def hello(avg): \n   #Write Your Code And Test Here", -1);
this.answer=editor.getValue();

        },
        
         created(){
             



// aceEditor.setTheme("ace/theme/clouds");


             setInterval(() => {
                 this.check()
	this.ChangeInitSolution()
   if(this.first==0 &&this.someData!=null && this.someData.questioninit!=""){
             const editor = ace.edit('description4');
const textarea = $('textarea[name="description4"]');

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
this.someData.questioninit, -1);
this.code=editor.getValue();
  this.first+=1
  
           }
	}, 100)
         }

          ,
          




        }
    
        
        
    
</script>