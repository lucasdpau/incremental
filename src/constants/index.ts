export const GAME_CONFIG = {
    TICK_DURATION: 250,
};

export type COST_ITEMS = 'PROTON' | 'NEUTRON' | 'HYDROGEN_ATOM' | 'CARBON_ATOM' | 'NITROGEN_ATOM' | 'OXYGEN_ATOM'


export type ICosts = {
    [key in COST_ITEMS]: { [key: string]: number };
}

export const COSTS: ICosts = {
    'PROTON' : {'Protons': 0},
    'NEUTRON' : {'Neutrons' : 0},
    'HYDROGEN_ATOM': { 'Protons': 1 },
    'CARBON_ATOM': { 'Protons': 6, 'Neutrons': 6 },
    'NITROGEN_ATOM': { 'Protons': 7, 'Neutrons': 7 },
    'OXYGEN_ATOM': { 'Protons': 8, 'Neutrons': 8 },
}

// export const BUTTONS = {
//     'PROTON': {costs: COSTS.PROTON, }
// };