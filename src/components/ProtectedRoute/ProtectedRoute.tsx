import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAccessToken} from "../../services/tokenSelector";

type TProtected = {
    unauthOnly: boolean;
    children: JSX.Element;
}

function ProtectedRoute({children, unauthOnly = false}: TProtected): JSX.Element | null {
    const accessToken = useSelector(getAccessToken);
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken && refreshToken) {
        return (
            <div>
                <h1>Проверка аутентификации...</h1>
            </div>
        );
    }

    if (unauthOnly && (accessToken || refreshToken)) {
        return (
            <Navigate to={'/'}/>
        )
    }

    if (!accessToken && !refreshToken && !unauthOnly) {
        return (
            <Navigate to={'/login'}/>
        )
    }

    return <>{children}</>;
}

export default ProtectedRoute;