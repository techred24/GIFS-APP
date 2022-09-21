import { getGifs } from '../../src/helpers/getGifs';
describe('Tests on getGifs()', () => {
    test('It must return a gifs array', async () => {
        const gifs = await getGifs('Flubber');

        expect(gifs.length).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    });
});