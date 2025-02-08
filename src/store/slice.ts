import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IProductArraySlice {
	products: Array<IProductSlice>
}

export interface IProductSlice {
	name: string
    path: string
}

const initialState: IProductArraySlice = {
    products: []
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<IProductSlice>) => {
            state.products = [...state.products, action.payload]
        }, 
        deleteToBasket: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(value => value.name !== action.payload)
        }
    }
})