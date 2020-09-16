import React, {useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([{test: 1}, {test2: 2}]);
    return (
        <CartContext.Provider value={cart}>
            {props.children}
        </CartContext.Provider>
    );
}