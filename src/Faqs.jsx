import React, { useState } from 'react'
import { questions } from './questions'



function Faqs() {
  const [activefaqs, setactivefaqs] = useState(questions[0].id)
  const items = questions.map((itemdata, i) => {
    let itemdetails = {
      itemdata,
      activefaqs,
      setactivefaqs

    }


    return (

      <Faqitems itemdetails={itemdetails} key={i} />
    )
  })

  return (
    <div>
      <h1>frequently  asks questions(Faqs)</h1>

      <div className='faQuoters'>
        {items}
      </div>

    </div>
  )
}
export default Faqs



function Faqitems({ itemdetails }) {
  const { itemdata, setactivefaqs, activefaqs } = itemdetails
  
  return (

    <div className='faqItems'>
      <h2 onClick={() => setactivefaqs(itemdetails.itemdata.id)} >{itemdata.question} </h2>
      <p className={activefaqs == itemdata.id ? 'activefaq' : ''} >{itemdata.answer}</p>
    </div>
  )

}