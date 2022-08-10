import {jsonPlaceholderService} from "./JsonPlaceholderService";
import {productService} from "./ProductService";

export const serviceFactory =
    (apiClient) => {
        return {
            jsonPlaceHolderService: jsonPlaceholderService(apiClient),
            productService: productService(apiClient)
        }
    }