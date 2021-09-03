import { createContext, useState } from 'react';

interface IUpgradesContext {
    electrons: boolean;
    setElectrons: (bool: boolean) => void;
    covalentBonds: boolean;
    setCovalentBonds: (bool: boolean) => void;
};

export const UpgradesContext = createContext<IUpgradesContext>({} as IUpgradesContext);

export const UpgradesContextProvider = (props: any) => {
    const [electrons, setElectrons] = useState<boolean>(false);
    const [covalentBonds, setCovalentBonds] = useState<boolean>(false);

    const defaultObj: IUpgradesContext = {
        electrons: electrons,
        setElectrons: setElectrons,
        covalentBonds: covalentBonds,
        setCovalentBonds: setCovalentBonds
    };

    return (
        <UpgradesContext.Provider value={defaultObj}>
            {props.children}
        </UpgradesContext.Provider>
    )
};
