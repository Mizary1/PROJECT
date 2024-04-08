import React, {useState} from 'react';
import MyInput from "../../UI/MyInput";
import {productAPI, useCreateProductMutation} from "../../store/action/productService";
import toast from "react-hot-toast";

const ProductAdmin = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState()
    const [creteProduct] = useCreateProductMutation()
    const [isEdit, setIsEdit] = useState(false)
    const createProductHandler = async (e) => {
        e.preventDefault()
        // await creteProduct({
        //     title: title,
        //     description: description,
        //     price: price,
        //     image: file
        // })
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', file);
        await creteProduct(formData)
        toast.success('Продукт успешно создан')
    }

    return (
        <div>
            <div className="w-1/3 mx-auto">
                <form action="">
                    <label htmlFor="">Введите название</label>
                    <MyInput type="text" onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="">Введите описание</label>
                    <MyInput type="text" onChange={e => setDescription(e.target.value)}/>
                    <label htmlFor="">Введите цену</label>
                    <MyInput type="number" onChange={e => setPrice(e.target.value)}/>
                    <label htmlFor="">Выберите картинку </label>
                    <input type="file" aria-describedby="file_input_help" required={isEdit ? false : true}
                           onChange={(e) => {
                               if (e.target.files) {
                                   setFile(e.target.files[0])
                               }
                           }}/>
                    <div className="text-center mt-10">
                        <button onClick={createProductHandler} className={'bg-red-500 text-white py-2 px-6'}>Создать</button>
                    </div>
                </form>
            </div>
        </div>
    )
        ;
};

export default ProductAdmin;