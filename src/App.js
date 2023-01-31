import './App.css';
import { ShoseNav } from './component/ShoseNav';
import data from './data.js'
import {useState} from 'react'
import Cart from './component/Cart';
import { Routes, Route, Link } from "react-router-dom";
import ShoseDetail from './page/ShoseDetail'
import axios from 'axios'
import CartList from './page/CartList';

function App() {
  let [shoes,setShoes] = useState(data)

  return (
    <div>

      
      <ShoseNav/>
      
      <Routes>
      <Route path='/' element={<>
        <div>
        <img className='main_bg' src='/이미지/bg.png'></img>
      </div>
     
       <div className="container">
       <div className="row">
        {shoes.map((item,i)=>{
          return <Cart shoes={shoes[i]} i={i} />
        })}
        

       </div>
      </div>
      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{
          let copy = [...shoes, ...결과.data]
          setShoes(copy)
          .catch(()=>{
        console.log('실패함')
      })
        })
      }}>버튼</button></>}></Route>
      
     
      <Route path="/detail/:id" element={<ShoseDetail shoes={shoes}/>}/>
      <Route path="/cart" element={<CartList/>}/>
    </Routes>
    
   </div>

   
  );
}

export default App;
