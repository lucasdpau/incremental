import React, { useContext } from 'react';
import { GameStateContext, UpgradesContext } from './contexts';
import Deltas from './AutoDeltas';
import { COSTS } from './constants';

const GameStateFunctions = () => {
    const GameState = useContext(GameStateContext);
    const Upgrades = useContext(UpgradesContext);

    const createHydrogen = () => {
        if (GameState.protonCount < COSTS.HYDROGEN_ATOM.PROTON) return;
        GameState.setProtonCount(prev => prev - COSTS.HYDROGEN_ATOM.PROTON);
        GameState.setHydrogenCount(prev => prev + 1);
    };
    const createCarbon = () => {
        if (GameState.protonCount < 6 || GameState.neutronCount < 6) return;
        GameState.setProtonCount(prev => prev - 6);
        GameState.setNeutronCount(prev => prev - 6);
        GameState.setCarbonCount(prev => prev + 1);
    };
    const createNitrogen = () => {
        if (GameState.protonCount < 7 || GameState.neutronCount < 7) return;
        GameState.setProtonCount(prev => prev - 7);
        GameState.setNeutronCount(prev => prev - 7);
        GameState.setNitrogenCount(prev => prev + 1);
    }
    const createOxygen = () => {
        if (GameState.protonCount < 8 || GameState.neutronCount < 8) return;
        GameState.setProtonCount(prev => prev - 8);
        GameState.setNeutronCount(prev => prev - 8);
        GameState.setOxygenCount(prev => prev + 1);
    };
    const createProtonGen = () => {
        if (GameState.protonCount < 10 || GameState.neutronCount < 10) return;
        GameState.setProtonCount(prev => prev - 10);
        GameState.setNeutronCount(prev => prev - 10);
        Deltas.protons += 1;
    };
    const createWater = () => {
        if (GameState.hydrogenCount < 2 || GameState.oxygenCount < 1) return;
        GameState.setHydrogenCount(prev => prev - 2);
        GameState.setOxygenCount(prev => prev - 1);
        GameState.setWaterCount(prev => prev + 1);
    };
    const createAminoAcid = () => {
        if (GameState.carbonCount < 3 || GameState.hydrogenCount < 7 || GameState.oxygenCount < 2 || GameState.nitrogenCount < 1) return;
        GameState.setCarbonCount(prev => prev - 3);
        GameState.setHydrogenCount(prev => prev - 7);
        GameState.setNitrogenCount(prev => prev - 1);
        GameState.setOxygenCount(prev => prev - 2);
        GameState.setAminoCount(prev => prev + 1);
    };
    const createFattyAcid = () => {
        if (GameState.hydrogenCount < 36 || GameState.oxygenCount < 2 || GameState.carbonCount < 18) return;
        GameState.setCarbonCount(prev => prev - 18);
        GameState.setHydrogenCount(prev => prev - 36);
        GameState.setOxygenCount(prev => prev - 2);
        GameState.setFattyAcidCount(prev => prev + 1);
    };


    const upgradesElectrons = () => {
        if (GameState.protonCount < 20 || GameState.neutronCount < 20) return;
        GameState.setProtonCount(prev => prev - 20);
        GameState.setNeutronCount(prev => prev - 20);
        Upgrades.setElectrons(true);
    };
    const upgradesCovalentBonds = () => {
        if (GameState.protonCount < 20 || GameState.neutronCount < 20) return;
        // remove costs
        Upgrades.setCovalentBonds(true);
    };
    const upgradesPeptideBonds = () => {
        if (GameState.protonCount < 20 || GameState.neutronCount < 20) return;
        // remove costs
        Upgrades.setPeptideBonds(true);
    };
    const upgradesDNA = () => {
        if (GameState.protonCount < 20 || GameState.neutronCount < 20) return;
        // remove costs
        Upgrades.setDNA(true);
    };
    const upgradesEnzymes = () => {
        if (GameState.protonCount < 20 || GameState.neutronCount < 20) return;
        // remove costs
        Upgrades.setEnzymes(true);
    };

    return {
        createHydrogen: createHydrogen,
        createCarbon: createCarbon,
        createNitrogen: createNitrogen,
        createOxygen: createOxygen,
        createProtonGen: createProtonGen,
        createWater: createWater,
        createAminoAcid: createAminoAcid,
        createFattyAcid: createFattyAcid,

        upgradesElectrons: upgradesElectrons,
        upgradesCovalentBonds: upgradesCovalentBonds,
        upgradesPeptideBonds: upgradesPeptideBonds,
        upgradesDNA: upgradesDNA,
        upgradesEnzymes: upgradesEnzymes,
    }
};

export default GameStateFunctions;