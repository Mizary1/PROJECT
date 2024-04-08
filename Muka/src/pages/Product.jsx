import React from 'react'
import product1 from '../images/Product1.jpg'
import item2 from '../images/item3.jpg'
import CartHomm from "../components/CartHomm";


import bg2 from '../images/contactus-bg.jpg'
import Application from '../components/Application';
import { productAPI } from '../store/action/productService';
const Product = () => {


    const {data: productData} = productAPI.useFetchAllProductQuery()


    console.log('productData',productData);

    return (
        <div className='mt-[150px] '>
            <div className="relative mb-40">
                <div className='absolute left-40  top-30'>
                    <div className='w-fit mx-auto  text-[#2B2B2B] pt-[120px]'>
                        <h1 className='text-5xl mb-10'>
                            Наша продукция</h1>
                        <p className='text-2xl mb-5'>Узнайте больше о нашем <br/>
                            ассортименте</p>

                    </div>

                </div>
                <img src={product1} alt=""/>
            </div>
            <div className="">
                <div className="max-w-[1400px] mx-auto">
                    <div className=" bg-[#F8F5F0] p-7 mb-20">
                        <div className="flex max-w-[1200px] mb-20 gap-40 mx-auto w-full items-center">
                            <div className=''>
                                <img src={item2} alt=""/>
                            </div>
                            <div className='w-[800px]'>
                                <h1 className='text-3xl mb-5'>Хорошая выпечка начинается с правильной муки!</h1>
                                <p className='text-xl mb-5'>
                                    Универсальной муки не существует! Из одного мешка муки невозможно произвести
                                    настоящую пиццу, багет, круассан и булочку бриошь – для каждого из этих изделий
                                    требуется мука с особенным качеством, с уникальными реологическими характеристиками.
                                    Наша компания занимается производством специализированной муки - чтобы Вы были
                                    уверены в качестве готового изделия всегда!
                                    <br/> <br/>
                                    Мы разработали профиль качества для каждого вида муки и каждая партия соответствует
                                    оптимальным значениям этого профиля, что обеспечивает стабильность качества
                                    продукции от партии к партии. Реологические характеристики – комплекс показателей,
                                    описывающих поведение и состояние теста на протяжении всего технологического
                                    процесса: от замеса до выпечки.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="">
                    <div className="">
                        <div className="max-w-[1200px] mx-auto">
                            <div className="flex flex-wrap justify-between">
                                <div className="flex justify-between flex-wrap [&>*:nth-child(2n+2)]:mt-40">
                                    {
                                        productData && productData.map((item, idx) => (
                                            <CartHomm  key={idx}
                                                        title={item.title}
                                                        id={item.id}
                                                        price={item.price}
                                                        text={item.description}
                                                        img={`http://localhost:3001/files/${item.title}/${item.img}`}
                                                        link={''}
                                            />
                                        ))
                                    }
                            
                                </div>
                            
            
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Application/>

        </div>
    )
}

export default Product
