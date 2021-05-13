import axios from 'axios'



export default {


  
  
  async createassignmentwithquestion({commit},data){
var assignment=data[0]
var question=data[1]
var i;
var questionid  = new Array();
       for (i = 0; i < question.length; i++) {
        questionid.push(question[i].questionid)
       }
console.log(questionid)
    return new Promise((resolve, reject) => {

     axios({url: 'http://127.0.0.1:8000/createassignmentquestion',data:{
       'assignmentname':assignment.assignmentname,
       'assignmentdescription':assignment.assignmentdescription,
       'maxpossiblescore':assignment.maxpossiblescore,
       'visibleat':assignment.visibleat,
       'avaliableat':assignment.avaliableat,
       'questionid':questionid,
       'disableat':assignment.disableat,
       'invisibleat':assignment.invisibleat,

       
      //  'questionid':questionidเอาจากอาเรย์question,
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

  // ,async createquestionwithtest({commit},questiontest){
  //   var assignment=data[0]
  //   var question=data[1]
  //   var i;
  //   var questionid  = new Array();
  //          for (i = 0; i < question.length; i++) {
  //           questionid.push(question[i].questionid)
  //          }
  //   console.log(questionid)
  //       return new Promise((resolve, reject) => {
    
  //        axios({url: 'http://127.0.0.1:8000/createassignmentquestion',data:{
  //         'assignmentname':assignment.assignmentname,
  //         'assignmentdescription':assignment.assignmentdescription,
  //         'maxpossiblescore':assignment.maxpossiblescore,
  //         'visibleat':assignment.visibleat,
  //         'avaliableat':assignment.avaliableat,
  //         'questionid':questionid,
  //         'disableat':assignment.disableat,
  //         'invisibleat':assignment.invisibleat,
   
  //        }, method: 'POST', headers: {
  //           'Access-Control-Allow-Origin' : '*',
  //           'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //           }})     
  //         .then(resp => {
  //           console.log(resp)
  //           resolve(resp)
  //         })
  //         .catch(err => {
       
  //         console.log("asd"+err.message)
           
  //           reject(err)
  //         })
  //       })  
  //     }
  //      ,
  ,
  async fetchnextpage({commit},page){
    return new Promise((resolve, reject) => {

     axios({url: 'http://127.0.0.1:8000/showtenassignmentpost/', data:{page}, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
      console.log("h")
        resolve(resp)
      })
      .catch(err => {
        
      console.log("asd"+err.message)
       
        reject(err)
      })
    })
  }
}
