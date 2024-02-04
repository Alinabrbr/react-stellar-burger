import React from "react";
import styles from "../Modal/Modal.module.css";
import clsx from "clsx";
import {createPortal} from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import closeModal from "../../hooks/use-modal/useModal";

const modalElement = document.getElementById('modal');

export default function Modal (props)
{
    return createPortal(
        (
            <>
                <div className={clsx(styles.modal, 'pt-10 pr-10 pl-10 pb-15')}>
                    {props.children}
                </div>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary" onClick={() => props.closeModal() && console.log(closeModal)}/>
                </div>
            </>
        ), modalElement

    )
}