import React, {useEffect} from "react";
import styles from "./App.module.css";
import LayoutHeader from "../Layout-header/Layout-header";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/cardsSlice";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import LogIn from "../../pages/Log-in/Log-in";
import Register from "../../pages/Register/Register";
import NotFound from "../../pages/Not-found/Not-found";
import Constructor from "../../pages/Constructor/Constructor";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import ForgotPassword from "../../pages/Forgot-password/Forgot-password";
import ResetPassword from "../../pages/Reset-password/Reset-password";
import {getCards} from "../../services/cardsSelector";
import IngredientDetails from "../Ingredient-details/Ingredient-details";
import Modal from "../Modal/Modal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    const cards = useSelector(getCards);

    const closeModal = () => {
        return (
            navigate("/")
        )
    }

    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.app}>
                <Routes location={background || location}>
                    <Route path="/" element={<LayoutHeader/>}>
                        <Route index element={<Constructor/>}/>
                        <Route path="login" element={<ProtectedRoute unauthOnly={true}><LogIn/></ProtectedRoute>}/>
                        <Route path="register"
                               element={<ProtectedRoute unauthOnly={true}><Register/></ProtectedRoute>}/>
                        <Route path="forgot-password"
                               element={<ProtectedRoute unauthOnly={true}><ForgotPassword/></ProtectedRoute>}/>
                        <Route path="reset-password"
                               element={<ProtectedRoute unauthOnly={true}><ResetPassword/></ProtectedRoute>}/>
                        <Route path="profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                        <Route path="ingredients/:id" element={<IngredientDetails cards={cards}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
                {background && (
                    <Routes>
                        <Route
                            path="/ingredients/:id"
                            element={
                                <Modal closeModal={closeModal}>
                                    <IngredientDetails cards={cards}/>
                                </Modal>
                            }
                        />
                    </Routes>
                )}
            </div>
        </DndProvider>
    );
}

export default App;
