import React from 'react'
import logo from "../images/logo.svg"
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {

    const {isAuth, user} = useSelector(state => state.user)


    return (
        <div className=' fixed top-0 left-0 right-0 bg-white z-30 border-solid border-2 border-grey-500 shadow-xl'>
            <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 ">

                <div>

                    <NavLink to="/"><img src={logo} alt=""/></NavLink>
                </div>
                <nav>
                    <ul className='flex gap-10'>
                        <li><NavLink to="/product">ПРОДУКЦИЯ</NavLink></li>
                        <li><NavLink to="/about">О НАС</NavLink></li>
                        <li><NavLink to="/buy">ГДЕ КУПИТЬ?</NavLink></li>
                        <li><NavLink to="/recipte">РЕЦЕПТЫ</NavLink></li>
                    </ul>
                </nav>
                <div>
                    {
                        isAuth ? (
                            user.role && user.role === 'ADMIN' ? (
                                <div>
                                    <NavLink to={'/admin'}>Админ панель</NavLink>
                                </div>
                            ) : (
                                <NavLink to={'/profile'}>Профиль</NavLink>
                            )
                        ) : (
                            <NavLink to={'/auth'}>Авторизация</NavLink>
                        )
                    }

                </div>

            </div>
        </div>

    )
}

export default Header