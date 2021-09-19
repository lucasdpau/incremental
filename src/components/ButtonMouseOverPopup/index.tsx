import React from 'react';

interface IMousePopUp {
    open: boolean;
    data: IPopup;
}

export interface IPopup {
	description?: string;
	costs: { [key: string]: number };
};

const MousePopUp = (props: IMousePopUp) => {

    const renderCosts = (costs: { [key: string]: number }) => {
        const costsArr = [];
        for (const [key, value] of Object.entries(costs)) {
            const newElement = (
                <div>
                    {key} : {value}
                </div>
            );
            costsArr.push(newElement);
        }

        return costsArr
    };

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
            {props.data.description}
            {renderCosts(props.data.costs)}
        </div>
    )
};

export default MousePopUp;