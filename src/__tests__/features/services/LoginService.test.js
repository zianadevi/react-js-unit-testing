import {loginService} from '../../../services/LoginService';
import { SERVICE } from '../../../shared/constants';

describe('Login Service', () => {
    let client;
    const mockDoPost = jest.fn();
    const mocDoGet = jest.fn();
    beforeAll(() => {
        const mockClient = jest.fn().mockReturnValue({
            doPost : mockDoPost,
            doGet : mocDoGet
        })
        client = mockClient()
    })
    test('Success Authenticate', async () => {
        mockDoPost.mockResolvedValue('success');
        const service = loginService(client)
        const response = await service.doAuthenticate({
            userName : 'dummyUser', password: 'dummyPassword'
        });
        expect(mockDoPost).toHaveBeenCalledWith({
            url: SERVICE.LOGIN, data : {
                userName : 'dummyUser', password: 'dummyPassword'
            }
        })
        expect(response).toBe('success')
    });

    test('Failed Authenticate', async () => {
        mockDoPost.mockRejectedValue(new Error('error'));
        const service = loginService(client)
        await expect(service.doAuthenticate({})).rejects.toThrow('error')
    })
})