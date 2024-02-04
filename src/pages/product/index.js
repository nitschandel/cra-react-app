import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as AuthUtils from '../../utils/auth.js';
import ProductWrapper from './styles/product.style.js';

function Product(props) {
   
    return <ProductWrapper>
        <p>Foo Bar : Product</p>
    </ProductWrapper>
}

export default Product;