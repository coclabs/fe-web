
export default {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, user){
    
    console.log(user)

    state.status = 'success'
    // state.token = token
    state.user = user
  },
  auth_error(state,er){
    state.status = er
  },
  logout(state){
    state.status = ''
    state.token = ''

  }
,sttoken(state,token){
state.token=token

},
stuser(state,user){
  state.user=user

}  
,
stdatetime(state,datetime){
  state.datetime=datetime
},finishauthenticated(state,authenticated){
  state.user=authenticated
}

}