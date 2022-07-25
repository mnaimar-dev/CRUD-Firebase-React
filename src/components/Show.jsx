import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDoc, doc, getDocs, deleteDoc } from 'firebase/firestore/' // pedir doc, docs y eliminar doc
import { db } from '../firebaseConfig/firebase' // importa database
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'

const Show = () => {
    // 1 - Configuramos los Hooks
    const [products, setProducts] = useState( [] )

    // 2 - Referenciamos a la DB de Firestore
    const productsCollection = collection(db, "Products")

    // 3 - Creamos la función para mostrar todos los documentos
    const getProducts = async () => {
        const response = await getDocs(productsCollection);
        setProducts(
          response.docs.map( (doc) => ( { ...doc.data(), id:doc.id } ) )
        )

        
    }
    
    // console.log(products);
    // 4 - Creamos función para eliminar un documento
    const deleteProduct = async (id) => {
      const productDoc = doc(db, "Products", id);
      await deleteDoc(productDoc);
      getProducts();
    }
    
    // 5 - Creamos función para confirmar con Sweet Alert
    const confirmDelete = (id) => {

      Swal.fire({
        title: 'Do you want to delete this product?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        deleteProduct();
        if (result.isConfirmed) {
          deleteProduct(id)
          Swal.fire(
            'Deleted!',
            'The product has been deleted.',
            'success'
          )
        }
      })
    }
  
    // 6 - Usamos useEffect
    useEffect( () => {
        getProducts()
    }, [] )
    
    // 7 - Devolvemos la vista de nuestro componente

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-grid gap-2'>
              <Link to="/create" className='btn btn-primary mt-2 mb-2 text-uppercase fw-bold' style={{ width: '600px', margin: 'auto' }}>Add product</Link>
              <table className='table table-dark table-hover'>
                <thead>
                  <tr>
                    <th className='text-uppercase'>Description</th>
                    <th className='text-uppercase'>Stock</th>
                    <th className='text-uppercase'>Price</th>
                    <th className='text-uppercase'>Action</th>
                  </tr>
                </thead>

                <tbody>
                  { products.map( (product, index) => 
                  (
                    <tr key={ product.id }>
                      <td>{ product.description }</td>
                      <td>{ product.stock }</td>
                      <td>{ product.price }</td>
                      <td>
                        <Link to={`/edit/${ product.id }`} className="btn btn-light me-2">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <button
                          onClick={ () => { confirmDelete(product.id) } }
                          className="btn btn-danger"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ) ) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Show