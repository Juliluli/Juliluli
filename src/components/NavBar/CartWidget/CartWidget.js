import React from 'react'
import cart from './cart.png'
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} className="cart-widget" alt="cart" />
        </div>
    )
}

export default CartWidget