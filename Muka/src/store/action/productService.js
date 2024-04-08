import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API } from "../../util/API.js";



export const productAPI = createApi({
    tagTypes: ['Product'],
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({
        fetchAllProduct: build.query({
            query: () => ({
                url: '/product',
            }),
            providesTags: ['Product']
        }),
        createProduct: build.mutation({
            query: (formData) => ({
                url: '/product',
                method: 'POST',
                body: formData,
                headers: {
                    // 'Content-Type': 'multipart/form-data', // Уберите эту строку
                },
                formData: true,
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: build.mutation({
            query: (productId) => ({
                url: `/product/${productId}`,
                method: 'DELETE',
              
            }),
            invalidatesTags: ['Product']
        })

    })
})



export const {useCreateProductMutation} = productAPI