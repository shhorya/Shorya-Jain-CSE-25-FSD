import React from 'react'

function ColorChange() {
  return (
    <div>
        <h2>Color Change</h2>
        <div style={{ backgroundColor:`rgb(${red},${green},${blue})`}}></div>
      <div>
        <button>Red</button>
        <button>Green</button>
        <button>Blue</button>
      </div>
    </div>
  )
}

export default ColorChange