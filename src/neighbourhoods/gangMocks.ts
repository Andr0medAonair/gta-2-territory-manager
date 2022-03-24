import { Gangs } from 'src/gangs.interface';
import { v4 as uuid } from 'uuid';

export const zaibatsuDowntown: Gangs = {
    id: uuid(),
    name: 'Zaibatsu',
    colour: 'Grey',
    car: 'Z-Type',
    boss: 'Uno Carb',
    nicknameForPlayer: 'Gecko',
    tier1Weapons: 'Pistol',
    tier2Weapons: 'Dual Pistol',
    tier3Weapons: 'Rocket Launcher'
};

export const russianMafia: Gangs = {
    id: uuid(),
    name: 'Russian Mafia',
    colour: 'Red',
    car: 'Bulwark',
    boss: 'Jerkov',
    nicknameForPlayer: 'Comrade',
    tier1Weapons: 'Pistol',
    tier2Weapons: 'Molotov Cocktails',
    tier3Weapons: 'Machine Gun'
};
