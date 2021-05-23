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
console.log(assignment)
    return new Promise((resolve, reject) => {

     axios({url: 'http://127.0.0.1:8000/createassignmentquestion',data:{
       'assignmentname':assignment.assignmentname,
       'assignmentdescription':assignment.assignmentdescription,
       'maxpossiblescore':assignment.maxpossiblescore,
       'visibleat':assignment.visibleat,
       'avaliableat':assignment.avaliableat,
     'questionid':questionid
       ,
       'assignmentid':assignment.assignmentid,
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
  },  
  async deleteonequestion({commit},assignmentid){
    return new Promise((resolve, reject) => {


     axios({url: 'http://127.0.0.1:8000/deleteoneassignment/', data:{assignmentid}, method: 'POST', headers: {
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
  },  async multipledeleteassignment({commit},assignment){
   
    
    var assignmentid=[];
    var i;
    for (i = 0; i < assignment.length; i++) {
      assignmentid.push(assignment[i].assignmentid)
    }
    
    return new Promise((resolve, reject) => {

     axios({url: 'http://127.0.0.1:8000/multipledeleteassignment/', data:{assignmentid}, method: 'POST', headers: {
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
   async getquestion({commit},assignmentid){
   



    return new Promise((resolve, reject) => {

     axios({url: 'http://127.0.0.1:8000/findquestionbyassignmentid/', data:{assignmentid}, method: 'POST', headers: {
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
,async updateassignment({commit},assignment){
  console.log(assignment.assignmentname)
      return new Promise((resolve, reject) => {
  
       axios({url: 'http://127.0.0.1:8000/updateassignment',data:{
        'assignmentname':assignment.assignmentname,
       'assignmentdescription':assignment.assignmentdescription,
       'maxpossiblescore':assignment.maxpossiblescore,
       'visibleat':assignment.visibleat,
       'avaliableat':assignment.avaliableat,
       'assignmentid':assignment.assignmentid,
       'disableat':assignment.disableat,
       'invisibleat':assignment.invisibleat,
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
    },async updateassignmentquestion({commit},data){
      
      var assignmentid=data[0]
      var question=data[1]
      var questionid=[];
      var i;
      for (i = 0; i < question.length; i++) {
        questionid.push(question[i].questionid)
      }
      
          return new Promise((resolve, reject) => {
      
           axios({url: 'http://127.0.0.1:8000/updateassignmentquestion',data:{
            'assignmentid':assignmentid,
           'questionid':questionid,
         
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
}
