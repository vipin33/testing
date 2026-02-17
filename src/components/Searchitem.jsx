import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

function Searchitem() {    
    const {term} = useParams();    
    const [filterTerm, setFilterTerm] = useState([])

    useEffect(() => {
        const filteredSearchTerm = () => {
            const data = items.filter((product) => product.title.toLowerCase().includes(term.toLowerCase()));
            setFilterTerm(data)
        }
        filteredSearchTerm()
    }, [term])



    return (
        <>
            <Product items={filterTerm} />
        </>
    )
}

export default Searchitem