import React, { useState } from 'react';

const UseState = (props) => {

  const [Name, setName] = useState("Sujon Roy");
  const [show, setShow] = useState("");
  const handleShow = ()=>{
    setShow(props.name)
  }
  return (
    <div>
      <button onClick={() => setName("Kongkon Jowarder")}>{Name}</button>
      <div className='flex flex-col gap-5 p-10'>
        <div className='flex items-center gap-5'>
          {
            show ? <button onClick={()=>setShow("")} className='bg-red-500 text-white text-lg font-bold py-1 px-4 rounded-[8px]'>Hide</button> : <button className='bg-red-500 text-white text-lg font-bold py-1 px-4 rounded-[8px]' onClick={handleShow}>Show</button>
          }
        
        
        </div>
        <p>{show}</p>
      </div>
    </div>
  );
};

export default UseState;
