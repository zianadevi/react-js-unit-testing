import {jsonPlaceholderService} from "./JsonPlaceholderService";
import {productService} from "./ProductService";
import {loginService} from "./LoginService";

export const serviceFactory =
    (apiClient) => {
        return {
            jsonPlaceHolderService: jsonPlaceholderService(apiClient),
            productService: productService(apiClient),
            loginService: loginService(apiClient)
        }
    }