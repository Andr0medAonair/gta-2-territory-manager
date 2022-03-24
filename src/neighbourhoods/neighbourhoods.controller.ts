import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query
} from '@nestjs/common';
import { NeighbourhoodsService } from './neighbourhoods.service';
import { Neighbourhoods } from '../neighbourhoods.interface';
import { MyLogger } from '../logger';
import CreateNeighbourhoodDto from './dto/create-neighbourhood.dto';
import { Gangs } from 'src/gangs.interface';
import GetNeighbourhoodFilterDto from './dto/get-neighbourhood-filter.dto';

@Controller('neighbourhoods')
export class NeighbourhoodsController {
    constructor(
        private readonly neighbourhoodsService: NeighbourhoodsService,
        private readonly myLogger: MyLogger
    ) {}

    @Get()
    getNeighbourhoods(
        @Query() filterNeighbourhoodDto: GetNeighbourhoodFilterDto
    ): Neighbourhoods[] {
        if (Object.keys(filterNeighbourhoodDto).length) {
            this.myLogger.log(
                'NeighbourhoodsController',
                'getFilteredNeighbourhoods'
            );
            return this.neighbourhoodsService.getFilteredNeighbourhoods(
                filterNeighbourhoodDto
            );
        } else {
            this.myLogger.log('NeighbourhoodsController', 'getNeighbourhoods');
            return this.neighbourhoodsService.getNeighbourhoods();
        }
    }

    @Get('/:id')
    getNeighbourhoodById(@Param('id') id: string): Neighbourhoods {
        this.myLogger.log(
            'NeighbourhoodsController',
            'getNeighbourhoodById',
            id
        );

        return this.neighbourhoodsService.getNeighbourhoodById(id);
    }

    @Post()
    createNeighbourhood(
        @Body() createNeighbourhoodDto: CreateNeighbourhoodDto
    ): Neighbourhoods {
        this.myLogger.log(
            'NeighbourhoodsController',
            'createNeighbourhood',
            createNeighbourhoodDto
        );
        try {
            return this.neighbourhoodsService.createNeighbourhood(
                createNeighbourhoodDto
            );
        } catch (error) {
            throw error('Error: Neighbourhood not created');
        }
    }

    @Delete('/:id')
    deleteNeighbourhood(@Param('id') id: string): string {
        this.myLogger.log(
            'NeighbourhoodsController',
            'deleteNeighbourhood',
            id
        );

        return this.neighbourhoodsService.deleteNeighbourhood(id);
    }

    @Patch('/:id/:occupied')
    updateNeighbourhood(
        @Param('id') id: string,
        @Param('occupied') occupied: boolean,
        @Body('gang') gang?: Gangs
    ): Neighbourhoods {
        this.myLogger.log(
            'NeighbourhoodsController',
            'updateNeighbourhood',
            id
        );

        return this.neighbourhoodsService.updateNeighbourhood(
            id,
            occupied,
            gang
        );
    }
}
