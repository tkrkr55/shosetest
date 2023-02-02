import React,{useState} from 'react'
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { changeCount, changeName } from '../redux/store'
export default function CartList() {
  let [count,setCount]=useState(0)
  let state = useSelector((state)=>{return state})
 
  let dispatch = useDispatch()
  

  return (
    <div>
      
      <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    {state.cart.map((a,i)=>
    <tr key={i}>
    <td>{state.cart[i].id}</td>
    <td>{state.cart[i].name}</td>
    <td>{state.cart[i].count}</td>
    <td>
      <button onClick={()=>{
        dispatch(changeCount(state.cart[i].id))
      }}>+</button>
    </td>
  </tr>
    )}
    
  </tbody>
</Table> 
    </div>
  )
}
