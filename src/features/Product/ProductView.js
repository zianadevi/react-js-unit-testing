import React, {useEffect, useState} from 'react';
import {useDeps} from "../../shared/DepContext";
import {useProduct} from "./UseProduct";

const ProductView = () => {
    const {productService} = useDeps();
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        onGetAllProduct();
    }, []);

    const onGetAllProduct = async () => {
        setLoading(true);
        try {
            const response = await productService.getAllProduct();
            setProducts(response.products)
        } catch (e) {
            alert('Ooopss...');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            {isLoading && <div>Loading</div>}
            <ul>
                {products.map((product) => {
                    return <li key={product.id}>
                        <div>{product.productName}</div>
                        <div>{product.productInfo}</div>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default ProductView;
