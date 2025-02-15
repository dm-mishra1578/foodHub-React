import React, { createContext, useContext, useReducer, useState } from 'react';

const CartStateContext = createContext();

const CartDispatchContext = createContext();

const LoadedContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, { id: action.id, name: action.name, price: action.price, size: action.size, qty: action.qty, img: action.img }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr
        default:
            console.log("Error in Reducer");
    }
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])
    const [loaded, setLoaded] = useState(false);

    return (

        <CartDispatchContext.Provider value={dispatch}>

            <CartStateContext.Provider value={state}>
             <LoadedContext.Provider value={{loaded, setLoaded}}>
                {children}
                </LoadedContext.Provider>
            </CartStateContext.Provider>

        </CartDispatchContext.Provider>
    )

}

export const useCart = () => useContext(CartStateContext);
export const useloading =()=>useContext(LoadedContext);
export const useDispatchCart = () => useContext(CartDispatchContext);