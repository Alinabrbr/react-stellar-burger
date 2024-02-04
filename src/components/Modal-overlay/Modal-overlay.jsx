import React from "react";
import styles from "../Modal-overlay/Modal-overlay.module.css";
import Modal from "../Modal/Modal.jsx";
import closeModal from "../../hooks/use-modal/useModal";

export default function ModalOverlay (props){
    return (
        <div className={styles.modalOverlay}>
            <Modal onClick={() => closeModal() && console.log(closeModal)}>{props.children}</Modal>
        </div>
    )
}