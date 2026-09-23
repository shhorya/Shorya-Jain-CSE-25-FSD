import React, { useState } from 'react'

function ImageManipulation() {
    const [height, setHeight] = useState(200)
    const [width, setWidth] = useState(200)

    const increaseHeight = () => {
        setHeight(height + 50)
    }
    const increaseWidth = () => {
        setWidth(width + 50)
    }
    return (
        <div>
            <div>ImageManipulation</div>
            <div style={{ width: '400px', height: '400px', border: '4px solid red' }}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8UPwiwUntB9qX2LzNUtIG5mBAIw2fMUfe_510nAzAWSUZ-VYhUIy4O4p&s=10"
                    style={{ height: `${height}px`, width: `${width}px` }}
                />
            </div>
            <div>
                <button onClick={increaseHeight}>increase height</button>
                <button onClick={increaseWidth}>increase width</button>
            </div>
        </div>
    )
}

export default ImageManipulation