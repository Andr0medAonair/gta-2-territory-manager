import { Test, TestingModule } from '@nestjs/testing';
import {
    pravdaRequest,
    pravda,
    altamountRequest,
    altamount
} from '../../src/neighbourhoods/hoodMocks';
import { MyLogger } from '../../src/logger';
import { NeighbourhoodsService } from '../../src/neighbourhoods/neighbourhoods.service';

jest.mock('uuid', () => ({ v4: () => 'c30e9898-2210-4ad2-a637-858aaa62c8ab' }));

describe('NeighbourhoodsService', () => {
    let service: NeighbourhoodsService;
    const mockId = 'c30e9898-2210-4ad2-a637-858aaa62c8ab';

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [NeighbourhoodsService, MyLogger]
        }).compile();

        service = module.get<NeighbourhoodsService>(NeighbourhoodsService);
        service.createNeighbourhood(pravdaRequest);
    });

    afterEach(async () => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return valid response for getNeighbourhoods', () => {
        const result = service.getNeighbourhoods().shift();
        expect(result.name).toEqual(pravda.name);
        expect(result.district).toEqual(pravda.district);
        expect(result.occupied).toEqual(pravda.occupied);
        expect(result.gang).toEqual(pravda.gang);
    });

    it('should return valid response for getFilteredNeighbourhoods with occupied true', () => {
        const result = service
            .getFilteredNeighbourhoods({
                occupied: true
            })
            .shift();
        expect(result.name).toEqual(pravda.name);
        expect(result.district).toEqual(pravda.district);
        expect(result.occupied).toEqual(pravda.occupied);
        expect(result.gang).toEqual(pravda.gang);
    });

    it('should return valid response for createNeighbourhood', () => {
        const result = service.createNeighbourhood(pravdaRequest);
        expect(result.name).toEqual(pravda.name);
        expect(result.district).toEqual(pravda.district);
        expect(result.occupied).toEqual(pravda.occupied);
        expect(result.gang).toEqual(pravda.gang);
    });

    it('should return valid response for getNeighbourhoodById', () => {
        expect(service.getNeighbourhoodById(mockId)).toEqual(pravda);
    });

    it('should return valid response for deleteNeighbourhood', () => {
        expect(service.deleteNeighbourhood(mockId)).toEqual(
            'Neighbourhood deleted!'
        );
    });

    it('should return valid response for updateNeighbourhood', () => {
        pravda.occupied = false;
        pravda.gang = null;
        expect(service.updateNeighbourhood(mockId, false, null)).toEqual(
            pravda
        );
    });
});
