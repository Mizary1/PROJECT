import React, {useState} from 'react'
import bg3 from '../images/bg_rec.jpg'
import clock from '../images/clock.svg'

import Modal from '../components/Modal'
import Application from '../components/Application'
import {recipeAPI, useFetchAllRecipeQuery} from "../store/action/recipteService";

const Recipte = () => {

    const {data} = useFetchAllRecipeQuery()

    console.log(data)

    return (
        <div className='relative'>
            <div className="relative mb-40">
                <div className='absolute left-40  top-30'>
                    <div className='w-fit mx-auto  text-[#2B2B2B] pt-[120px]'>
                        <h1 className='text-5xl mb-10'>
                            Рецепты</h1>
                        <p className='text-2xl mb-5'>Узнайте о возможностях<br/>
                            СуперМуки на практике!</p>
                    </div>

                </div>
                <img src={bg3} alt=""/>
            </div>


            {
                data && data.map((item, idx) => (
                    <div key={idx} className="  p-7 mb-20">
                        <div className='container mx-auto flex gap-32'>
                            <div className="w-1/2">
                                <h1 className='text-3xl mb-5'>{item.title}</h1>
                                <p className='text-xl mb-5'>
                                    {item.description}
                                </p>
                                <div className=" flex gap-20">


                                    <div className='flex items-center gap-3'>
                                        <div>
                                            <img src={clock} alt=""/>
                                        </div>
                                        <div>
                                            <div> Время замеса:</div>
                                            <div> {item.timeUntilKneading}</div>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-3'>

                                        <div>
                                            <div> От замеса до выпечки:</div>
                                            <div> {item.fromKneadingToBaking}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2">
                                <iframe width='100%' height="450" src={item.videoUrl}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>


                        </div>
                    </div>
                ))
            }


            <Application/>

        </div>
    )
}
export default Recipte