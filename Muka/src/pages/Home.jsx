import React from 'react'
import item from '../images/item1.jpg'
import item2 from '../images/item3.jpg'
import item3 from '../images/item2.jpg'
import item4 from '../images/item4.jpg'
import item5 from '../images/item5.jpg'
import bg2 from '../images/contactus-bg.jpg'
import CartHomm from '../components/CartHomm'
import { Link } from 'react-router-dom'
import Application from '../components/Application'
import { useSelector } from 'react-redux'
import CartHommItem from '../components/admin/CartHommItem'



const Home = () => {
    const {user} = useSelector(state => state.user)

    console.log('user', user);

    return (
        <div className='mt-[100px] w-full'>
            <div className=" mx-auto'">
                <div className='relative mb-40'>
                    <video loop={true} playsinline className='w-full resize mx-auto h-[600px] object-cover' autoPlay
                           src="video.mp4" muted={true} controls={false}></video>
                    <div className='absolute left-0 right-0 bottom-0 top-0'>
                        <div className='w-fit mx-auto text-center text-white pt-[120px]'>
                            <h1 className='text-5xl mb-10'>
                                С нашей мукой ваша выпечка <br/>
                                становится лучшей!</h1>
                            <p className='text-2xl mb-5'>Производим и реализуем высококачественную <br/>
                                профессиональную муку и мучные смеси</p>
                                <Link to="/about" className='bg-red-600 text-white px-6 py-2'>Узнать больше</Link>
                        </div>

                    </div>
                </div>
                <div className=" bg-[#F8F5F0] p-7 mb-20">
                    <div className="flex max-w-[1200px] mb-20 gap-40 mx-auto w-full items-center">
                        <div className='w-[500px]'>
                            <h1 className='text-3xl mb-5'>С любовью к каждому выпеченному изделию!</h1>
                            <p className='text-xl mb-5'>
                                C 2001 года мы производим специализированную муку - продукт для профессионального
                                использования, для мастеров, для профессионалов, для вкусной, красивой и качественной
                                выпечки!
                                <br/> <br/>
                                Выбор специализированной муки обеспечит мастер-пекаря или пиццайоло самым важным:
                                уверенностью, что мука окажется подходящей для производимых изделий, стабильностью
                                качества муки вне зависимости от партии и отсутствием необходимости корректировать
                                технологический процесс, подстраиваясь под качество муки!
                            </p>
                            <Link to="/about" className='bg-red-600 text-white px-6 py-2'>Узнать больше</Link>
                        </div>

                        <div className=''>
                            <img src={item} alt=""/>
                        </div>

                    </div>
                </div>


                <div className="max-w-[1200px] mx-auto">
                    <div className={'flex justify-between flex-wrap'}>
                        <div className="flex justify-start h-fit">
                            <CartHommItem title={'Наша продукция'}
                                      text={'Для каждого вида изделий – мука с индивидуальным качеством'} img={item2}
                                      link={'/product'}/>
                        </div>
                        <div className="flex justify-end mt-[300px]">
                            <CartHommItem title={'О нас'} text={'Узнайте больше о наших ценностях и подходе к производству'}
                                      img={item3} link={'/about'}/>
                        </div>
                        <div className="flex justify-start">
                            <CartHommItem title={'Где купить?'} text={'Найдите дистрибьютора в своём регионе'} img={item4}
                                      link={'/buy'}/>
                                      
                        </div>
                        <div>
                        <div className="flex justify-end mt-[300px]">
                            <CartHommItem title={'Рецепты'} text={'Профессиональные рецепты с подробным описанием технологии'}
                                      img={item5} link={'/recipte'}/>
                        </div>
                        </div>
                    </div>
                </div>

                <Application/>

            </div>
        </div>
    )
}

export default Home
