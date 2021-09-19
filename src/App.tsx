import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, ButtonGroup, ResourceList } from './components';
import { GameStateContext, UpgradesContext } from './contexts';
import Deltas from './AutoDeltas';
import { GAME_CONFIG } from './constants';

const App = () => {
	const GameState = useContext(GameStateContext);
	const Upgrades = useContext(UpgradesContext);
	
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
			<ButtonGroup groupType='MATTER'/>
			<div>
				<div>
					Upgrades
				</div>
				<ButtonGroup groupType='UPGRADES'/>
			</div>
		</div>
	);
};

export default App;
