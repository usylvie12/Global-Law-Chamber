import React from "react"
import img from "../../images/glc.jpg"

import { Link } from "react-router-dom"
import "./hero.css"

const Hero = () => {
  return (
    
     <section className='home'>
        
        <div className='container flex mtop'>
          <div className='left-side'>
            <h1>Get An Attorney Who Will Fight For Your Rights</h1>

            <p> 
            Global Law Chambers Ltd is a well-established, medium-size business law firm. 
                            We offer a full range of corporate and commercial legal services, including but not limited 
                            to dispute resolution, litigation, employment, finance, company restructuring and tax.
            </p>
              
              
              
              <div className="left-link"><Link to="/contact" className="btn6">Free Consultation</Link></div>
            
          </div>
          
          <div className='right-side'>
            <img src={img} alt='' />
          </div>
        </div>
        
      </section>
      
   
  )
}

export default Hero
