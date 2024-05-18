import { houseOfCats } from './houseOfCats';

xdescribe(houseOfCats.name, () => {
    it('Test 1', () => {
        // arrange
        const legs = 6;

        // act
        const response = houseOfCats(legs);

        // assert 
        expect(response).toEqual([1, 3]);
    });

    it('Test 2', () => {
        // arrange
        const legs = 2;

        // act
        const response = houseOfCats(legs);

        // assert 
        expect(response).toEqual([1]);
    });

    it('Test 3', () => {
        // arrange
        const legs = 12;

        // act
        const response = houseOfCats(legs);

        // assert 
        expect(response).toEqual([2, 4, 6]);
    });
});
