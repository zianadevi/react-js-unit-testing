import useViewState from "../../shared/hook/UseViewState";
import {useEffect} from "react";
import {useDependency} from "../../shared/hook/UseDependency";

export const useProduct = () => {
    const {viewState, setLoading, setData, setError} = useViewState();
    const {productService} = useDependency();

    useEffect(() => {
        onGetAllProduct();
    }, []);

    const onGetAllProduct = async () => {
        setLoading();
        try {
            const response = await productService.getAllProduct();
            setData(response.products)
        } catch (e) {
            setError('Please input your user name and password')
        }
    }
    return {
        viewState
    }
}
