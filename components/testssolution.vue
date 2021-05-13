<template>
<div>
       
     <div id="description" style="height: 350px; width: 100%; border: solid 1px rgba(0,0,0,.3);" > </div>
<textarea name="description"   style="display:none;" />


</div>
</template> 

<script>
import $ from 'jquery'
    export default {
     
        data(){
return {answer:''}
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
var editor = ace.edit('description');
var textarea = $('textarea[name="description"]');
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
'public static void sum(){ \n \n};', -1);
this.answer=editor.getValue();



// aceEditor.setTheme("ace/theme/clouds");




        }
         ,created(){
             setInterval(() => {
                 this.check()
	this.ChangeTestSolution()
	}, 1000)
         }

          



        }
    
        
        
    
</script>