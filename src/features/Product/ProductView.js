import React from 'react';
import {useProduct} from "./UseProduct";

const ProductView = () => {
    const {viewState} = useProduct();
    return (
        <div>
            {viewState.isLoading && <div>Loading</div>}
            <ul>
                {viewState.data ? viewState.data.map((product) => {
                    return <li key={product.id}>
                        <div>{product.productName}</div>
                        <div>{product.productInfo}</div>
                    </li>
                }) : <div></div>}
            </ul>
        </div>
    );
};

export default ProductView;
