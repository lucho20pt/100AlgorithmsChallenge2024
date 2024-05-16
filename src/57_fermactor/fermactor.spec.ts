import { fermactor } from './fermactor';

describe(fermactor.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 15;

        // act
        const response = fermactor(n);

        // assert 
        expect(response).toEqual([4, 1]);
    });

    it('Test 2', () => {
        // arrange
        const n = 21;

        // act
        const response = fermactor(n);

        // assert 
        expect(response).toEqual([5, 2]);
    });

    it('Test 3', () => {
        // arrange
        const n = 157;

        // act
        const response = fermactor(n);

        // assert 
        expect(response).toEqual([79, 78]);
    });
});
