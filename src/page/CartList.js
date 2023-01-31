import React,{useState} from 'react'
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { changeName } from '../redux/store'
export default function CartList() {
  let [go,setgo] = useState('')
  let state = useSelector((state)=>{return state})
 
  let dispatch = useDispatch()
  

  return (
    <div>
      { state.user}의 바구니
      <button onClick={()=>{
        dispatch(changeName())
      }}>버튼</button>
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
    <tr>
    <td>1</td>
    <td>{state.cart[i].name}</td>
    <td>{state.cart[i].count}</td>
    <td>안녕</td>
  </tr>
    )}
    
  </tbody>
</Table> 
    </div>
  )
}
