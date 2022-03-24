import { Injectable } from '@nestjs/common';
import { Neighbourhoods } from '../neighbourhoods.interface';
import { v4 as uuid } from 'uuid';
import { MyLogger } from '../logger';
import CreateNeighbourhoodDto from './dto/create-neighbourhood.dto';
import { Gangs } from 'src/gangs.interface';
import GetNeighbourhoodFilterDto from './dto/get-neighbourhood-filter.dto';

@Injectable()
export class NeighbourhoodsService {
    constructor(private readonly myLogger: MyLogger) {}
    private neighbourhoods = [];

    getNeighbourhoods(): Neighbourhoods[] {
        this.myLogger.log('NeighbourhoodsService', 'getNeighbourhoods');
        return this.neighbourhoods;
    }

    getFilteredNeighbourhoods(
        filterNeighbourhood: GetNeighbourhoodFilterDto
    ): Neighbourhoods[] {
        this.myLogger.log('NeighbourhoodsService', 'getFilteredNeighbourhoods');
        const { district, occupied, gang, search } = filterNeighbourhood;
        let hoods = this.getNeighbourhoods();
        if (district) {
            hoods = hoods.filter((hood) => hood.district === district);
        }
        if (occupied) {
            hoods = hoods.filter((hood) => hood.occupied === occupied);
        }
        if (gang) {
            hoods = hoods.filter((hood) => hood.gang === gang);
        }
        if (search) {
            hoods = hoods.filter((hood) => {
                return hood.name.toLowerCase().includes(search) ? true : false;
            });
        }
        return hoods;
    }

    getNeighbourhoodById(id: string): Neighbourhoods {
        this.myLogger.log('NeighbourhoodsService', 'getNeighbourhoodById');
        return this.neighbourhoods.find((hood) => hood.id == id);
    }

    createNeighbourhood(
        createNeighbourhoodDto: CreateNeighbourhoodDto
    ): Neighbourhoods {
        this.myLogger.log(
            'NeighbourhoodsService',
            'createNeghbourhood',
            createNeighbourhoodDto
        );
        try {
            const { name, district, occupied, gang } = createNeighbourhoodDto;
            const hood: Neighbourhoods = {
                id: uuid(),
                name,
                district,
                occupied,
                gang
            };
            this.neighbourhoods.push(hood);
            return hood;
        } catch (error) {
            throw error('Error: Neighbourhood not created');
        }
    }

    deleteNeighbourhood(id: string): string {
        this.myLogger.log('NeighbourhoodsService', 'deleteNeighbourhood');
        this.neighbourhoods = this.neighbourhoods.filter(
            (hood) => hood.id !== id
        );
        return 'Neighbourhood deleted!';
    }

    updateNeighbourhood(
        id: string,
        occupied: boolean,
        gang?: Gangs
    ): Neighbourhoods {
        this.myLogger.log('NeighbourhoodsService', 'updateNeighbourhood');
        const hood = this.getNeighbourhoodById(id);
        hood.occupied = occupied;
        hood.gang = gang;
        return hood;
    }
}
