import React from 'react'

const PageCopy = () => {
    const CopyText =()=>{
        alert("copied")
    }
        
    
  return (
    <div>
      <p onCopy={CopyText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis incidunt consequatur nobis voluptatibus</p>
     
      
    </div>
  )
}

export default PageCopy;
