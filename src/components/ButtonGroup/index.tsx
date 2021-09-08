import React, { useContext } from 'react';
import { Button } from '../';
import { GameStateContext, UpgradesContext } from '../../contexts';
import Deltas from '../../AutoDeltas';

interface IBGroup {

};

const ButtonGroup = (props: IBGroup) => {
	const GameState = useContext(GameStateContext);
	const Upgrades = useContext(UpgradesContext);

	const handleCreateHydrogenButton = () => {
		if (GameState.protonCount < 1) return;
		GameState.setProtonCount((prev: number): number => prev - 1);
		GameState.setHydrogenCount((prev: number): number => prev + 1);
	};

	const handleCreateCarbonButton = () => {
		if (GameState.protonCount < 6 || GameState.neutronCount < 6) return;
		GameState.setProtonCount((prev: number): number => prev - 6);
		GameState.setNeutronCount((prev: number): number => prev - 6);
		GameState.setCarbonCount((prev: number): number => prev + 1);
	};

	const handleCreateNitrogenButton = () => {
		if (GameState.protonCount < 7 || GameState.neutronCount < 7) return;
		GameState.setProtonCount((prev: number): number => prev - 7);
		GameState.setNeutronCount((prev: number): number => prev - 7);
		GameState.setNitrogenCount((prev: number): number => prev + 1);
	}

	const handleCreateOxygenButton = () => {
		if (GameState.protonCount < 8 || GameState.neutronCount < 8) return;
		GameState.setProtonCount((prev: number): number => prev - 8);
		GameState.setNeutronCount((prev: number): number => prev - 8);
		GameState.setOxygenCount((prev: number): number => prev + 1);
	};

	const handleCreateProtonGen = () => {
		if (GameState.protonCount < 10 || GameState.neutronCount < 10) return;
		GameState.setProtonCount((prev: number): number => prev - 10);
		GameState.setNeutronCount((prev: number): number => prev - 10);
		Deltas.protons += 1;
	};

	const handleCreateWaterButton = () => {
		if (GameState.hydrogenCount < 2 || GameState.oxygenCount < 1) return;
		GameState.setHydrogenCount((prev: number): number => prev - 2);
		GameState.setOxygenCount((prev: number): number => prev - 1);
		GameState.setWaterCount((prev: number) => prev + 1);
	};

	const handleAminoAcidButton = () => {
		if (GameState.hydrogenCount < 2 || GameState.oxygenCount < 1) return;
		GameState.setCarbonCount((prev: number): number => prev - 3);
		GameState.setHydrogenCount((prev: number): number => prev - 7);
		GameState.setNitrogenCount((prev: number): number => prev - 1);
		GameState.setOxygenCount((prev: number): number => prev - 2);
		GameState.setAminoCount((prev: number): number => prev + 1);
	};

	const handleFattyAcidButton = () => {
		if (GameState.hydrogenCount < 2 || GameState.oxygenCount < 1) return;
		GameState.setCarbonCount((prev: number): number => prev - 18);
		GameState.setHydrogenCount((prev: number): number => prev - 36);
		GameState.setOxygenCount((prev: number): number => prev - 2);
		// GameState.setFa  ((prev: number): number => prev + 1);
	};

	const BUTTONS = [
		{ label: 'Create a proton', onClick: () => GameState.setProtonCount((prev: number): number => prev + 1), rendered: true },
		{ label: 'Create a neutron', onClick: () => GameState.setNeutronCount((prev: number): number => prev + 1), rendered: true },
		{ label: 'Create a hydrogen atom', onClick: handleCreateHydrogenButton, rendered: Upgrades.electrons },
		{ label: 'Create a carbon atom', onClick: handleCreateCarbonButton, rendered: Upgrades.electrons },
		{ label: 'Create a nitrogen atom', onClick: handleCreateNitrogenButton, rendered: Upgrades.electrons },
		{ label: 'Create an oxygen atom', onClick: handleCreateOxygenButton, rendered: Upgrades.electrons },
		{ label: 'Create proton generator', onClick: handleCreateProtonGen, rendered: Upgrades.electrons },
		{ label: 'Create water molecule', onClick: handleCreateWaterButton, rendered: Upgrades.covalentBonds },
		{ label: 'Create amino acid', onClick: handleAminoAcidButton, rendered: Upgrades.covalentBonds },
	];


	const renderButtons = (buttons: Array<any>) => {
		const buttonGroup = buttons.map(ele => {
			return (
				<Button
					label={ele.label}
					onClick={ele.onClick}
					rendered={ele.rendered}
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