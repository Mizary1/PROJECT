import React from 'react';


const Modal = ({children, title, onCLose}) => {
    return (
        <>
            <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-20' onClick={onCLose}/>

            <div className='w-[500px] p-5 rounded bg-white absolute top-[15%] z-30 left-1/2 -translate-x-1/2'>
                <h1 className='text-2xl text-center mb-5'>{title}</h1>
                {children}
            </div>
        </>
    );
};

export default Modal;             