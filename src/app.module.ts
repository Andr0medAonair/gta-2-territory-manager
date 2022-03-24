import { Module } from '@nestjs/common';
import { NeighbourhoodsController } from './neighbourhoods/neighbourhoods.controller';
import { NeighbourhoodsModule } from './neighbourhoods/neighbourhoods.module';
import { NeighbourhoodsService } from './neighbourhoods/neighbourhoods.service';

@Module({
    imports: [NeighbourhoodsModule],
    controllers: [NeighbourhoodsController],
    providers: [NeighbourhoodsService]
})
export class AppModule {}
