import React from 'react'
import ICard from './ICard'
function ICardGallery() {
    const student={
        college:"ABES ENGINEERING COLLEGE",
        rollNo:"2400320101062",
        name:"Shorya Jain",
        branch:"CSE"
    }

  return (
    <div>
       {/* <ICard 
        college="ABES ENGINEERING COLLEGE" 
        rollNo="2400320101062" 
        name="Shorya Jain" 
        branch="CSE" 
        section="24" 
        skills="Graphics Designing, UI/UX, Java , DSA , Vibe Coding"
        /> */}
        <ICard data={student} />
    </div>
  )
}

export default ICardGallery