import React from "react";
import styles from "../Modal-overlay/Modal-overlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay (props){
    return (
        <div className={styles.modalOverlay} onClick={() => props.closeModal()}>
        </div>
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func
}