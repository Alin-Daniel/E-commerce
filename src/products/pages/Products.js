import React, {useState} from 'react';

import ProductsList from '../components/ProductsList';
import DUMMY_PRODUCTS from '../../shared/DUMMY_PRODUCTS';
import './Products.scss';

const Products = props => {
    const [products, setProducts] = useState(DUMMY_PRODUCTS);
    return <ProductsList products={products}/>;
};

export default Products;