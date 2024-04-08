import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API } from "../../util/API.js";



export const userAPI = createApi({
    tagTypes: ['User'],
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({
        registrationUser: build.mutation({
            query: (user) => ({
                url: '/user',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        loginUser: build.mutation({
            query: (user) => ({
                url: '/auth/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        profileUser: build.query({
            query: () => ({
                url: '/auth/profile',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }),

        })
    })
})