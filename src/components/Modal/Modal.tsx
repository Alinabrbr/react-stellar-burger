import React, {useEffect} from "react";
import styles from "../Modal/Modal.module.css";
import clsx from "clsx";
import {createPortal} from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../Modal-overlay/Modal-overlay";

const modalElement = document.getElementById('modal') as HTMLElement;

export type TModalProps = {
    closeModal: () => void;
    children?: React.ReactNode;
}

export default function Modal({children, closeModal}: TModalProps): JSX.Element {

    useEffect(() => {
        function onEsc(evt: KeyboardEvent): void {
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
                    <div className={styles.children_container}>{children}</div>
                    <div className={styles.closeIcon} onClick={closeModal} data-cy="close-modal">
                        <CloseIcon type="primary"/>
                    </div>
                </div>
                <ModalOverlay closeModal={closeModal}/>
            </>
        ),
        modalElement
    )
}