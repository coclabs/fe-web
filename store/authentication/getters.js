export default {
   
      isLoggedIn(state){
   
  //  state.token=window.localStorage.getItem("token");

      return state.token
    }
   ,authStatus(state){
   return state.status
   }
   ,datetime(state){
   
 
  
        return state.datetime
      }

  , getauthenticated (state) {
    return state.user
  }
  }
  