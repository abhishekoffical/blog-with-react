import {createSlice} from '@reduxjs/toolkit';
   
const initialState ={
    post: [],
    
}
  
const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
       posts:(state,action)=>{
        state.post=action.payload.post;
       },
       addPosts:(state,action)=>{
        state.post.push(action.payload.post)
       },
       deletePosts:(state,action)=>{
         state.posts= state.posts.filter((posts)=>(posts.$id !==action.payload.$id))
       }

    }
}) 

export const {posts,deletePosts, addPosts}=postSlice.actions;
export default postSlice.reducer