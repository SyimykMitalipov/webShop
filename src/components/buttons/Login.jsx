import React from 'react';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email,setEmail] = useState()
  const [password , setPassword ] = useState()
  const [error , setError ] = useState('')
  const {signIn} = UserAuth()
  const handleLog = async (e) => {
    e.preventDefault()
    setError('')
    try{
      await signIn(email,password)
      window.location.reload()
      // navigate('/products')
    }catch(e){
      setError(e.message)
      console.log(e.message);
    }
  }
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal">
        <span className='fa fa-sign-in me-1'></span> Login
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <button className="btn btn-primary w-100 mb-4">
                    <span className='fa fa-google me-2'></span> Sign In With Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                    <span className='fa fa-facebook me-2'></span> Sign In With Facebook
                </button>
              <form onSubmit={handleLog}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100 mt-5">
                  Submit
                </button>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
