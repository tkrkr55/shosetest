import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

let user = createSlice({
  name :'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'john' + state

    }
  }

})

let cart = createSlice({
  name:'cart',
  initialState :[

  ],
  reducers :  {
    changeCount(state,action){
     let 번호 = state.findIndex((a)=>{return a.id === action.payload })
      state[번호].count++
    },
    addItem(state,action){
      let 번호 = state.findIndex((a)=>{return a.id === action.payload.id})
      console.log(번호)
    
    if( 번호 >= 0 ){

       state[번호].count++
    }else{
      state.push(action.payload)
    }
    }
  },
 

})

export let {changeName} = user.actions
export let {changeCount,addItem} = cart.actions



export default configureStore({
  reducer :{
    user : user.reducer,
    cart : cart.reducer
  }
})