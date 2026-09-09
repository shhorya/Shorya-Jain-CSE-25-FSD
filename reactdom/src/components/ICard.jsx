//rfce command is used to make style or can say the basic structure for react component (similar work as we do shift +! in html)
import React from 'react' 
import pic from '../images/156.png'

function ICard(data) {
  return (
    <div>
      <h2>College:{data.college}</h2>
      <div>
        <img src={pic} height={200} width={200} />
      </div>
      <h2>Roll No.:{data.rollNo}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
      <h2>Section:{data.section}</h2>
      <h2>Skills:{data.skills}</h2>
    </div>
  )
}

export default ICard