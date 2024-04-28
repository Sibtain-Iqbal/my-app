import React from 'react'
import { questions } from './questions'


let [Finditem, setfinditem] = (questions[0].id)

const items = questions.map((fqitems,i)=>{



  let itemdetails ={
    fqitems
    ,Finditem
    ,setfinditem 
  }

  return (
    <FaqItems itemdetails = {itemdetails} key={i} />
  )
})








function Faqs() {
  return (
    <div>
        <h1>Frequently asked questions(faqs)</h1>
        <div className='faQuoters'>
          {items}

  </div>
      
    </div>
  )
}

export default Faqs



function FaqItems ({itemdetails}){
    return(
        <div>

            <div className='faqItems'>
              <h2>{itemdetails.fqitems.question}</h2>
            </div>



        </div>
    )
}
