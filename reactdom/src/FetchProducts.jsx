
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
            FetchProducts
            npm i react-{/* <h2>{JSON.stringify(data)}</h2> */}

            {
                products.map(ele => (
                    <div key={ele.id}>
                        <img src={ele.images} height="144" width="144" />
                        <h2>{ele.id}</h2>
                        <button>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default FetchProducts