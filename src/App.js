import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BtnModule from "./Button.module.css"
import NavBar from './Navbar';
import { questions } from './questions';
function App() {
  const [status, setStatus] = useState(false);
  const [showpassword, setshowpassword] = useState(false)
  const [menubar, setmenubar] = useState(false)
  const [hambar ,sethambar ] = useState(false)
  const [faqs, setfaqs ] = useState(questions[0].id)

  return (
    <div className="App">


      <div className='simple'>
        <h1>frequesntly asked questions</h1>
        <div className='faQuoters'>


          {questions.map((faItems , i) =>{
            return(
              <div className='faqItems'>
              <h2 onClick={()=> setfaqs(faItems.id)} >{faItems.question}</h2>
              <p className={faqs == faItems.id ? 'activefaq' : ''}>{faItems.Answer}</p>
  
            </div>
  
              
            )
          })}







          
        </div>
      </div>

   
























    


        <div onClick={()=> sethambar(!hambar)} className={`model ${(hambar)? 'modelShow' : '' }`}> </div>
          <div className={`showModel ${(hambar)? 'transtionModel' : "" }`}>
            <span onClick={()=>sethambar(!hambar)} className='span'>&times;</span>
            <h1>hello sibtain </h1>         
        </div>

        <button className='btn' onClick={()=>sethambar(!hambar)}>Show mofrl</button>














      <input type={(showpassword) ? 'text' : 'password'} />

      <button onClick={() => setshowpassword(!showpassword)}>
        {
          showpassword ? 'Hide' : 'Show'
        }
      </button>
      <br />

      <button className='micon' onClick={() => setmenubar(!menubar)} >
        
        {

          (menubar) ? <span>&times;
          </span> : <span>&#9776;</span>



        }
        
        </button>

      <div className={`menu ${menubar ? 'active' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Aboyt</li>
          <li>Abosdsd</li>
          <li>Conteatct</li>
          <li>gALLERY </li>
        </ul>

      </div>



      {/* <button className={BtnModule.error}>Modules</button>
      <button className='button' onClick={() => setStatus(!status)}>{
        (status) ? <p className='para'>Hide</p> : <p className='paras'> Show</p>

      }</button>

      {
        (status) ? <p className='para'>Welcome to true turniry operator</p> : null
      } */}





    </div>
  );
}

export default App;
