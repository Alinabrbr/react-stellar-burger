import React, {useEffect} from "react";
import styles from "./App.module.css";
import LayoutHeader from "../Layout-header/Layout-header";
import {getIngredients} from "../../services/reducers/cardsSlice";
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
import IngredientDetails from "../Ingredient-details/Ingredient-details";
import Modal from "../Modal/Modal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {useAppDispatch} from "../../utils/types/types";
import OrderFeed from "../../pages/OrderFeed/OrderFeed";
import ProfileOrders from "../../pages/ProfileOrders/ProfileOrders";
import ProfileEdit from "../../pages/ProfileEdit/ProfileEdit";
import OrderId from "../../pages/Order-id/Order-id";

function App(): JSX.Element {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const background = location.state && location.state.background;

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    const closeModal = (): void => {
        return (
            navigate(-1)
        )
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.app}>
                <Routes location={background || location}>
                    <Route path="/" element={<LayoutHeader/>}>
                        <Route index element={<Constructor/>}/>
                        <Route path="/react-stellar-burger" element={<Constructor/>}/>
                        <Route path="/login" element={<ProtectedRoute unauthOnly={true}><LogIn/></ProtectedRoute>}/>
                        <Route path="/register"
                               element={<ProtectedRoute unauthOnly={true}><Register/></ProtectedRoute>}/>
                        <Route path="/forgot-password"
                               element={<ProtectedRoute unauthOnly={true}><ForgotPassword/></ProtectedRoute>}/>
                        <Route path="/reset-password"
                               element={<ProtectedRoute unauthOnly={true}><ResetPassword/></ProtectedRoute>}/>
                        <Route path="/profile" element={<ProtectedRoute children={<Profile/>} unauthOnly={false}/>}>
                            <Route path="/profile" element={<ProfileEdit/>} />
                            <Route path="/profile/orders" element={<ProfileOrders/>} />
                        </Route>
                        <Route path="/profile/orders/:id" element={<OrderId/>}/>
                        <Route path="/ingredients/:id" element={<IngredientDetails/>}/>
                        <Route path="/feed" element={<OrderFeed/>}/>
                        <Route path="/feed/:id" element={<OrderId/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
                {background && (
                    <Routes>
                        <Route path="/ingredients/:id" element={<Modal closeModal={closeModal}><IngredientDetails/></Modal>}/>
                        <Route path="/profile/orders/:id" element={<Modal closeModal={closeModal}><OrderId/></Modal>}/>
                        <Route path="/feed/:id" element={<Modal closeModal={closeModal}><OrderId/></Modal>}/>
                    </Routes>
                )}
            </div>
        </DndProvider>
    );
}

export default App;
