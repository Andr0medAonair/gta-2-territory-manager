import { Gangs } from './gangs.interface';

export interface Neighbourhoods {
    id: string;
    name: string;
    district: Districts;
    occupied: boolean;
    gang?: Gangs;
}

export enum Districts {
    DOWNTOWN_DISTRICT = 'Downtown District',
    RESIDENTIAL_DISTRICT = 'Residential District',
    INDUSTRIAL_DISTRICT = 'Industrial District'
}
