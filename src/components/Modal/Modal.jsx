import React from "react";
import styles from "../Modal/Modal.module.css";
import clsx from "clsx";
import {createPortal} from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../Modal-overlay/Modal-overlay";

export default function Modal(props) {

    const modalElement = document.getElementById('modal');

    return createPortal(
        (
            <>
                <div className={clsx(styles.modal, 'pt-10 pr-10 pl-10 pb-15')}>
                    {props.children}
                    <div className={styles.closeIcon} onClick={props.closeModal}>
                        <CloseIcon type="primary"/>
                    </div>
                </div>
                <ModalOverlay/>
            </>
        ),
        modalElement
    )
}