import React from 'react'

const CartHommItem = ({title, text, img, link}) => {
    return (
        <div className='w-[500px] h-fit bg-[#F8F5F0] p-7 mb-10'>
            <img className="ml-20 w-[7000px] object-cover" src={img} alt=""/>
            <h1 className='text-3xl mt-5 mb-2'>{title}</h1>
            <p className='mb-3'>{text}</p>
            {
                link && <a href={link} className='bg-red-600 text-white px-6 py-2'>Узнать больше</a>
            }

        </div>
    )
}

export default CartHommItem