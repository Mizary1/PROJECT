import React, {useEffect, useState} from 'react'
import MyInput from '../UI/MyInput'
import {userAPI} from '../store/action/userService'
import {setUser} from '../store/reducer/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Auth = () => {

    const [authVer, setAuthVer] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registr, {}] = userAPI.useRegistrationUserMutation()
    const [login, {data: dataLogin, error}] = userAPI.useLoginUserMutation()
    const {data: dataProfile, refetch: ProfileRefetch} = userAPI.useProfileUserQuery()
    const dispath = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    useEffect(() => {
        if (dataLogin?.access_token && dataLogin) {
            const token = dataLogin?.access_token
            localStorage.setItem('token', token)
            ProfileRefetch()
            // Обновление данных профиля пользователя
            dispath(setUser(dataProfile))
        }
    }, [dataLogin])

    useEffect(() => {
        if (error) {
            toast.error('Такого пользователя не существует')
        }
    }, [error]);


    const registrHandler = async (event) => {

        event.preventDefault()

        if (email && password) {
            const body = {
                email: email,
                password: password
            }
            await registr(body)
            toast.success('Вы успешно зарегистрировались!')
            setAuthVer(true)
            setEmail('')
            setPassword('')
        } else {
            toast.error('Ошибка')
        }
    }



    const loginHandler = async (event) => {

        event.preventDefault()

        if (email && password) {
            const body = {
                email: email,
                password: password
            }
            await login(body)
            navigate('/')

        } else {
            toast.error('Ошибка')
        }
    }


    return (
        <div className='mt-40'>
            <div className="container mx-auto">
                <h1 className='text-center'>Авторизация</h1>

                <div className="w-1/3 mx-auto">
                    <form>
                        <label htmlFor="">Введите email</label>
                        <MyInput value={email} type="text" onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="">Введите password</label>
                        <MyInput value={password} type="text" onChange={e => setPassword(e.target.value)}/>
                        {
                            authVer ? (
                                <div className="text-center">
                                    <button className='bg-red-500 px-6 py-2 text-white' onClick={loginHandler}>Войти
                                    </button>
                                    <p className='text-gray-400 text-[12px] cursor-pointer' value={email}
                                       onClick={() => setAuthVer(false)}>Нет аккаунта?Зарегистрируйтесь</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <button className='bg-red-500 px-6 py-2 text-white' value={password}
                                            onClick={registrHandler}>Зарегистрроваться
                                    </button>
                                    <p className='text-gray-400 text-[12px] cursor-pointer'
                                       onClick={() => setAuthVer(true)}>Есть аккаунта?Войдите</p>
                                </div>
                            )
                        }
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Auth
