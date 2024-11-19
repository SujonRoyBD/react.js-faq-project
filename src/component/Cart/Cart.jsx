import React from 'react';

const cartData = [
    {
        id: 1,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 2,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 3,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 4,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 5,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 6,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 7,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 8,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
    {
        id: 9,
        img: "../../../public/image/sujon.jpeg",
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum doloremque non modi corrupti voluptatibus quidem odit libero. Asperiores, in quam. Illo sapiente dolorum molestias hic tempora nesciunt ducimus sed accusamus officia accusantium error nihil aperiam nam fuga optio unde aut,"
    },
]

const Cart = () => {
    return (
        <div>
            {/* cart section  */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    cartData.map((data) => {
                        return <div key={data.id}>
                            <img src={data.img} alt='cart image' width={150} height={150} />
                            <h4>{data.title}</h4>
                            <p>{data.desc}</p>
                        </div>
                    })

                }
            </div>
        </div>
    );
};

export default Cart;