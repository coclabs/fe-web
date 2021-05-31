import axios from 'axios'
import consolaGlobalInstance from 'consola'
import { CompatSource } from 'webpack-sources'


export default {


  
  
  async createquestionwithtest({commit},questiontest){
var question=questiontest[0]
var test=questiontest[1]
var questioninit=questiontest[2]
console.log(question.questioninit +"h")
    return new Promise((resolve, reject) => {

     axios({url: 'https://api.pdm-dev.me/createquestionwithtest',data:{
       'questionid':0,
       'questiontopic':question.questiontopic,
       'questiondescription':question.questiondescription,
       'questiondifficulty':question.questiondifficulty,
       'questioninit':questioninit,
       'testsolution':test.testsolution,
       'testcases':test.testcases,
       'exampletestcases':test.exampletestcases,
       'testframework':test.testframework,
       'testlanquage':test.testlanquage
     }, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})     
      .then(resp => {
        console.log(resp)
        resolve(resp)
      })
      .catch(err => {
   
      console.log("asd"+err.message)
       
        reject(err)
      })
    })  
  }
   ,
  async fetchnextpage({commit},page){
    return new Promise((resolve, reject) => {

     axios({url: 'https://api.pdm-dev.me/showtenquestionspost/', data:{page}, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
      
        resolve(resp)
      })
      .catch(err => {
        
      console.log("asd"+err.message)
       
        reject(err)
      })
    })
  }
  ,
  async deleteonequestion({commit},questionid){
    return new Promise((resolve, reject) => {

     axios({url: 'https://api.pdm-dev.me/deleteonequestion/', data:{questionid}, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
      
        resolve(resp)
      })
      .catch(err => {
        
      console.log("asd"+err.message)
       
        reject(err)
      })
    })
  },
  
  async multipledeletequestion({commit},question){
   
    
    var questionid=[];
    var i;
    for (i = 0; i < question.length; i++) {
      questionid.push(question[i].questionid)
    }
    
    return new Promise((resolve, reject) => {

     axios({url: 'https://api.pdm-dev.me/multipledeletequestion/', data:{questionid}, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
      
        resolve(resp)
      })
      .catch(err => {
        
      console.log("asd"+err.message)
       
        reject(err)
      })
    })
  }




,async updatequestion({commit},questiontest){
  var question=questiontest[0]
  var test=questiontest[1]
  var questioninit=questiontest[2]

  
if (test.exampletestcases==""){
  test.exampletestcases=question.tests[0].exampletestcases
}
if (questioninit==""){
  questioninit=question.questioninit
}
if (test.testcases==""){
  test.testcases=question.tests[0].testcases
}
if (test.testsolution==""){
  test.testsolution=question.tests[0].testsolution
}
      return new Promise((resolve, reject) => {
  
       axios({url: 'https://api.pdm-dev.me/updatequestion',data:{
         'questionid':question.questionid,
         'questiontopic':question.questiontopic,
         'questiondescription':question.questiondescription,
         'questiondifficulty':question.questiondifficulty,
         'questioninit':questioninit,
         'testsolution':test.testsolution,
         'testcases':test.testcases,
         'exampletestcases':test.exampletestcases,
         'testframework':test.testframework,
         'testlanquage':test.testlanquage
       }, method: 'POST', headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }})     
        .then(resp => {
          console.log(resp)
          resolve(resp)
        })
        .catch(err => {
     
        console.log("asd"+err.message)
         
          reject(err)
        })
      })  
    },   async validatetestcase({commit},data){
    
      var code={
       language:"python",version:"3.9.2",value:data[0]
      }
      var context={
         test:data[1],scoring:"any_pass",mode:"submit"
      }

              return new Promise((resolve, reject) => {
          
               axios({url: 'https://api.pdm-dev.me/gogo',data:{
               code,context
             
               }, method: 'POST'})     
                .then(resp => {
                  console.log(resp)
                  resolve(resp)
                })
                .catch(err => {
             
              
                  reject(err)
                })
              })  
            } 

}
  
  
  

