import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from '../DATA'
const Products = () => {
  const cardItem = (item) => {
    return(
      <div className="card my-5 py-4" key={item.id} style={{width: '18rem'}}>
      <img src={item.imageUrl} height='200px' width='300px' className="card-img-top mx-auto" alt="..." style={{
    
        width:'200px'
      }} />
      <div className="card-body text-center">
        <h5 className="card-title">{item.name}</h5>
        <p className="lead">${item.price}</p>
        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
      </div>
    </div>
    )
  }

return (
    <>
    <div className="container py-5">
        <div className="row">
            <div className="col-12 text-center">
              <h1>Product</h1>
              <hr />
            </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
          {DATA.map(cardItem)}
          </div>
        </div>
    </div>
    </>
  )
}

export default Products
