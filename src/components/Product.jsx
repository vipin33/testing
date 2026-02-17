import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { items } from './Data'
import { ToastContainer, toast } from 'react-toastify';

function Product({ items, cart, setCart }) {


  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ", cart)

    toast.success('Added to Cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <div className="row">
          {
            items.map((product) => {
              return (
                <>
                  <div className="col-lg-4 my-3 text-center">
                    <div className="card" style={{ width: '18rem' }}>
                      <Link to={`/productdetails/${product.id}`} className="product-details">
                        <img src={product.imgSrc} className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                        <button
                          onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                          className="btn btn-warning">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })

          }
        </div>


      </div >
    </>
  )
}

export default Product