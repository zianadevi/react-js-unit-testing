import {jsonPlaceholderService} from "./JsonPlaceholderService";

export const serviceFactory =
    (apiClient) => {
        return {
            jsonPlaceHolderService: jsonPlaceholderService(apiClient)
        }
    }