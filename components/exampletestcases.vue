<template>
<div>

     <div id="description3" style="height: 350px; width: 100%; border: solid 1px rgba(0,0,0,.3);" > </div>
<textarea name="description3"   style="display:none;" />
{{code}}

</div>
</template> 

<script>

import $ from 'jquery'
    export default {
     props: ['someData'],
        data(){
return {answer:'',code:"ss"

,

}
        },
        watch:{
         
        someData: function(newVal) { 
         
this.code=this.someData

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
this.code, -1);
this.answer=editor.getValue();

        }
        }
        ,
        
        

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
this.code, -1);
this.answer=editor.getValue();

        }
         ,created(){
             



// aceEditor.setTheme("ace/theme/clouds");


             setInterval(() => {
                 this.check()
	this.ChangeExampleTestCase()
	}, 1000)
         }

          ,
          




        }
    
        
</script>