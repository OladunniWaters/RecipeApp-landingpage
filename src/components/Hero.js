import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col hero_side1'>
           <div>
                <h1>MAKE PAYMENTS EASY AND SIMPLIFY YOUR FINANCES</h1>
           </div>
           <div>
                <p>A new way to make payments easy, reliable and secure. 
                You can manage all your transactions from your mobile phone.
                </p>
            </div>
           <div>
                <button>Get Started</button>
           </div>
           <div>
               <button>Mealdb</button>
           </div>
        </div>

        <div className='col'>
            <img className='hero_image' src={require("../assets/Group 1.png")} alt="unsplash"/>
        </div>
     </div>          
  </div>
  )
}

export default Hero