import { Test, TestingModule } from '@nestjs/testing';
import { zaibatsuDowntown } from '../../src/neighbourhoods/gangMocks';
import {
    altamount,
    mockNeghbourhoods,
    pravda,
    pravdaRequest
} from '../../src/neighbourhoods/hoodMocks';
import { MyLogger } from '../../src/logger';
import { NeighbourhoodsController } from '../../src/neighbourhoods//neighbourhoods.controller';
import { NeighbourhoodsModule } from '../../src/neighbourhoods//neighbourhoods.module';
import { NeighbourhoodsService } from '../../src/neighbourhoods/neighbourhoods.service';

describe('NeighbourhoodsController', () => {
    let controller: NeighbourhoodsController;
    const id = 'mockId';

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [NeighbourhoodsModule],
            controllers: [NeighbourhoodsController],
            providers: [NeighbourhoodsService, MyLogger]
        }).compile();

        controller = module.get<NeighbourhoodsController>(
            NeighbourhoodsController
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return valid response for getNeighbourhoods', () => {
        jest.spyOn(
            NeighbourhoodsService.prototype,
            'getNeighbourhoods'
        ).mockReturnValueOnce(mockNeghbourhoods);
        expect(controller.getNeighbourhoods({})).toEqual(mockNeghbourhoods);
    });

    it('should return valid response for getNeighbourhoodById', () => {
        jest.spyOn(
            NeighbourhoodsService.prototype,
            'getNeighbourhoodById'
        ).mockReturnValueOnce(altamount);
        expect(controller.getNeighbourhoodById(id)).toEqual(altamount);
    });

    it('should return valid response for createNeighbourhood', () => {
        jest.spyOn(
            NeighbourhoodsService.prototype,
            'createNeighbourhood'
        ).mockReturnValueOnce(pravda);
        expect(controller.createNeighbourhood(pravdaRequest)).toEqual(pravda);
    });

    it('should return valid response for deleteNeighbourhood', () => {
        const message = 'Neighbourhood deleted!';
        jest.spyOn(
            NeighbourhoodsService.prototype,
            'deleteNeighbourhood'
        ).mockReturnValueOnce(message);
        expect(controller.deleteNeighbourhood('mockId')).toEqual(message);
    });

    it('should return valid response for updateNeighbourhood', () => {
        altamount.occupied = true;
        altamount.gang = zaibatsuDowntown;
        jest.spyOn(
            NeighbourhoodsService.prototype,
            'updateNeighbourhood'
        ).mockReturnValueOnce(altamount);
        expect(
            controller.updateNeighbourhood('mockId', true, zaibatsuDowntown)
        ).toEqual(altamount);
    });
});
