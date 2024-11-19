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

const Faq = () => {
    const [activeId, setActiveId] = useState(null);

    const handleToggle = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="w-1/3 mx-auto">
            {faqData.map((data) => (
                <div key={data.id} className="border-2 rounded mb-2">
                    <h4
                        onClick={() => handleToggle(data.id)}
                        className="flex justify-between items-center text-lg font-bold text-black leading-normal py-2 px-3 cursor-pointer"
                    >
                        {data.title} {activeId === data.id ? <FiMinus /> : <FaPlus />}
                    </h4>
                    {activeId === data.id && (
                        <p className="text-base text-black leading-normal border-t-2 py-2 px-3">
                            {data.desc}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;
