import {OrderIdResponse, TIngredient, TOrder, TOrderInfo, UserResponseToken} from "./types/types";

export const urlApi = "https://norma.nomoreparties.space/api";

export const fetchCard = (): Promise<any> => {
    return request(`/ingredients`);
}

type TPostOrderRequest = {
    ingredients: string[];
    token: string;
}

export const postOrderRequest = ({ingredients, token}: TPostOrderRequest): Promise<any> => {
    return requestWithRefresh(`/orders`, {
        method: "POST",
        body: JSON.stringify({"ingredients": ingredients}),
        headers: {
            "Content-Type": 'application/json',
            "Authorization": token,
        },
    })
}

export function getOrderInfo(number: string): Promise<any> {
    return request<OrderIdResponse>(`/orders/${number}`);
}

export function collectOrderIngredients(order: TOrder | TOrderInfo, ingredients: TIngredient[]): TIngredient[] {
    let orderIngredients: TIngredient[] = [];
    order.ingredients.forEach(idIngredient => {
        const ingredient = ingredients.find(element => element._id === idIngredient);
        if (ingredient) {
            orderIngredients.push(ingredient);
        }
    });
    return orderIngredients;
}

export async function request<T>(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(`${urlApi}${endpoint}`, options);
    return checkResponse<T>(res);
}

export async function refreshToken() {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        const res = await request<UserResponseToken>("/auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: refreshToken}),
        });
        return res;
    } catch (error) {
        throw error;
    }
}

export async function requestWithRefresh<T>(endpoint: string, options:RequestInit = {}): Promise<any> {
    try {
        return await request<T>(endpoint, options);
    } catch (error) {
        try {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("accessToken", refreshData.accessToken);
            localStorage.setItem("refreshToken", refreshData.refreshToken);

            return await request<T>(endpoint, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: refreshData.accessToken,
                },
            });
        } catch (error) {
            throw error;
        }
    }
}

export default function checkResponse<T>(res: Response): Promise<T> {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((errorData) => {
        throw new Error(`Ошибка ${res.status}: ${errorData.message}`);
    });
}