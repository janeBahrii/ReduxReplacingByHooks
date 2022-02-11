import React, { useState } from 'react'

const initualValue = [
    {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
    },
    {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
    },
    {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
    },
    {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
    }
];
type ProductsType = typeof initualValue;

export const ProductContext = React.createContext<{ products: ProductsType }>({ products: [] });

interface Props {

}
const ProductProvider: React.FunctionComponent<Props> = (props) => {
    const [productState, setProductState] = useState(initualValue);
    return (
        <ProductContext.Provider value={{ products: productState }}>
            {props.children}
        </ProductContext.Provider >

    )
}
export default ProductProvider;

