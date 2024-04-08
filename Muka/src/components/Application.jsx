import React, { useState } from 'react'
import Modal from './Modal'
import bg2 from '../images/contactus-bg.jpg'
import MyInput from '../UI/MyInput'
import { InputMask } from 'primereact/inputmask';
import {feedbackAPI, useCreateFeedbackMutation} from "../store/action/feedbackService";
import toast from 'react-hot-toast';
        



const Application = () => {

    const [modal, setModal] = useState(false)
    const [createFeedback] = useCreateFeedbackMutation()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [text, setText] = useState()

    const feedbackHandler = (e) => {
        e.preventDefault()
        if(name && email && number && text) {
            const body = {
                name: name,
                email: email,
                number: number,
                message: text
            }
            createFeedback(body)
            toast.success('Заявка отправленна');
        } else{
            toast.error('Введите данные');
        }

    }


  return (
    <div className="relative ">
                    <div className="absolute left-40 top-20 p-14 bg-[#F8F5F0]">
                        <h1 className='text-4xl'>Свяжитесь с нами</h1>
                        <p className='text-xl mt-5 mb-5'>Позвоните или напишите нам</p>
                        <p className='text-xl mt-5 mb-5'> +7 900 289-63-69</p>
                        <p className='text-xl mt-5 mb-5'> Задайте вопрос, наш менеджер свяжется с вами</p>
                        <button className='bg-red-600 text-white px-6 py-2' onClick={() => setModal(true)}>НАПИСАТЬ</button>

                    </div>
                    {
                            modal && <Modal title={'Свяжитесь с нами'} onCLose={() => setModal(false)}>
                            <div>
                                <label htmlFor="">Введите имя</label>
                                <MyInput type="text" onChange={e => setName(e.target.value)}/>
                                <label htmlFor="">Введите почту</label>
                                <MyInput type="text" onChange={e => setEmail(e.target.value)}/>
                                <label htmlFor="">Введите номер</label>
                                <InputMask onChange={e => setNumber(e.target.value)} className='border-2 w-full px-4 py-2 outline-0 mb-5' id="ssn" mask="+7 999-999-99-99" placeholder="+7 ___-___-__-__"></InputMask>
                                <label htmlFor="">Сообщение</label>
                                <textarea onChange={e => setText(e.target.value)}  className='border-2 w-full px-4 py-2 outline-0 mb-5'/>
                                <div className="text-center">
                                    <button className='px-6 py-2 bg-red-500 text-white ' onClick={feedbackHandler}>Отправить</button>
                                </div>
                            </div>
                        </Modal>
                        }
                    <img src={bg2} alt="" className='w-full h-[700px] object-cover'/>
                </div>
  )
}

export default Application