import react, { useState, useEffect } from 'react'

const productShow = props => {
    const [product, setProduct] = useState({
        id: '',
        brandName: '',
        productName: '',
        description: ''
    })

    const [errors, SetErrors] = useState([])

    const getProduct = async () => {
        try {
            debugger
            let productId = props.match.params.id
            const response = fetch(`/api/v1/products/${productId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw (error)
            }
            const body = await response.json()
            setProduct(body.product)
        } catch (error) {
            console.error(`Error in fetch ${error.message}`)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="product-show">
            <h2>product.productName</h2>
            <p>product.description</p>
        </div>
    )
}


export default productShow
