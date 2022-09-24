import {Utils} from '../app/Utils'
import { parse } from 'url';


describe('Utils test suite', () => {

    beforeEach(() => {
        console.log('before each');
    })

    beforeAll(() => {
        console.log('before all');
    })

    test.skip('First test', () => {
        const result = Utils.toUpperCase('abc');  
        expect(result).toBe('ABC');
    })

    test('test url parsing', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        // toBe to test primitive values 
        expect(parsedUrl.href).toBe('http://localhost:8080/login');
        expect(parsedUrl.port).toBe('8080');
        expect(parsedUrl.protocol).toBe('http:');
        // toEqual to test objects
        expect(parsedUrl.query).toEqual({});
    })

    test('test URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery);
        expect(expectedQuery).toBe(expectedQuery);
    })

    test.only('Test URL validity', () => {
        function expectError(){
            Utils.parseUrl('')
        }
        expect(expectError).toThrowError();
    })

    test('Test wrapping in try catch', () => {
        try {
            Utils.parseUrl('');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message' , 'Empty Url')
        }
    })
})