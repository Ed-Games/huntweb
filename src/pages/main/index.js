import React,{useEffect, useState} from 'react';
import api from '../../services/api';
import './styles.css'
import {Link} from 'react-router-dom'

export default function Main(){

    const [products,setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState([0])

    useEffect(()=>{
        loadProducts(page);
    },[page])

    const loadProducts = async (page) =>{
        const response = await api.get(`/products?page=${page}`);
        console.log(response.data)
        setTotalPages(response.data.pages)
        setProducts(response.data.docs)

    }

    const nextPage = () => {
        if (page === totalPages) return
        setPage(page + 1)
        //loadProducts(page)
    }

    const prevPage = () => {
        if (page===1) return
        setPage(page - 1)
        //loadProducts(page)
    }

    return(
        //<h1>Contagem de produtos: {products.length}</h1>
        <div className="products-list">
            {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                        {console.log(product._id)}
                    </article>
            ))}
            <div className="Actions">
               <button disabled={page===1} onClick={prevPage}>Anterior</button>
                <button disabled={page===totalPages} onClick={nextPage}>Próximo</button>
            </div>
        </div>


    );
}