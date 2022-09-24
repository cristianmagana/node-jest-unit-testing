import {Utils} from '../../app/Utils/Utils';
import { IncomingMessage } from 'http';

describe('Utils test suite', () => {
    test('getRequestPath valid request', ()=> {
        const url = 'http://localhost:8080/login';

        /** We would require to fill 45 props in to create message IncomingMessage type.
                This is where we stub the IncomingMessage type

        const message: IncomingMessage = {};
        */

       // Stubbed IncomingMessage
        const request = {
            url: 'http://localhost:8080/login',
        } as IncomingMessage;
        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBe('login');
    })

    test('getRequestPath with no path name', ()=> {
        const url = 'http://localhost:8080/login';

       // Stubbed IncomingMessage
        const request = {
            url: 'http://localhost:8080/',
        } as IncomingMessage;
        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBeFalsy();
    })
})