import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API } from "../../util/API.js";



export const orderAPI = createApi({
    tagTypes: ['Order'],
    reducerPath: 'orderAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({
        createOrder: build.mutation({
            query: (body) => ({
                url: '/order',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Order']
        }),
        fetchOrderUser: build.query({
            query: (userId) => ({
                url: `/order/${userId}`,
            }),
            providesTags: ['Order']
        }),
        fetchOrderAll: build.query({
            query: () => ({
                url: `/order`,
            }),
            providesTags: ['Order']
        }),
        updateOrder: build.mutation({
            query: ({status, id}) => ({
                url: `/order/${id}`,
                method: 'PATCH',
                body: {status}
            }),
            invalidatesTags: ['Order']
        }),

    })
})


export const {useFetchOrderUserQuery, useFetchOrderAllQuery, useUpdateOrderMutation} = orderAPI