import React from "react";
import {Navigate} from "react-router-dom";
import {getAccessToken} from "../../services/actions/actionsSelector";
import {useAppSelector} from "../../utils/types/types";

type TProtected = {
    unauthOnly: boolean;
    children: JSX.Element;
}

function ProtectedRoute({children, unauthOnly = false}: TProtected): JSX.Element | null {
    const accessToken = useAppSelector(getAccessToken);
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