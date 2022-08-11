export const loginService = ({doPost, doGet}) => {
    const doAuthenticate = async (userCred) => {
        try {
            return await doPost({
                url: '/login', data: {
                    userName: userCred.userName,
                    password: userCred.password
                }
            })
        } catch (e) {
            throw e;
        }
    }
    const doGetUser = async () => {
        try {
            return await doGet({
                url: '/user-info'
            })
        } catch (e) {
            throw e;
        }
    }
    return {
        doAuthenticate, doGetUser
    }
}