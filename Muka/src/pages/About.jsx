import React from 'react'
import about1 from '../images/about1.jpg'
import ABOUT2 from '../images/ABOUT2.jpg'
import about3 from '../images/about3.jpg'
import bg2 from '../images/contactus-bg.jpg'
import Application from '../components/Application'



const About = () => {
  return (
    <div>
        <div className="relative">
    <div className='absolute left-40  top-30'>
        <div className='w-fit mx-auto  text-[#fff] pt-[120px]'>
            <h1 className='text-5xl mb-10'>
            О компании</h1>
            <p className='text-2xl mb-5'>Узнайте больше о нашем <br/>
            СуперМука</p>
         </div>
        
    </div>
    <img src={about1} alt=""/>
    <div className="">
    <div className=' w-[800px] mt-20 mx-auto text-center '>
                                <h1 className=' font-[600] text-3xl mb-5'>Хорошая выпечка начинается с правильной муки!</h1>
                                <p className='text-xl mb-5'>
                                    <br/> <br/>
                                    Мы разработали профиль качества для каждого вида муки и каждая партия соответствует
                                    оптимальным значениям этого профиля, что обеспечивает стабильность качества
                                    продукции от партии к партии. Реологические характеристики – комплекс показателей,
                                    описывающих поведение и состояние теста на протяжении всего технологического
                                    процесса: от замеса до выпечки.
                                </p>
                            </div>
    </div>


<div className="flex max-w-[1200px] mx-auto justify-between items-center">

<img className='bg-[#F8F5F0] p-7 w-1/3 h-full' src={ABOUT2} alt="" />
<div className=' w-1/2 mt-20 '>
    

<h1 className=' font-[600] text-3xl mb-5'>Наша миссия</h1>
                                <p className='text-xl mb-5'>
                                    <br/> <br/>
                                    Миссия нашей компании – предоставить возможность каждому пекарю, пицайолло, каждому увлечённому любителю – работать на качественном сырье, получать предсказуемый, стабильный, наилучший результат в готовом изделии!

Мы постоянно находимся в поиске новых решений – и с удовольствием делимся ими с нашими партнёрами! Каждому нашему клиенту доступны рецептуры и подробные технологические карты, а наши специалисты готовы оказать подробную консультацию по технологическим вопросам. У нас есть собственный Учебный Центр, где мы регулярно проводим обучающие курсы – чтобы делиться знаниями, обмениваться опытом и совместными усилиями развивать отрасль хлебопечения и индустрию пиццы в нашей стране!
                                </p>
</div>
</div>

<div className="flex max-w-[1200px] mx-auto justify-between items-center">

<img className='bg-[#F8F5F0] p-7 w-1/3 h-full' src={about3} alt="" />
<div className=' w-1/2 mt-20 '>
    

<h1 className=' font-[600] text-3xl mb-5'>Контроль качества</h1>
                                <p className='text-xl mb-5'>
                                    <br/> <br/>
                                    На нашем сайте Вы не найдете формулировок «количество клейковины», «ИДК» и «белизна» (не найдёте, но будьте уверены, наша мука соответствует ГОСТу). Но говоря о качестве, эти показатели не являются ключевыми. Настоящую ценность муки можно определить только по поведению теста в ходе технологического процесса. Только зная, и будучи уверенными в её реологических характеристиках, можно быть уверенными в качестве готовых изделий! Именно поэтому мы оцениваем качество муки более чем по 16 параметрам, отвечающим за реологию.</p>
</div>
</div>

<div className="max-w-[1200px] mx-auto">

                </div>

                <Application/>

</div></div>
  )
}

export default About