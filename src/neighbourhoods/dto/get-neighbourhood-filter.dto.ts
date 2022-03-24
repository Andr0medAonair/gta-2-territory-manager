import { Gangs } from 'src/gangs.interface';
import { Districts } from 'src/neighbourhoods.interface';

export default class GetNeighbourhoodFilterDto {
    district?: Districts;
    occupied?: boolean;
    gang?: Gangs;
    search?: string;
}
