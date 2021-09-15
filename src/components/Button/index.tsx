import React from 'react';
import './styles.css';

interface IButton {
    disabled?: boolean;
    hidden?: boolean;
    onClick: (arg?: any) => void;
    label: string;
};

const Button = (props: IButton) => {
    if (props.hidden) return <></>;

    const handleClick = () => {
        if (!props.disabled) props.onClick();
    };
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') props.onClick();
    }

    return (
        <div
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            className='button'
            tabIndex={1}
        >
            {props.label}
        </div>
    )
};

export default Button;