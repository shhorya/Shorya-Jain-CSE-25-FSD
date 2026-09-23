import React, { useState } from 'react'

function MyState() {
  const [count, setCount] = useState(10);
  return (
    <div className="card">
      <h2>Counter={count}</h2>
    </div>
  )
}