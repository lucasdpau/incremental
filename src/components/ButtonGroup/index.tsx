import React, { SetStateAction, useContext } from 'react';
import { Button } from '../';
import { GameStateContext, UpgradesContext } from '../../contexts';
import GameStateFunctions from '../../GameStateFunctions';

interface IBGroup {
	groupType: 'MATTER' | 'UPGRADES';
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

	const UPGRADE_BUTTONS: Array<IButtons> = [
		{ label: 'Electrons', onClick: GameStateInterface.upgradesElectrons, hidden: Upgrades.electrons },
		{ label: 'Covalent Bonds', onClick: GameStateInterface.upgradesCovalentBonds, hidden: Upgrades.covalentBonds },
		{ label: 'Peptide Bonds', onClick: GameStateInterface.upgradesPeptideBonds, hidden: Upgrades.peptideBonds },
		{ label: 'DNA', onClick: GameStateInterface.upgradesDNA, hidden: Upgrades.DNA },
		{ label: 'Enzymes', onClick: GameStateInterface.upgradesEnzymes, hidden: Upgrades.enzymes },
	];


	const renderButtons = (buttons: Array<IButtons>) => {
		const buttonGroup = buttons.map(ele => {
			return (
				<Button
					label={ele.label}
					onClick={ele.onClick}
					hidden={ele.hidden}
					popUpData={{}}
				/>
			)
		});
		return buttonGroup
	};

	const pickButtonGroupToRender = (grpType: 'MATTER' | 'UPGRADES') => {
		if (grpType === 'MATTER') return renderButtons(BUTTONS);
		else return renderButtons(UPGRADE_BUTTONS);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			{pickButtonGroupToRender(props.groupType)}
		</div>
	)
};

export default ButtonGroup;