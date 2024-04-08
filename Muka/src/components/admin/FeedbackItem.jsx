import React from 'react';
import {useFetchAllFeedbackQuery} from "../../store/action/feedbackService";

const FeedbackItem = () => {

    const {data} = useFetchAllFeedbackQuery()

    return (
        <div className={'w-1/2 mx-auto'}>
            <table className={'mx-auto'}>
                <thead className={'bg-red-500 text-white'}>
                <tr>
                    <td>Номер заказа</td>
                    <td>Имя</td>
                    <td>Почта</td>
                    <td>Номер телефона</td>
                    <td>Сообщение</td>
                </tr>
                </thead>
                <tbody className={'bg-[#f8f5f0]'}>
                {data &&
                    data.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeedbackItem;