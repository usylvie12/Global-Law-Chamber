import React from 'react'

function Login() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
       
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          
        />
        <button >Login</button>
        
       
      </form>
    </div>
  )
}

export default Login