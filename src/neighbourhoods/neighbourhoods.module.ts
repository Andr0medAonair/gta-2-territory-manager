import { Module } from '@nestjs/common';
import { MyLogger } from '../logger';
import { NeighbourhoodsController } from './neighbourhoods.controller';
import { NeighbourhoodsService } from './neighbourhoods.service';

@Module({
    controllers: [NeighbourhoodsController],
    providers: [NeighbourhoodsService, MyLogger],
    exports: [MyLogger]
})
export class NeighbourhoodsModule {}
