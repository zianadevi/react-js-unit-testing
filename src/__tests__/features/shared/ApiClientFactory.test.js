import {apiClientFactory} from '../../../shared/ApiClientFactory';

describe('Api Client Factory', () => {
    let client;
    const mockPost = jest.fn();
    const mockGet = jest.fn();
    beforeAll(() => {
        const mockClient = jest.fn().mockReturnValue({
            get : mockGet,
            post : mockPost
        })
        client = apiClientFactory(mockClient())
    })

    test('Success doPost', async () => {
        mockPost.mockResolvedValue({data : true})
        const response = await client.doPost({url: 'dummyUrl', data:'dummyData'});
        expect(mockPost).toHaveBeenCalledWith('dummyUrl', 'dummyData')
        expect(response).toBeTruthy();
    });

    test('Failed doPost', async () => {
        mockPost.mockRejectedValue(new Error('error'))
        await expect(client.doPost({})).rejects.toThrow('error')
    })
})