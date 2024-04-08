import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useDispatch, useSelector} from 'react-redux'
import {userAPI} from '../store/action/userService'
import {useEffect} from 'react'
import {setUser} from '../store/reducer/userSlice'
import {Toaster} from 'react-hot-toast';

const Layot = () => {

    const {data, refetch} = userAPI.useProfileUserQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        refetch()
        if (data) {
            console.log('dataProfile,', data);
            dispatch(setUser(data))
        }
    }, [data, dispatch])


    return (

        <div className='min-h-screen flex flex-col'>
            <Header/>
            <div className='flex-auto'>
                <Outlet/>
            </div>
            <ScrollRestoration/>
            <Footer/>
            <Toaster/>
        </div>
    )
}

export default Layot
