import axios from 'axios'
import consolaGlobalInstance from 'consola'
import { CompatSource } from 'webpack-sources'


export default {


  
  
  async createquestionwithtest({commit},questiontest){
var question=questiontest[0]
var test=questiontest[1]


    return new Promise((resolve, reject) => {

     axios({url: 'http://127.0.0.1:8000/createquestionwithtest',data:{
       'questiontopic':question.questiontopic,
       'questiondescription':question.questiondescription,
       'questiondifficulty':question.questiondifficulty,
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

     axios({url: 'http://127.0.0.1:8000/showtenquestionspost/', data:{page}, method: 'POST', headers: {
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





}

  
  
  

