import React, { useState, useEffect } from "react"

const ProductList = props => {
    const [productList, setProductList] = useState([])

    const getProductList = async () => {
        try {
            const response = await fetch('api/v1/:categoryId')
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const body = await response.json()
            debugger
            setProductList(body.productList)
        } catch (error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
    getProductList()
    }, [])
}

export default ProductList