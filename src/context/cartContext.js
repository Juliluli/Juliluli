import { createContext , useState} from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])
    
    function addItem(item) {

        const index = cartList.findIndex(i => i.id ===item.id)

        if (index > -1) {
            const oldQy = cartList[index].cantidad

            cartList.splice(index, 1)

            setCartList([...cartList, {...item, cantidad: item.cantidad + oldQy}])
        } else {
            setCartList([...cartList, item])
        }
    }

    function clearCarrito() {
        setCartList([])
    }

    function removeItem(id) {

        setCartList(cartList.filter((producto)=>producto.id!==id))
    }


    const precioTotal =()=> {
        return cartList.reduce((total, item)=> total + (item.price*item.cantidad),0)
    }


    return (
        <div>
            <CartContext.Provider value={{cartList, addItem, removeItem, clearCarrito,precioTotal}}>
                {children}
            </CartContext.Provider>
            
        </div>
    )
}

export default CartContextProvider
