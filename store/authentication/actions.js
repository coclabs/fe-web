import axios from 'axios'


export default {

 async loginteacher({commit}, user ){
 
    return new Promise((resolve, reject) => {
      // commit('auth_request')

      axios({url: 'http://127.0.0.1:8000/createtokenteacher', data: user, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
        console.log(resp)
         const token = resp.data.accesstoken
       
         var today = new Date();
         var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
         today.setHours( today.getHours() + 1 );
         
      
         var dateTime = today;

           this.$cookies.set('token',token, {
            path: '/',
            maxAge: 60*60      
          })
          this.$cookies.set('user',user, {
            path: '/',
            maxAge: 60*60      
          })
          this.$cookies.set('datetime',dateTime.toString(), {
            path: '/',
            maxAge: 60*60      
          })
         
          this.$cookies.set('role',user.role, {
            path: '/',
            maxAge: 60*60      
          })
          
          commit('stdatetime',dateTime.toString())
         commit('sttoken',token)
         commit('finishauthenticated',resp.data.user)
        
        resolve(resp)
    
      })
      .catch(err => {
       
        if(err=401){
          commit('auth_error',"Please Check your account")
        }
         reject(err)
     
      })
    })
},

async register({commit}, user){
    return new Promise((resolve, reject) => {
   console.log(user)
     axios({url: 'http://127.0.0.1:8000/users', data: user, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
        
        const user = resp.data.user
   

     console.log(resp)
        resolve(resp)
      })
      .catch(err => {
        if(err=400){
          commit('auth_error',"email alredy registered")
        }
      
       
        reject(err)
      })
    })
  },

  async logoutteacher({commit}){
    return new Promise((resolve, reject) => {
      this.$cookies.remove('token')
      this.$cookies.remove('role')
      this.$cookies.remove('timedate')
      commit('logout')
    
      
      resolve()
    })
  
  
  
}
, settoken({commit},token){
commit('sttoken',token)

}
,
   setdatetime({commit},datetime){
    commit('stdatetime',datetime)
    
    }
    



    ,
    
async authenbytoken({commit},token){
  console.log(token)
  return new Promise((resolve, reject) => {
   axios({url: 'http://127.0.0.1:8000/authenbytoken', data: token, method: 'POST', headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }})
    .then(resp => {
    
     commit('finishauthenticated',resp.data)
 console.log(resp.data)

 

      resolve(resp)
    })
    .catch(err => {
      if(err=400){
        commit('auth_error',"token error")
      }
    
     
      reject(err)
    })
  })
}
}