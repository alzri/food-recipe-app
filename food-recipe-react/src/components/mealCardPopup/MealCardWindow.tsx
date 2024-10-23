import React from "react";
import { MealCardWindowProps } from "./MealCardWindowProps.types";
import styles from './MealCardWindow.module.scss';

const MealCardWindow: React.FC<MealCardWindowProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.mealCardWindow}>
            <div className={styles.mealContant}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    )
};

export default MealCardWindow;