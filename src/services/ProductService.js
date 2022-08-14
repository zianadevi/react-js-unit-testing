import {SERVICE} from "../shared/constants";

export const productService = ({doGet}) => {

    const getAllProduct = async () => {
        try {
            return await doGet({url: SERVICE.PRODUCT});
        } catch (e) {
            throw e;
        }
    }

    return {getAllProduct}
}

