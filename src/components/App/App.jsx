import React, {useEffect} from "react";
import styles from "./App.module.css";
import LayoutHeader from "../Layout-header/Layout-header";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/cardsSlice";
import {Route, Routes} from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import LogIn from "../../pages/Log-in/Log-in";
import Register from "../../pages/Register/Register";
import NotFound from "../../pages/Not-found/Not-found";
import Constructor from "../../pages/Constructor/Constructor";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import ForgotPassword from "../../pages/Forgot-password/Forgot-password";
import ResetPassword from "../../pages/Reset-password/Reset-password";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.app}>
                <Routes>
                    <Route path="/" element={<LayoutHeader/>}>
                        <Route index element={<Constructor/>}/>
                        <Route path="login" element={<LogIn/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="forgot-password" element={<ForgotPassword/>}/>
                        <Route path="reset-password" element={<ResetPassword/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        {/*<Route path="ingredients/:id" element={<Profile/>}/>*/}
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </div>
        </DndProvider>
    );
}

export default App;
