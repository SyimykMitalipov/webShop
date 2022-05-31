import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../DATA';
import { useState  } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, AddItem,delItem } from '../redux/actions';
const ProductDetail = () => {
    const proid = useParams()
    const dispatch = useDispatch()
    const [cartBtn,setCartBtn] = useState("Add to Cart")
    const proDetails = DATA.filter(product => product.id == proid.id)
    const product = proDetails[0]
    
    const handleCart = (product) => {
        if(cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove")

        }else if(cartBtn === "Remove") {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.imageUrl} alt={product.description} height='300px' width='300px' />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.name}</h1>
                <hr />
                <h2 className='my-5'>${product.price}</h2>
                <p className='lead'>{product.description}</p>
                <button onClick={() => handleCart(product)} className="btn btn-outline-primary">{cartBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetail