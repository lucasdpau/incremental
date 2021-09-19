import React from 'react';
import { COSTS } from '../../constants';

interface IMousePopUp {
    open: boolean;
    data?: any;
}

const MousePopUp = (props: IMousePopUp) => {

    return (
        <div style={{ 
            display: props.open ? 'flex' : 'none', 
            position: 'absolute', 
            right: '0', 
            padding: '20px',
            border: '1px solid black', 
            backgroundColor: 'white',
            zIndex: 5
            }}>
            Hi
        </div>
    )
};

export default MousePopUp;