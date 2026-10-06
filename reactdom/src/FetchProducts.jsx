import React, { useState, useEffect } from 'react'

function FetchProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()

                setProducts(data.products)
            }
            catch (e) {
                console.log("Error is: " + e)
            }
            finally {
                console.log("Fetch completed")
            }
        }

        fetchData()

    }, [])

    return (
        <div>
            <h2>Products</h2>

            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchProducts