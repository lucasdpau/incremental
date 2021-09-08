import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IGSContext {
    applyDeltas: (deltas: any) => void;
    protonCount: number;
    setProtonCount: Dispatch<SetStateAction<number>>;
    neutronCount: number;
    setNeutronCount: Dispatch<SetStateAction<number>>,
    hydrogenCount: number;
    setHydrogenCount: Dispatch<SetStateAction<number>>;
    carbonCount: number;
    setCarbonCount: Dispatch<SetStateAction<number>>;
    nitrogenCount: number;
    setNitrogenCount: Dispatch<SetStateAction<number>>
    oxygenCount: number;
    setOxygenCount: Dispatch<SetStateAction<number>>;
    phosphorusCount: number;
    setPhosphorusCount: Dispatch<SetStateAction<number>>;
    waterCount: number;
    setWaterCount: Dispatch<SetStateAction<number>>;
    aminoCount: number;
    setAminoCount: Dispatch<SetStateAction<number>>;
    fattyAcidCount: number;
    setFattyAcidCount: Dispatch<SetStateAction<number>>;
    glucoseCount: number;
    setGlucoseCount: Dispatch<SetStateAction<number>>;
    nucleotideCount: number;
    setNucleotideCount: Dispatch<SetStateAction<number>>;
    peptideCount: number;
    setPeptideCount: Dispatch<SetStateAction<number>>;
    proteinCount: number;
    setProteinCount: Dispatch<SetStateAction<number>>;
};

export const GameStateContext = createContext<IGSContext>({} as IGSContext);

export const GameStateContextProvider = (props: any) => {
    const [protonCount, setProtonCount] = useState(0);
    const [neutronCount, setNeutronCount] = useState(0);
    const [hydrogenCount, setHydrogenCount] = useState(0);
    const [carbonCount, setCarbonCount] = useState(0);
    const [nitrogenCount, setNitrogenCount] = useState(0);
    const [oxygenCount, setOxygenCount] = useState(0);
    const [phosphorusCount, setPhosphorusCount] = useState(0);
    const [waterCount, setWaterCount] = useState(0);
    const [aminoCount, setAminoCount] = useState(0);
    const [fattyAcidCount, setFattyAcidCount] = useState(0);
    const [glucoseCount, setGlucoseCount] = useState(0);
    const [nucleotideCount, setNucleotideCount] = useState(0);
    const [peptideCount, setPeptideCount] = useState(0);
    const [proteinCount, setProteinCount] = useState(0);

    const applyDeltas = (deltas: any) => {
        setProtonCount(prev => prev + deltas.protons);
        setNeutronCount(prev => prev + deltas.neutrons);
        setHydrogenCount(prev => prev + deltas.hydrogen);
        setCarbonCount(prev => prev + deltas.carbon);
        setOxygenCount(prev => prev + deltas.oxygen);
        setWaterCount(prev => prev + deltas.water);
        setAminoCount(prev => prev + deltas.amino);
        setFattyAcidCount(prev => prev + deltas.fatty);
        setGlucoseCount(prev => prev + deltas.glucose);
        setNucleotideCount(prev => prev + deltas.nucleotide);
        setPeptideCount(prev => prev + deltas.peptide);
        setProteinCount(prev => prev + deltas.protein);
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
        phosphorusCount: phosphorusCount,
        setPhosphorusCount: setPhosphorusCount,
        waterCount: waterCount,
        setWaterCount: setWaterCount,
        aminoCount: aminoCount,
        setAminoCount: setAminoCount,
        fattyAcidCount: fattyAcidCount,
        setFattyAcidCount: setFattyAcidCount,
        glucoseCount: glucoseCount,
        setGlucoseCount: setGlucoseCount,
        nucleotideCount: nucleotideCount,
        setNucleotideCount: setNucleotideCount,
        peptideCount: peptideCount,
        setPeptideCount: setPeptideCount,
        proteinCount: proteinCount,
        setProteinCount: setProteinCount,
        applyDeltas: applyDeltas,
    };

    return (
        <GameStateContext.Provider value={defaultObj}>
            {props.children}
        </GameStateContext.Provider>
    )
};
