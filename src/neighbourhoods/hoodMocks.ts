import { Neighbourhoods, Districts } from '../neighbourhoods.interface';
import { v4 as uuid } from 'uuid';
import { russianMafia, zaibatsuDowntown } from './gangMocks';
import CreateNeighbourhoodDto from './dto/create-neighbourhood.dto';

export const lattero: Neighbourhoods = {
    id: uuid(),
    name: 'Lattero',
    district: Districts.INDUSTRIAL_DISTRICT,
    occupied: true,
    gang: zaibatsuDowntown
};

export const gonad: Neighbourhoods = {
    id: uuid(),
    name: 'Gonad',
    district: Districts.INDUSTRIAL_DISTRICT,
    occupied: false,
};

export const pravdaRequest: CreateNeighbourhoodDto = {
    name: 'Pravda',
    district: Districts.INDUSTRIAL_DISTRICT,
    occupied: true,
    gang: russianMafia
};

export const pravda: Neighbourhoods = {
    id: 'c30e9898-2210-4ad2-a637-858aaa62c8ab',
    name: 'Pravda',
    district: Districts.INDUSTRIAL_DISTRICT,
    occupied: true,
    gang: russianMafia
};

export const pravdaResponseDto: Neighbourhoods = {
    id: uuid,
    name: 'Pravda',
    district: Districts.INDUSTRIAL_DISTRICT,
    occupied: true,
    gang: russianMafia
};

export const altamount: Neighbourhoods = {
    id: 'mockId',
    name: 'Altamount',
    district: Districts.DOWNTOWN_DISTRICT,
    occupied: false
};

export const altamountRequest: CreateNeighbourhoodDto = {
    name: 'Altamount',
    district: Districts.DOWNTOWN_DISTRICT,
    occupied: false
};

export const altamountOccupied: Neighbourhoods = {
    id: 'mockId',
    name: 'Altamount',
    district: Districts.DOWNTOWN_DISTRICT,
    occupied: true,
    gang: zaibatsuDowntown
};

export const mockNeghbourhoods: Neighbourhoods[] = [lattero, gonad];
