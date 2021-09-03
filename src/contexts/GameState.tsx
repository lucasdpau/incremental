import { createContext, useState } from 'react';

interface IGSContext {
    applyDeltas: (deltas: any) => void;
    protonCount: number;
    setProtonCount: (num: any) => void;
    neutronCount: number;
    setNeutronCount: (num: any) => void,
    hydrogenCount: number;
    setHydrogenCount: (num: any) => void;
    carbonCount: number;
    setCarbonCount: (num: any) => void;
    nitrogenCount: number;
    setNitrogenCount: (num: any) => void;
    oxygenCount: number;
    setOxygenCount: (num: any) => void;
    waterCount: number;
    setWaterCount: (num: any) => void;
    aminoCount: number;
    setAminoCount: (num: any) => void;
};

export const GameStateContext = createContext<IGSContext>({} as IGSContext);

export const GameStateContextProvider = (props: any) => {
    const [protonCount, setProtonCount] = useState<number>(0);
    const [neutronCount, setNeutronCount] = useState<number>(0);
    const [hydrogenCount, setHydrogenCount] = useState<number>(0);
    const [carbonCount, setCarbonCount] = useState<number>(0);
    const [nitrogenCount, setNitrogenCount] = useState<number>(0);
    const [oxygenCount, setOxygenCount] = useState<number>(0);
    const [waterCount, setWaterCount] = useState<number>(0);
    const [aminoCount, setAminoCount] = useState<number>(0);

    const applyDeltas = (deltas: any) => {
        setProtonCount(prev => prev + deltas.protons);
        setNeutronCount(prev => prev + deltas.neutrons);
        setHydrogenCount(prev => prev + deltas.hydrogen);
        setCarbonCount(prev => prev + deltas.carbon);
        setOxygenCount(prev => prev + deltas.oxygen);
        // incomplete
    };

    const defaultObj: IGSContext = {
        protonCount: protonCount,
        setProtonCount: setProtonCount,
        neutronCount: neutronCount,
        setNeutronCount: setNeutronCount,
        hydrogenCount: hydrogenCount,
        setHydrogenCount: setHydrogenCount,
        carbonCount: carbonCount,
        setCarbonCount: setCarbonCount,
        nitrogenCount: nitrogenCount,
        setNitrogenCount: setNitrogenCount,
        oxygenCount: oxygenCount,
        setOxygenCount: setOxygenCount,
        waterCount: waterCount,
        setWaterCount: setWaterCount,
        aminoCount: aminoCount,
        setAminoCount: setAminoCount,
        applyDeltas: applyDeltas,
    };

    return (
        <GameStateContext.Provider value={defaultObj}>
            {props.children}
        </GameStateContext.Provider>
    )
};
