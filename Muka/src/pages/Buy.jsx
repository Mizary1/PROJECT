import React from 'react'
import about1 from '../images/Buy.jpg'
import bg2 from '../images/contactus-bg.jpg'
import Application from '../components/Application'

const Buy = () => {
    return (
        <div>
            <div className="relative">
                <div className='absolute left-40  top-30'>
                    <div className='w-fit mx-auto  text-[#fff] pt-[120px]'>
                        <h1 className='text-5xl mb-10'>
                            Где купить?</h1>
                        <p className='text-2xl mb-5'>Солнечная, 17/1 <br/>
                        </p>
                        <p className='text-2xl mb-5'>с. Нежинка, Оренбургский район, <br/>
                        </p>
                        <p className='text-2xl mb-5'>Оренбургская область <br/>
                        </p>
                    </div>

                </div>
                <img src={about1} alt=""/>
                <div className="mt-40 max-w-[1200px] mx-auto flex justify-between">
                    <div className="">
                        <div className=' w-[400px] mt-20 mx-auto  '>
                            <h1 className=' font-[600] text-3xl mb-5'>Контакты производства</h1>
                            <p className='text-xl mb-5 flex gap-5'>
                                <span>Адрес:</span><span>Солнечная, 17/1 <br/>
с. Нежинка, Оренбургский район, <br/>Оренбургская область</span>

                            </p>
                            <p className='text-xl flex gap-5 mb-5'>
                                <span>Телефон:</span><span>+7 900 289-63-69</span>
                            </p>
                            <p className='text-xl flex gap-5 mb-5'>
                                <span>Эл. почта:</span><span>agro@mir-muka.ru</span>
                            </p>
                            <p className='text-xl flex gap-5 mb-5'>
                                <span>Режим работы:</span><span>пн - пт, с 9:00 до 18:00</span>

                            </p>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13964.928566711782!2d55.309034459265604!3d51.77556806648552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417c077be88af259%3A0xdc9579b21982c20c!2z0JDQs9GA0L7QnNC40YA!5e0!3m2!1sru!2sru!4v1710205372014!5m2!1sru!2sru"
                        width="600" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Application/>

            </div>
        </div>
    )
}

export default Buy
