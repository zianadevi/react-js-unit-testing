export const jsonPlaceholderService = ({doGet, doPost}) => {

    const getPostById = async (id) => {
        try {
            return await doGet({url: '/posts/' + id});
        } catch (e) {
            throw  e;
        }
    }

    const createPost = async (newPost) => {
        try {
            return await doPost({
                url: '/posts', data: newPost
            })
        } catch (e) {
            throw  e;
        }
    }
    return {getPostById, createPost}
}

