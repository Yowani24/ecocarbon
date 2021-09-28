import React, { useState, createContext } from 'react';

export const CreditList = createContext();

export const CreditProvider = (props) => {
    const [credit, setCredit] = useState([
        {
            id: '1',
            product: 'Carbon Credit',
            price: 120,
            description: 'More details goes here like description'
        },
        {
            id: '2',
            product: 'Carbon Credit',
            price: 120,
            description: 'More details about the product'
        },
        {
            id: '3',
            product: 'Carbon Credit',
            price: 120,
            description: 'More details for the items'
        },
        {
            id: '4',
            product: 'Carbon Credit',
            price: 120,
            description: 'More details to provide about carb cred',
        }

    ]);

    const [cartItems, setCartItems] = useState([]);
    
    const onAdd = (credit) => {
        const exist = cartItems.find((x) => x.id === credit.id);
        if(exist) {
            setCartItems(cartItems.map((x) => x.id === credit.id ? {...exist, quantity: exist.quantity + 1} : x));
        }else{
            setCartItems([...cartItems, {...credit, quantity: 1}])
        }
    }

    const onRemove = (credit) => {
        const exist = cartItems.find((x) => x.id === credit.id);
        if(exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== credit.id));
        }else{
            setCartItems(cartItems.map((x) => x.id === credit.id ? {...exist, quantity: exist.quantity - 1} : x));
        }
    }

    return (
        <CreditList.Provider value={{credits:[credit, setCredit], cartContent:[cartItems, setCartItems], onAdd: onAdd, onRemove:onRemove }}>
            {props.children}
        </CreditList.Provider>
    );
}