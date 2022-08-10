export const apiClientFactory = (client) => {
    const doPost = async ({url = '', data = null}) => {
        try {
            const response = await client.post(url, data);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const doGet = async ({url = ''}) => {
        try {
            const response = await client.get(url);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    return {doPost, doGet}
}
