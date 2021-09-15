import React, { useContext } from 'react';
import { GameStateContext, UpgradesContext } from '../../contexts';

interface IResources {
    resourceList: Array<any>;
}

const ResourceList = (props: any) => {
    const GameState = useContext(GameStateContext);
    const Upgrades = useContext(UpgradesContext);

    const RESOURCE_LIST = [
        { name: 'proton', label: 'Protons', amount: Math.floor(GameState.protonCount), unlocked: true },
        { name: 'neutron', label: 'Neutrons', amount: Math.floor(GameState.neutronCount), unlocked: true },
        { name: 'hydrogen', label: 'Hydrogen', amount: Math.floor(GameState.hydrogenCount), unlocked: Upgrades.electrons },
        { name: 'carbon', label: 'Carbon', amount: Math.floor(GameState.carbonCount), unlocked: Upgrades.covalentBonds },
        { name: 'nitrogen', label: 'Nitrogen', amount: Math.floor(GameState.nitrogenCount), unlocked: true },
        { name: 'oxygen', label: 'Oxygen', amount: Math.floor(GameState.oxygenCount), unlocked: true },
        { name: 'water', label: 'Water', amount: Math.floor(GameState.waterCount), unlocked: true },
        { name: 'amino', label: 'Amino Acids', amount: Math.floor(GameState.aminoCount), unlocked: true },
    ];

    const resourceListItems = (list: Array<any>) => {
        const items = list.map(resource => {
            if (resource.unlocked === false) return <></>;
            return (
                <li>
                    {resource.label}: {resource.amount}
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