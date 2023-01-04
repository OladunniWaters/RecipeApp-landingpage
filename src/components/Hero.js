import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col hero_side1'>
           <div className='hero_header_cont'>
                <h1 className='hero_header'>Let's Start Cooking With Delicious Recipes</h1>
           </div>
           <div className='hero_paragraph_cont'>
                <p className='hero_paragraph'>
                   Watch to learn how to cook but got confused on how to start?
                   No need to worry again!!!
                </p>
            </div>
           <div className='btn_container'>
                <a href='https://expo.dev/@oladunniwaters/RecipeApp?serviceType=classic&distribution=expo-go' target='_blank' className='btn' rel="noreferrer">Get Started</a>
                <button className='btn2'>Learn More</button>
           </div>
        </div>

        <div className='col'>
            <img className='hero_image' src={require("../assets/Group 1.png")} alt="unsplash"/>
        </div>
     </div>    
      

   {/*

   <div className='down_image' >
            <img src={require("../assets/Ellipse 23.png")} alt="unsplash"/>
        </div>

     <div className='hero_second_cont'>
        <div className='process'>
          <h2>How it works</h2>
        </div>

        <div className='row'>
           <div className='col'>
              <div className='num'>1</div>
              <p className='step_header'>Download</p>
              <p className='step_paragraph'>Download expo go app</p>
           </div>

           <span className='span1'>
             <img src={require("../assets/Vector 42.png")} alt="unsplash"/>
           </span>

           <div className='col'>
              <div className='num'>2</div>
              <p className='step_header'>Click on the button</p>
              <p className='step_paragraph'>Click on the get started button to take you to the expo link for you to use anytime</p>
           </div>

           <span>
             <img src={require("../assets/Vector 42.png")} alt="unsplash"/>
           </span>

           <div className='col'>
              <div className='num'>3</div>
              <p className='step_header'>Success</p>
              <p className='step_paragraph'>You can use recipe app in peace and all its functionalities</p>
           </div>
        </div>
   </div>  

  */}
      
  </div>
  )
}

export default Hero