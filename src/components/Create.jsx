import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebaseConfig/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { async } from '@firebase/util'

const Create = ({ description, setDescription, stock, setStock, price, setPrice }) => {
  const navigate = useNavigate();

  const productsCollection = collection(db, "Products");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, { description: description, stock: stock, price: price });
    navigate('/');
    // console.log(e);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-primary'>Create Product</h1>
          <form
            onSubmit={ store }>
              
              <div className='mb-3'>
                <label className='form-label fw-bold text-uppercase' htmlFor="description">Description</label>
                <input 
                  value={ description }
                  onChange = { (e) => setDescription(e.target.value) }
                  type="text" 
                  className='form-control border border-secondary' style={{ maxWidth: '500px', margin: 'auto' }}
                  id='description'
                />
              </div>

              <div className='mb-3'>
                <label className='form-label fw-bold text-uppercase' htmlFor="stock">Stock</label>
                <input 
                  value={ stock }
                  onChange = { (e) => setStock(e.target.value) }
                  type="number" 
                  className='form-control border border-secondary' style={{ maxWidth: '500px', margin: 'auto' }}
                  id='stock'
                />
              </div>

              <div className='mb-3'>
                <label className='form-label fw-bold text-uppercase' htmlFor="price">Price</label>
                <input 
                  value={ price }
                  onChange = { (e) => setPrice(e.target.value) }
                  type="number" 
                  className='form-control border border-secondary' style={{ maxWidth: '500px', margin: 'auto' }}
                  id='price'
                />
              </div>
              <button
                // onSubmit={}
                className='btn btn-primary'
                type="submit"
              >
                Store
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create