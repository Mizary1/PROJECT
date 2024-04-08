import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API } from "../../util/API.js";



export const recipeAPI = createApi({
    tagTypes: ['Recipte'],
    reducerPath: 'recipeAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({
        fetchAllRecipe: build.query({
            query: () => ({
                url: '/recipe',
            }),
            providesTags: ['Recipe']
        }),

    })
})



export const {useFetchAllRecipeQuery} = recipeAPI