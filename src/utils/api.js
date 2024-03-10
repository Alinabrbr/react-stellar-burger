export const urlApi = "https://norma.nomoreparties.space/api";

export const fetchCard = () => {
    return request(`/ingredients`);
}

export const postOrderRequest = ({ingredients, token}) => {
    return requestWithRefresh(`/orders`, {
        method: "POST",
        body: JSON.stringify({"ingredients": ingredients}),
        headers: {
            "Content-Type": 'application/json',
            "Authorization": token,
        },
    })
}

export async function request(endpoint, options) {
    const res = await fetch(`${urlApi}${endpoint}`, options);
    return checkResponse(res);
}

export async function refreshToken() {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        const res = await request("/auth/token", {
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

export async function requestWithRefresh(endpoint, options = {}) {
    try {
        return await request(endpoint, options);
    } catch (error) {
        try {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("accessToken", refreshData.accessToken);
            localStorage.setItem("refreshToken", refreshData.refreshToken);

            return await request(endpoint, {
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

export default function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((errorData) => {
        throw new Error(`Ошибка ${res.status}: ${errorData.message}`);
    });
}