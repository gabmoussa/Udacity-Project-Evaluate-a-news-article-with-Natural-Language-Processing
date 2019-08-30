import { urlHandler } from '../src/client/js/urlHandler'

describe('Test "urlHandler()" should exist' , () => {
    test('It should return true', async () => {
        expect(urlHandler).toBeDefined();
    });
});
describe('Test "urlHandler()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof urlHandler).toBe("function");
    });
});