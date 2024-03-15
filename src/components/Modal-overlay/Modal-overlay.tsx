import React from "react";
import styles from "../Modal-overlay/Modal-overlay.module.css";

type TModalOverlayProps = {
    closeModal: () => void;
}

export default function ModalOverlay({closeModal}: TModalOverlayProps): JSX.Element {
    return (
        <div className={styles.modalOverlay} onClick={closeModal}>
        </div>
    )
}
