import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, ButtonGroup, ResourceList } from './components';
import { GameStateContext, UpgradesContext } from './contexts';
import Deltas from './AutoDeltas';
import { GAME_CONFIG } from './constants';

const App = () => {
	const GameState = useContext(GameStateContext);
	const Upgrades = useContext(UpgradesContext);

	const handleElectronButton = () => {
		Upgrades.setElectrons(true);
		// remove resources cost
	};

	const handleCovalentButton = () => {
		Upgrades.setCovalentBonds(true);
		// remove resources cost
	};

	useEffect(() => {
		// loop to auto increment values
		const intervalId = setInterval(() => GameState.applyDeltas(Deltas), GAME_CONFIG.TICK_DURATION);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div>
			<header>
				Hi
			</header>
			<ResourceList />
			<ButtonGroup />
			<div>
				<div>
					Upgrades
				</div>
				<Button
					label='Electrons'
					onClick={handleElectronButton}
					disabled={Upgrades.electrons}
				/>
				<Button
					label='Covalent Bonds'
					onClick={handleCovalentButton}
					disabled={Upgrades.covalentBonds}
				/>
			</div>
		</div>
	);
};

export default App;
