import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useFetchOrderUserQuery} from "../store/action/orderService";
import {productAPI} from "../store/action/productService";
import {logout, setUser} from "../store/reducer/userSlice";
import {useNavigate} from "react-router-dom";
import {userAPI} from "../store/action/userService";

const Profile = () => {

    const {user} = useSelector(state => state.user)
    const {data, refetch} = useFetchOrderUserQuery(user && user.id)
    const {data: productData} = productAPI.useFetchAllProductQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            refetch()
        }
    }, [user])

    const getProductId = (productId) => productData.find(item => item.id === productId)


    const exitHandler = async (e) => {
        e.preventDefault()
        await dispatch(logout())
        localStorage.removeItem('token')
        navigate('/')
    }

    if (!user) return <h1>Пусто</h1>
    return (
        <div className='mt-40 mb-20'>
            <div className="container mx-auto">
                <h1 className="text-4xl text-center mb-20">История заказов</h1>

                <div className="flex flex-wrap gap-20 justify-between">
                    {
                        data && data.map((item, idx) => (
                            <div key={idx} className={'w-fit p-5 text-white bg-red-500 text-xl'}>
                                <p>Номер заказа: {item.id}</p>
                                <p>Товар: {getProductId(item.productId).title}({item.quantity})</p>
                                <img className={'w-full h-[300px] mt-5 mb-5 object-cover'}
                                     src={`http://localhost:3001/files/${getProductId(item.productId).title}/${getProductId(item.productId).img}`}
                                     alt="#"/>
                                <p>Общая сумма заказа {+item.quantity * +getProductId(item.productId).price} руб</p>
                                <p>Статус заказа: {item.status}</p>
                            </div>
                        ))
                    }
                </div>
                {
                    data && !data.length && <div>
                        <h1 className={'text-4xl text-center mx-auto'}>Вы еще не заказывали у нас(</h1>
                    </div>
                }

                <button onClick={exitHandler} className={'mt-10 bg-red-500 text-white py-2 px-6'}>Выйти</button>
            </div>
        </div>
    )
}

export default Profile


