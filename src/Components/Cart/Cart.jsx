import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>add some product</p>
    }
    else{
        message = <div>
            <p>you are borolok</p>
            <p><small>Thaks for wasting</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1? 'blue' : 'red'}>order summary: {cart.length}</h2>
            {cart.length > 2 ? <span className='purple'> Aro kino </span>: <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                <button onClick={() =>handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length == 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta hoyni</h3>
            }
        </div>
    );
};

export default Cart;

//conditional rendering
// use if else
//ternary operator : condition ?
//logical &&
//logical ||