import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { orderAPI } from '../store/action/orderService'
import { InputNumber } from 'primereact/inputnumber';
import MyInput from '../UI/MyInput';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { productAPI } from '../store/action/productService';




const CartHomm = ({id, title, text, img, link , price}) => {

    const [modal, setModal] = useState(false)
    const [adress, setAdress] = useState()
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const {user} =  useSelector(state => state.user) 


    const [createOrder] = orderAPI.useCreateOrderMutation()
    const [deleteProduct] = productAPI.useDeleteProductMutation()
    const orderHandler = async (event) => {
        event.preventDefault()

        if(name && adress && quantity) {
            if(user) {
                const body = {
                    productId: id,
                    name: name,
                    userId: user.id,
                    adress: adress.value,
                    status: 'В ожидании',
                    quantity: quantity
                }
                await createOrder(body)
                toast.success('Заказ оформлен')
            } else{
                toast.error('Войдите в аккаунт или зарегистрируйтесь')
            }
           
        } else{
            toast.error('Заполните данные')
        }

    }

    const deleteHandler = (productId) => {
        deleteProduct(productId)
    }


    return (
        <div className='w-[500px] h-fit bg-[#F8F5F0] p-7 mb-10'>
            <img className="ml-20 w-[7000px] object-cover" src={img} alt=""/>
            <h1 className='text-3xl mt-5 mb-2'>{title}</h1>
            <p className='mb-3'>{text}</p>
            <div className='flex justify-end px-10 font-bold'>{price} Рублей /кг</div>
            <div className="flex justify-between items-center">
            <button
                className='bg-red-600 text-white px-6 py-2'
                onClick={() => {
                setModal(true)
                window.scroll(0,0)
            }}>Заказать</button>
            {user && user.role&& user.role === 'ADMIN' &&  <p className='text-2xl text-red-500 cursor-pointer' onClick={()=> deleteHandler(id)}>X</p>}
            </div>
            {
                 modal && <Modal onCLose={() => setModal(false)}>
                        <h1>{title}</h1>
                        <form action="">
                                <label htmlFor="">Введите имя</label>                
                                <MyInput type="text" onChange={e => setName(e.target.value)}/>
                                <label htmlFor="">Введите количество в килограммах (1-1000)</label>  
                                <InputNumber className='border-2 w-full px-4 py-2 outline-0 mb-5'  onValueChange={(e) => setQuantity(e.value)} min={1} max={1000} />
                                <label htmlFor="">Введите адрес</label> 
                                <AddressSuggestions token="533adeeb35312ed6d3c25cfe707ccd4f48c9bbe0" value={adress} onChange={setAdress}/>
                            <div className="mt-5 text-center">
                                <button onClick={orderHandler} className='bg-red-600 text-white px-6 py-2'>
                                    Заказать
                                </button>
                                
                            </div>
                        
                        </form>
                </Modal>
            }
        </div>
    )
}

export default CartHomm