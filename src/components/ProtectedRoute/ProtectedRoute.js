import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchRefreshTokenResult} from "../../services/registerAndAuthorizationSlice";
import {Navigate} from "react-router-dom";

function ProtectedRoute({children, unauthOnly}) {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.accessToken.accessToken);
    const refreshToken = localStorage.getItem("refreshToken");

    useEffect(() => {
        if (!accessToken && refreshToken) {
            dispatch(fetchRefreshTokenResult({token: refreshToken}));
        }
    }, [dispatch])

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