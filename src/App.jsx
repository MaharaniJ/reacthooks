import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const initialState ={count:0}
    const reducer =(state,action)=>{
        //reducer has state and action(method) then switch case contains action type(type of method)
        switch(action.type){
            case 'Increase':{
                return {count:state.count+1}
            }
            case 'Decrease':{ 
                return {count:state.count-1}
            }
            default: {
                return state
            }
            //default case is must be
                
        }
    }
 const [state,dispatch]= useReducer(reducer,initialState)
 //dispatch is used to update the state
 //ussReducer contains reduce and initialState that userReducer is stored in state and dispatch
 const Increase = ()=>{
      dispatch({type:'Increase'})
 }
 const Decrease = ()=>{
    dispatch({type:'Decrease'})
 }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center ms-auto'>
      <div className='w-50 px-5 pt-3 pb-5'>
        <h2>Count:{state.count}</h2>
        <button onClick={Increase} className='btn btn-success mr-2'>Increase</button>
        <button onClick={Decrease} className='btn btn-primary mr-2'>Decrease</button>
      </div>
    </div>
  )
}
        
      

export default App