export const productService = ({doGet}) => {

    const getAllProduct = async () => {
        try {
            return await doGet({url: '/product'});
        } catch (e) {
            throw new Error(e);
        }
    }

    return {getAllProduct}
}

