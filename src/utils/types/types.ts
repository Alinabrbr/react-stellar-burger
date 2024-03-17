import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../services/store";
import React from "react";
// import {createAsyncThunk as createAsyncThunkRedux} from "@reduxjs/toolkit";

export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    ingredientId?: string;
    isLocked?: boolean;
}

export type TPropsChildren = {
    children: React.ReactNode;
}

// export const createAsyncThunk = createAsyncThunkRedux.withTypes<{
//     state: RootState;
//     dispatch: typeof useAppDispatch;
//     extra: {};
// }>();

export type UserDto = {
    email: string;
    name: string;
}

export type UserResponse = {
    success: boolean;
} & {
    user: UserDto;
}

type ServerResponse<T> = {
    success: boolean;
} & T;

export type UserResponseToken = ServerResponse<{
    user: UserDto;
    accessToken: string;
    refreshToken: string;
}>;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;