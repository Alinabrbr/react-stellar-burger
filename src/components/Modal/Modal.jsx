import React, {useEffect} from "react";
import styles from "../Modal/Modal.module.css";
import clsx from "clsx";
import {createPortal} from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../Modal-overlay/Modal-overlay";
import PropTypes from "prop-types";
import {useNavigate, useParams} from "react-router-dom";
import IngredientDetails from "../Ingredient-details/Ingredient-details";

export default function Modal(props) {

    const navigate = useNavigate();

    const { id } = useParams();
    const el = props.cards.find((item) => item._id === id);

    const closeModal = () =>{
        return (
            navigate("/")
        )
    }

    const modalElement = document.getElementById('modal');

    useEffect(() => {
        function onEsc(evt) {
            if (evt.code === "Escape") {
                closeModal();
            }
        }

        document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc)
    }, []);

    return createPortal(
        (
            <>
                <div className={clsx(styles.modal, 'pt-10 pr-10 pl-10 pb-15')}>
                    <IngredientDetails card={el}/>
                    <div className={styles.closeIcon} onClick={closeModal}>
                        <CloseIcon type="primary"/>
                    </div>
                </div>
                <ModalOverlay onClick={closeModal}/>
            </>
        ),
        modalElement
    )
}

Modal.propTypes = {
    children: PropTypes.element
}