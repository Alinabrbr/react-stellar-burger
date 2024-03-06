import React, {useEffect} from "react";
import styles from "./App.module.css";
import LayoutHeader from "../Layout-header/Layout-header";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/cardsSlice";
import {Route, Routes, useLocation} from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import LogIn from "../../pages/Log-in/Log-in";
import Register from "../../pages/Register/Register";
import NotFound from "../../pages/Not-found/Not-found";
import Constructor from "../../pages/Constructor/Constructor";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import ForgotPassword from "../../pages/Forgot-password/Forgot-password";
import ResetPassword from "../../pages/Reset-password/Reset-password";
import Modal from "../Modal/Modal";
import {getCards} from "../../services/cardsSelector";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    const cards = useSelector(getCards);

    const location = useLocation();
    const background = location.state && location.state.background;

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
                        <Route path="ingredients/:id" element={<Modal cards={cards}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
                {background && (
                    <Routes>
                        <Route path="ingredients/:id" element={<Modal cards={cards} />} />
                    </Routes>
                )}
            </div>
        </DndProvider>
    );
}

export default App;
