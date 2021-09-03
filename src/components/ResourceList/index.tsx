import React, { useContext } from 'react';
import { GameStateContext } from '../../contexts/GameState';

const ResourceList = () => {
    const GameState = useContext(GameStateContext);

    const RESOURCE_LIST = [
        { name: 'Protons', amount: Math.floor(GameState.protonCount), unlocked: true },
        { name: 'Neutrons', amount: Math.floor(GameState.neutronCount), unlocked: true },
        { name: 'Hydrogen', amount: Math.floor(GameState.hydrogenCount), unlocked: true },
        { name: 'Carbon', amount: Math.floor(GameState.carbonCount), unlocked: true },
        { name: 'Nitrogen', amount: Math.floor(GameState.nitrogenCount), unlocked: true },
        { name: 'Oxygen', amount: Math.floor(GameState.oxygenCount), unlocked: true },
        { name: 'Water', amount: Math.floor(GameState.waterCount), unlocked: true },
        { name: 'Amino Acids', amount: Math.floor(GameState.aminoCount), unlocked: true },
    ];

    const resourceListItems = (list: any[]) => {
        const items = list.map(resource => {
            if (resource.unlocked === false) return <></>;
            return (
                <li>
                    {resource.name}: {resource.amount}
                </li>
            )
        });
        return items
    };

    return (
        <div>
            <ul>
                {resourceListItems(RESOURCE_LIST)}
            </ul>
        </div>
    )
};


export default ResourceList;