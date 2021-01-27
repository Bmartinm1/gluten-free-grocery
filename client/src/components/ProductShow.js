import React, { useState, useEffect } from 'react'

const ProductShow = props => {
    const [product, setProduct] = useState({
        id: '',
        brandName: '',
        productName: '',
        description: ''
    })

    const [errors, SetErrors] = useState([])

    const getProduct = async () => {
        const productId = props.match.params.id
        //debugger
        try {
            const response = await fetch(`/api/v1/products/${productId}`)
            //debugger
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                throw new Error(errorMessage)
            }
            const body = await response.json()
            setProduct(body.product)
            debugger
        } catch (error) {
            console.log(error)
            console.error(`Error in fetch ${error.message}`)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="product-show">
            <h1>fuck you, from react</h1>
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
        </div>
    )
}


export default ProductShow
