import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../services/store";
import React from "react";

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

export type TOrders = {
    success: boolean;
    orders: [TOrder];
    total: number;
    totalToday: number;
}

export type TOrder = {
    ingredients: string[],
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
    name?: string;
    price?: number;
}

export type TMessageResponse = ServerResponse<{
    message: string | null;
}>

export type TPropsChildren = {
    children: React.ReactNode;
}

export type UserDto = {
    email: string;
    name: string;
}

export type UserResponse = ServerResponse<{
    user: UserDto;
    message: string | null;
}>

export type AuthResponse = ServerResponse<{
    accessToken: string;
    refreshToken: string;
}>

type ServerResponse<T> = {
    success: boolean;
} & T;

export type UserResponseToken = ServerResponse<{
    user: UserDto;
    accessToken: string;
    refreshToken: string;
}>;

export type wsConnect = {
    wsUrl: string;
    withTokenRefresh: boolean;
};

export type RefreshResponseWithTokenType = ServerResponse<{
    accessToken: string;
    refreshToken: string;
}>;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;