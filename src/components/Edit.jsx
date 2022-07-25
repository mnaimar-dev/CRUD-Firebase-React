import { doc, getDoc, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../firebaseConfig/firebase"
import Swal from 'sweetalert2'

const Edit = ({ description, setDescription, stock, setStock, price, setPrice }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault()
    const product = doc(db, "Products", id);
    const data = {description: description, stock: stock, price: price}
    await updateDoc(product, data);
    navigate("/")
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "Products", id))

    if(product.exists()) {
      setDescription(product.data().description)
      setStock(product.data().stock)
      setPrice(product.data().price)
    } else {
      Swal.fire(
        "The product doesn't exist"
      )
    }
  }

  useEffect( () => {
    getProductById(id);
  }, [] )

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className="text-primary">Edit Product</h1>
          <form
            onSubmit={ update }>
              
              <div className='mb-3'>
                <label className='form-label fw-bold' htmlFor="description">Description</label>
                <input 
                  value={ description }
                  onChange = { (e) => setDescription(e.target.value) }
                  type="text" 
                  className='form-control border border-secondary' style={{ maxWidth: '500px', margin: 'auto' }}
                  id='description'
                />
              </div>

              <div className='mb-3'>
                <label className='form-label fw-bold' htmlFor="stock">Stock</label>
                <input 
                  value={ stock }
                  onChange = { (e) => setStock(e.target.value) }
                  type="number" 
                  className='form-control border border-secondary' style={{ maxWidth: '500px', margin: 'auto' }}
                  id='stock'
                />
              </div>

              <div className='mb-3'>
                <label className='form-label fw-bold' htmlFor="price">Price</label>
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
                Update
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit