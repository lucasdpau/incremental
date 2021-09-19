export const GAME_CONFIG = {
    TICK_DURATION: 250,
};

type COST_ITEMS = 'PROTON' | 'NEUTRON' | 'HYDROGEN_ATOM' | 'CARBON_ATOM' | 'NITROGEN_ATOM' | 'OXYGEN_ATOM'


export type ICosts = {
    [key in COST_ITEMS]: { [key: string]: number };
}

export const COSTS: ICosts = {
    'PROTON' : {'PROTON': 0},
    'NEUTRON' : {'NEUTRON' : 0},
    'HYDROGEN_ATOM': { 'PROTON': 1 },
    'CARBON_ATOM': { 'PROTON': 6, 'NEUTON': 6 },
    'NITROGEN_ATOM': { 'PROTON': 7, 'NEUTON': 7 },
    'OXYGEN_ATOM': { 'PROTON': 8, 'NEUTON': 8 },
}