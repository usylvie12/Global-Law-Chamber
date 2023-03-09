import React from 'react'
import "./new.css"

function New() {
  return (
    <section className='new mb'>
        
        <div className='container'>
          <form className='shadow'>
            <h4>Get a free consultation with our legal experts</h4> <br />
            <div>
             
              <input type='text' placeholder='Title' />
            </div>
            <input type='text' placeholder='Description' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Message</button>
          </form>
        </div>
      </section>
  )
}

export default New