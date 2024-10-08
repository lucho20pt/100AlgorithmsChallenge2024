import { reverseAString } from './reverseAString';

describe(reverseAString.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'hello';

        // act
        const response = reverseAString(inputString);

        // assert 
        expect(response).toBe('olleh');
    });

    it('Test 2', () => {
        // arrange
        const inputString = 'Howdy';

        // act
        const response = reverseAString(inputString);

        // assert 
        expect(response).toBe('ydwoH');
    });
});
