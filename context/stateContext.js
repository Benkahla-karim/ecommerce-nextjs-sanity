import product from '@/n/schemas/product';
import React, {useContext, createContext,useEffect,useState} from 'react'
import { toast } from 'react-toastify';

const Context = createContext();

export const StateContext = ({children}) => {
        const [showCart,setShowCart] = useState(false);
        const [cartItems,setCartItems] = useState([]);
        const [totalPrice,setTotalPrice] = useState(0);
        const [totalQuentity,setTotalQuentity] = useState(0);
        const [qty,setQty] = useState(1);

        let foundProduct;
        let index;

        const incQty = ()  => {
            setQty((prevQty) => prevQty +1);
        }
        const decQty = () => {
            setQty((prevQty) => {
                if (prevQty - 1  < 1) return 1;
                return prevQty -1;
            });
        }

        const onAdd = (product,quantity) => {
           
                
                const checkProductInCart = cartItems.find((item) => item._id === product._id)
                setTotalPrice((prevTotalprice) => prevTotalprice  + product.price * quantity);
                setTotalQuentity((prevTotalQty) => prevTotalQty + quantity);
                if (checkProductInCart) {
                    

                    const updateCartItems = cartItems.map((cartProduct) => {

                        if (cartProduct.id === product.id ) return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + quantity
                        }
                    })
                     setCartItems(updateCartItems);
                    
                }else {
                    product.quantity = quantity;
                    setCartItems( [...cartItems,{...product}])
                  
    
                }
                toast.success(`${qty} ${product.name} add to the cart.`)
                   
        }

        const toggleCartItemQuantity = (id,value) => {
            foundProduct = cartItems.find((item) => item._id === id);
            index = cartItems.findIndex((item) => item._id === id);
            if (value === 'inc') {
                    setCartItems([
                        ...cartItems.slice(0,index),
                        {...foundProduct,quantity: foundProduct.quantity + 1},
                        ...cartItems.slice(index + 1)
                    ])
                    setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
                    setTotalQuentity((prevTotalQuentity) => prevTotalQuentity + 1)

            }else if (value === 'dec') {
               if (foundProduct.quantity > 1) {
                setCartItems([
                    ...cartItems.slice(0,index),
                    {...foundProduct,quantity: foundProduct.quantity - 1},
                    ...cartItems.slice(index + 1)
                ])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuentity((prevTotalQuentity) => prevTotalQuentity - 1)

               }
            }
        }

        const onRemove =(product) => {
            foundProduct = cartItems.find((item) => item._id === product._id);
            const newCartItems = cartItems.filter((item) => item._id !== product._id)
            setTotalPrice(((prev) => prev - foundProduct.price * foundProduct.quantity))
            setTotalQuentity((prev) => prev - foundProduct.quantity )
            setCartItems(newCartItems)
        }
     
        return (
            <Context.Provider
             value={{
                cartItems,
                showCart,
                setShowCart,
                totalPrice,
                totalQuentity,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove
             }}
            >
               {children}
            </Context.Provider>
            )
}


export const useStateContext = () => useContext(Context);