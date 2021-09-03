import React from 'react';

interface IButton {
    disabled?: boolean;
    rendered?: boolean;
    onClick: (arg?: any) => void;
    label: string;
};

const Button = (props: IButton) => {
    if (props.rendered === false) return <></>;

    return (
        <button onClick={props.onClick} disabled={props.disabled}>
            {props.label}
        </button>
    )
};

export default Button;