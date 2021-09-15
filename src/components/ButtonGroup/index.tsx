import React, { SetStateAction, useContext } from 'react';
import { Button } from '../';
import { GameStateContext, UpgradesContext } from '../../contexts';
import GameStateFunctions from '../../GameStateFunctions';

interface IBGroup {

};

interface IButtons {
	label: string;
	onClick: React.Dispatch<SetStateAction<number>>;
	hidden: boolean;
}

const ButtonGroup = (props: IBGroup) => {
	const GameState = useContext(GameStateContext);
	const Upgrades = useContext(UpgradesContext);
	const GameStateInterface = GameStateFunctions();

	const BUTTONS: Array<IButtons> = [
		{ label: 'Create a proton', onClick: () => GameState.setProtonCount(prev => prev + 1), hidden: false },
		{ label: 'Create a neutron', onClick: () => GameState.setNeutronCount(prev => prev + 1), hidden: false },
		{ label: 'Create a hydrogen atom', onClick: GameStateInterface.createHydrogen, hidden: !Upgrades.electrons },
		{ label: 'Create a carbon atom', onClick: GameStateInterface.createCarbon, hidden: !Upgrades.electrons },
		{ label: 'Create a nitrogen atom', onClick: GameStateInterface.createNitrogen, hidden: !Upgrades.electrons },
		{ label: 'Create an oxygen atom', onClick: GameStateInterface.createOxygen, hidden: !Upgrades.electrons },
		{ label: 'Create proton generator', onClick: GameStateInterface.createProtonGen, hidden: !Upgrades.electrons },
		{ label: 'Create water molecule', onClick: GameStateInterface.createWater, hidden: !Upgrades.covalentBonds },
		{ label: 'Create amino acid', onClick: GameStateInterface.createAminoAcid, hidden: !Upgrades.covalentBonds },
	];


	const renderButtons = (buttons: Array<IButtons>) => {
		const buttonGroup = buttons.map(ele => {
			return (
				<Button
					label={ele.label}
					onClick={ele.onClick}
					hidden={ele.hidden}
				/>
			)
		});
		return buttonGroup
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			{renderButtons(BUTTONS)}
		</div>
	)
};

export default ButtonGroup;