import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IUpgradesContext {
    electrons: boolean;
    setElectrons: Dispatch<SetStateAction<boolean>>;
    covalentBonds: boolean;
    setCovalentBonds: Dispatch<SetStateAction<boolean>>;
    peptideBonds: boolean;
    setPeptideBonds: Dispatch<SetStateAction<boolean>>;
    enzymes: boolean;
    setEnzymes: Dispatch<SetStateAction<boolean>>;
    DNA: boolean;
    setDNA: Dispatch<SetStateAction<boolean>>;
};

export const UpgradesContext = createContext<IUpgradesContext>({} as IUpgradesContext);

export const UpgradesContextProvider = (props: any) => {
    const [electrons, setElectrons] = useState(false);
    const [covalentBonds, setCovalentBonds] = useState(false);
    const [peptideBonds, setPeptideBonds] = useState(false);
    const [enzymes, setEnzymes] = useState(false);
    const [DNA, setDNA] = useState(false);

    const defaultObj: IUpgradesContext = {
        electrons: electrons,
        setElectrons: setElectrons,
        covalentBonds: covalentBonds,
        setCovalentBonds: setCovalentBonds,
        peptideBonds: peptideBonds,
        setPeptideBonds: setPeptideBonds,
        enzymes: enzymes,
        setEnzymes: setEnzymes,
        DNA: DNA,
        setDNA: setDNA,
    };

    return (
        <UpgradesContext.Provider value={defaultObj}>
            {props.children}
        </UpgradesContext.Provider>
    )
};
