import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function Cart({shoes,i}) {
  let  navigate = useNavigate()
  let shoseClcik=()=>{
    navigate(`/detail/${i}`)
  }
  return (
    <>
      <div className="col-md-4" onClick={shoseClcik}>
      <img src={`https://codingapple1.github.io/shop/shoes${i}.jpg`} width="80%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
    </div>
    
    </>
  )
}

