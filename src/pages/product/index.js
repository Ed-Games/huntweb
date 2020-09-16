import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

export default function product(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product, setProduct] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        loadProduct(id)
    },[])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id} = useParams()

    const loadProduct = async(id) => {
        const response = await api.get(`/products/${id}`)
        setProduct(response.data)
    }


    return (
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>Url : <a href={product.url}>{product.url}</a></p>
        </div>
    )
}