import React, {useEffect} from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
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

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.app}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Constructor/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </DndProvider>
    );
}

export default App;
