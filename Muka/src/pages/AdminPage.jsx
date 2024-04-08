import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {logout} from "../store/reducer/userSlice";
import {useDispatch} from "react-redux";

const AdminPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const exitHandler = async (e) => {
        e.preventDefault()
        await dispatch(logout())
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className={'mt-40 mb-40'}>
            <div className="container mx-auto flex ">
                <div className="w-[150px]">
                    <h1>Выберите:</h1>
                    <nav>
                        <li><NavLink to={'/admin/order'}>Заказы</NavLink></li>
                        <li><NavLink to={'/admin/product'}>Продукты</NavLink></li>
                        <li><NavLink to={'/admin/feedback'}>Заявки</NavLink></li>
                    </nav>
                    <div className="mb-20">
                        <button onClick={exitHandler} className={'mt-10 bg-red-500 text-white py-2 px-6'}>Выйти</button>
                    </div>
                </div>

                <div className="w-full">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;