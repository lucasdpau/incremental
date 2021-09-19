import React, { SetStateAction, useContext } from 'react';
import { Button } from '../';
import { IPopup } from '../ButtonMouseOverPopup';
import { GameStateContext, UpgradesContext } from '../../contexts';
import GameStateFunctions from '../../GameStateFunctions';
import { COSTS } from '../../constants';

interface IBGroup {
	groupType: 'MATTER' | 'UPGRADES';
};

interface IButtons {
	label: string;
	onClick: React.Dispatch<SetStateAction<number>>;
	hidden: boolean;
	popUp: IPopup;
};

const ButtonGroup = (props: IBGroup) => {
	const GameState = useContext(GameStateContext);
	const Upgrades = useContext(UpgradesContext);
	const GameStateInterface = GameStateFunctions();

	const BUTTONS: Array<IButtons> = [
		{ label: 'Create a proton', onClick: () => GameState.setProtonCount(prev => prev + 1), hidden: false, popUp: { description: 'Protons are positively charged', costs: COSTS.PROTON } },
		{ label: 'Create a neutron', onClick: () => GameState.setNeutronCount(prev => prev + 1), hidden: false, popUp: { description: '', costs: COSTS.NEUTRON } },
		{ label: 'Create a hydrogen atom', onClick: GameStateInterface.createHydrogen, hidden: !Upgrades.electrons, popUp: { description: '', costs: COSTS.HYDROGEN_ATOM } },
		{ label: 'Create a carbon atom', onClick: GameStateInterface.createCarbon, hidden: !Upgrades.electrons, popUp: { description: '', costs: COSTS.CARBON_ATOM } },
		{ label: 'Create a nitrogen atom', onClick: GameStateInterface.createNitrogen, hidden: !Upgrades.electrons, popUp: { description: '', costs: COSTS.NITROGEN_ATOM } },
		{ label: 'Create an oxygen atom', onClick: GameStateInterface.createOxygen, hidden: !Upgrades.electrons, popUp: { description: '', costs: COSTS.OXYGEN_ATOM } },
		{ label: 'Create proton generator', onClick: GameStateInterface.createProtonGen, hidden: !Upgrades.electrons, popUp: { description: '', costs: COSTS.NEUTRON } },
		{ label: 'Create water molecule', onClick: GameStateInterface.createWater, hidden: !Upgrades.covalentBonds, popUp: { description: '', costs: COSTS.NEUTRON } },
		{ label: 'Create amino acid', onClick: GameStateInterface.createAminoAcid, hidden: !Upgrades.covalentBonds, popUp: { description: '', costs: COSTS.NEUTRON } },
	];

	const UPGRADE_BUTTONS: Array<IButtons> = [
		{ label: 'Electrons', onClick: GameStateInterface.upgradesElectrons, hidden: Upgrades.electrons, popUp: { description: '', costs: COSTS.NEUTRON } },
		{ label: 'Covalent Bonds', onClick: GameStateInterface.upgradesCovalentBonds, hidden: Upgrades.covalentBonds, popUp: { description: '', costs: COSTS.NEUTRON } },
		{ label: 'Peptide Bonds', onClick: GameStateInterface.upgradesPeptideBonds, hidden: Upgrades.peptideBonds, popUp: { description: '', costs: COSTS.NEUTRON } },
		{ label: 'DNA', onClick: GameStateInterface.upgradesDNA, hidden: Upgrades.DNA, popUp: { description: '', costs: COSTS.NEUTRON } },
		{ label: 'Enzymes', onClick: GameStateInterface.upgradesEnzymes, hidden: Upgrades.enzymes, popUp: { description: '', costs: COSTS.NEUTRON } },
	];


	const renderButtons = (buttons: Array<IButtons>) => {
		const buttonGroup = buttons.map(ele => {
			return (
				<Button
					label={ele.label}
					onClick={ele.onClick}
					hidden={ele.hidden}
					popUpData={ele.popUp}
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