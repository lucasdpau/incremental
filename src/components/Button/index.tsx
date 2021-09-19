import React, { useState } from 'react';
import { ButtonMouseOverPopup } from '..';
import { IPopup } from '../ButtonMouseOverPopup';
import './styles.css';

interface IButton {
    disabled?: boolean;
    hidden?: boolean;
    onClick: (arg?: any) => void;
    label: string;
    popUpData: IPopup;
};

const Button = (props: IButton) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    if (props.hidden) return <></>;

    const handleClick = () => {
        if (!props.disabled) props.onClick();
    };
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') props.onClick();
    };

    return (
        <div
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            className='button'
            tabIndex={1}
            onMouseEnter={() => setIsPopUpOpen(true)}
            onMouseLeave={() => setIsPopUpOpen(false)}
        >
            {props.label}
            <ButtonMouseOverPopup
                open={isPopUpOpen}
                data={props.popUpData}
            />
        </div>
    )
};

export default Button;