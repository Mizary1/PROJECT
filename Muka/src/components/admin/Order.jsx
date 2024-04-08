import React, {useState} from 'react';
import {useFetchOrderAllQuery, useUpdateOrderMutation} from "../../store/action/orderService";
import Modal from "../Modal";

const Order = () => {
    const {data} = useFetchOrderAllQuery();
    const [updateOrder] = useUpdateOrderMutation(); // Убираем передачу orderId
    const [modal, setModal] = useState(false)
    const [ord, setOrd] = useState()

    return (
        <div className={'container mx-auto'}>
            <table className={'w-full'}>
                <thead className={'bg-red-500 text-white'}>
                <tr>
                    <td>Номер заказа</td>
                    <td>Имя</td>
                    <td>Номер товара</td>
                    <td>Количество</td>
                    <td>Номер пользователя</td>
                    <td>Адрес</td>
                    <td>Статус</td>
                </tr>
                </thead>
                <tbody className={'bg-[#f8f5f0]'}>
                {data &&
                    data.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.productId}</td>
                            <td>{item.quantity}</td>
                            <td>{item.userId}</td>
                            <td>{item.adress}</td>
                            <td className={'cursor-pointer'}
                                onClick={() => {
                                setOrd(item)
                                setModal(true)
                            }}>{modal ? (
                                <div>
                                    <select
                                        onChange={(e) => {
                                            updateOrder({
                                                id: item.id,
                                                status: e.target.value
                                            })
                                            setModal(false)
                                        }}
                                        value={item.status}
                                    >
                                        <option value="В ожидании">В ожидании</option>
                                        <option value="В пути">В пути</option>
                                        <option value="Доставлено">Доставлено</option>
                                    </select>
                                </div>
                            ) : item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/*{*/}
            {/*    modal && <Modal onCLose={() => setModal(false)}>*/}
            {/*        {ord.id}*/}
            {/*    </Modal>*/}
            {/*}*/}
        </div>
    );
};

export default Order;

// <select
//     onChange={(e) => {
//         handleUpdate(item.id, e.target.value)
//     }}
//     value={item.status}
// >
//     <option value="В ожидании">В ожидании</option>
//     <option value="В ожидании">{item.status}</option>
//     <option value="В пути">В пути</option>
//     <option value="Доставлено">Доставлено</option>
// </select>