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

export const ProductContext = React.createContext<{ products: ProductsType, toggleFavorite: (id: string) => void }>({ products: [], toggleFavorite: (id: string) => { } });

interface Props {

}
const ProductProvider: React.FunctionComponent<Props> = (props) => {
    const [productList, setProductList] = useState(initualValue);
    const toggleFavorite = (productId: string) => {
        setProductList(prevPrList => {
            const prodIndex = prevPrList.findIndex(
                p => p.id === productId
            );
            const newFavStatus = !prevPrList[prodIndex].isFavorite;
            const updatedProducts = [...prevPrList];
            updatedProducts[prodIndex] = {
                ...prevPrList[prodIndex],
                isFavorite: newFavStatus
            };
            return updatedProducts;
        })



    }
    return (
        <ProductContext.Provider value={{ products: productList, toggleFavorite }}>
            {props.children}
        </ProductContext.Provider >

    )
}
export default ProductProvider;

