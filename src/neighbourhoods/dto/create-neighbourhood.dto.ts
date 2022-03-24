import { Gangs } from 'src/gangs.interface';
import { Districts } from 'src/neighbourhoods.interface';

export default class CreateNeighbourhoodDto {
    name: string;
    district: Districts;
    occupied: boolean;
    gang?: Gangs;
}
