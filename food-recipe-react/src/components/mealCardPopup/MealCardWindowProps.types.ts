import React from "react";

export interface MealCardWindowProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}