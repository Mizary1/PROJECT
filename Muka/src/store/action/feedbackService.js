import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API } from "../../util/API.js";



export const feedbackAPI = createApi({
    tagTypes: ['Feedback'],
    reducerPath: 'feedbackAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({
        createFeedback: build.mutation({
            query: (body) => ({
                url: '/request',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Feedback']
        }),
        fetchAllFeedback: build.query({
            query: () => ({
                url: '/request',
            }),
            providesTags: ['Feedback']
        }),
    })
})


export const {useCreateFeedbackMutation, useFetchAllFeedbackQuery} = feedbackAPI