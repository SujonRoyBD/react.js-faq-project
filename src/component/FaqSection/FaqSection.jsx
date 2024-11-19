import React, { useState } from 'react';

import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const faqData = [
    {
        id: 1,
        title: "FAQ Title 1",
        desc: "FAQ Description 1",
    },
    {
        id: 2,
        title: "FAQ Title 2",
        desc: "FAQ Description 2",
    },
    {
        id: 3,
        title: "FAQ Title 3",
        desc: "FAQ Description 3",
    },
    {
        id: 4,
        title: "FAQ Title 4",
        desc: "FAQ Description 4",
    },
];

const FaqSection = () => {
    const [showDesc, setShowDesc] = useState(null);

    const handleFunction = (kongkon)=>{
        setShowDesc((myId)=>myId === kongkon ? null : kongkon)
    }
    return (
        <div className='w-1/3 mx-auto'>
            {
                faqData.map((data)=>{
                    return <div key={data.id}>
                        <p onClick={()=>handleFunction(data.id)} className='flex justify-between items-center'>{data.title} {showDesc === data.id ? <FiMinus/> : <FaPlus/>}</p>
                        {
                            showDesc === data.id && (
                                <p>{data.desc}</p>
                            )
                        }
                        
                    </div>
                })
            }
            
        </div>
    );
};

export default FaqSection;