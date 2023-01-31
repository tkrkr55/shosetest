import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap'
export default function ShoseDetail({shoes}) {
  let [count, setCount] = useState(true)
  let [fade,setfade] = useState('')
  let [fade2,setfade2] = useState('')
  let [탭,탭변경]=useState(0)
  useEffect(()=>{
    let a = setTimeout( ()=>{setCount(false) },2000);
    return()=>{
      clearTimeout(a)
    }
  },[])
  useEffect(()=>{
    setTimeout(()=>{ setfade('end')},100) 
    return  ()=>{
      setfade('')
    }
  },[탭])

  useEffect(()=>{
    setfade2('end')
    return ()=>{
      setfade2('')
    }
  },[])

  let {id}=useParams()
  
  let 찾은상품 = shoes.find((x)=>{
    return x.id == id
  })


  return (
    
    <div className={'start' + fade2}>
      {count == true ? <div>오늘만 20% 할인행사</div> : null
      }
       
      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>상품설명 : {찾은상품.content}</p>
      <p>{찾은상품.price}원 </p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
    </div> 
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={()=>{ 탭변경(0)}} eventKey="link-0">내용1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ 탭변경(1)}} eventKey="link-1">내용2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link-2">내용3 </Nav.Link>
      </Nav.Item>
      
    </Nav>
    <Tab 탭={탭} fade={fade}></Tab>
    </div>
    
  )
    }
  function Tab({탭,fade}){
    return (
      <div className={'start' + fade }>
   { [<div>내용1</div>,<div>내용2</div>,<div>내용3</div>][탭]}
    </div>
    )
    
  }
  



