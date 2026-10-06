import React, { useEffect, useState } from 'react'

function MyUseEffect() {
    const [counter, setCounter] = useState(0)
    const [pointer, setPointer] = useState(100)

function increaseCounter() {
        setCounter(counter + 10)
    }

function decreasePointer() {
        setPointer(pointer - 5)
    }


    useEffect(() => {
        console.log("Counter:", counter)
        console.log("Pointer:", pointer)
    }, [counter, pointer])

    return (
        <div>
            <h2>Counter App</h2>
            <h1 style={{ color: 'red' }}>Counter Value: {counter}</h1>
            <button onClick={increaseCounter}>Increase Counter</button>
            <h1 style={{ color: 'green' }}>Pointer Value: {pointer}</h1>
            <button onClick={decreasePointer}>Decrease Pointer</button>
        </div>
    )
}

export default MyUseEffect