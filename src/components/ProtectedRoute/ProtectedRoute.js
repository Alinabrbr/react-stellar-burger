import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAccessToken} from "../../services/tokenSelector";

function ProtectedRoute({children, unauthOnly}) {
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