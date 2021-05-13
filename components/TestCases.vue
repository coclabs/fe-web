<template>
<div>
        
     <div id="description2" style="height: 350px; width: 100%; border: solid 1px rgba(0,0,0,.3);" > </div>
<textarea name="description2"   style="display:none;" />


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
                
             this.answer=$('textarea[name="description2"]').val()
            
            },
             ChangeTestCase(){
       this.$emit('ChangeTestCase', this.answer)
    }

        },
         mounted(){

var editor = ace.edit('description2');
var textarea = $('textarea[name="description2"]');
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
'import *  from test \n random(){ }', -1);
this.answer=editor.getValue();

        }
         ,created(){
             



// aceEditor.setTheme("ace/theme/clouds");


             setInterval(() => {
                 this.check()
	this.ChangeTestCase()
	}, 1000)
         }

          



        }
    
        
        
    
</script>