import React from "react";
import { NavLink } from "react-router-dom";

const Cart = ({cartAllProduct, setCartAllProduct}) => {

    const handleIncrement = (id) => {
        setCartAllProduct((prevCount)=>
            prevCount.map((item)=> item?.id === id ? {...item, count:item?.count+1}:item)
        );
    };

    const handleDecrement = (id) => {
        setCartAllProduct((prevCount)=>
            prevCount.map((item)=> item?.id === id && item.count > 1 ? {...item, count:item?.count-1}:item)
        );
    };

    const handleDeleteItem = (id) => {
        const filteredItem = cartAllProduct?.filter((item)=> item?.id !== id);
        setCartAllProduct(filteredItem);
    };

    const taxAmount = cartAllProduct?.reduce((acc, item)=> acc + item?.price * item?.count, 0) * 0.1;
    const totalAmount = cartAllProduct?.reduce((acc, item)=> acc + item?.price * item?.count, 0) + cartAllProduct?.reduce((acc, item)=> acc + item?.price * item?.count, 0) * 0.1;
    return(
        <div className="container-fluid" style={{marginTop:"80px"}}>
            <div className="row p-3 gap-3">
                {
                    cartAllProduct?.map((product, index)=>{
                        return(
                            <div className="col-8 border rounded d-flex gap-3 ">
                                <div className="p-1">
                                    <img src={product?.img} alt={product?.model} className="cart-product-size"/>
                                </div>
                                <div className="p-1">
                                    <h3 className="text-hiding m-0">{product?.model?.toUpperCase()}</h3>
                                    <p className="m-0 fs-5">
                                        <span className="font-bold">₹</span> {product?.price}
                                    </p>
                                    <p className="m-0 font-size-12 font-bold">{product?.space}</p>
                                    <p className="m-0 font-size-12 font-bold">{product?.camera}</p>
                                    <div className="d-flex gap-3 mt-1">
                                        <p className="m-0 border p-0 px-2 py-1 rounded pointer" onClick={()=>handleDecrement(product?.id)}>-</p>
                                        <p className="m-0 fs-4">{product?.count}</p>
                                        <p className="m-0 border p-0 px-2 py-1 rounded pointer" onClick={()=>handleIncrement(product?.id)}>+</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <p>{product?.description}</p>
                                    <p className="p-2" onClick={()=>handleDeleteItem(product?.id)}><i class="fa-solid fa-trash text-danger pointer"></i></p>
                                </div>
                            </div>
                        )
                    })
                }

                {
                    cartAllProduct.length > 0 && (
                        <div className="col-3 mx-3 border rounded position-fixed end-0">
                            <h3 className="text-center my-3 bg-primary p-1 rounded text-light">Order Summary</h3>
                            <div className="d-flex justify-content-between">
                                <p>Subtotal</p>
                                <p>₹ {cartAllProduct?.reduce((acc, item)=> acc + item?.price * item?.count, 0)}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Tax</p>
                                {/* <p>₹ {cartAllProduct?.reduce((acc, item)=> acc + item?.price * item?.count, 0) * 0.1}</p> */}
                                <p> ₹ {taxAmount.toFixed(2)}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="font-bold text-danger">Total</p>
                                {/* <p className="font-bold text-danger">₹ {cartAllProduct?.reduce((acc, item)=> acc + item?.price * item?.count, 0) + cartAllProduct?.reduce((acc, item)=> acc + item?.price * item?.count, 0) * 0.1}</p> */}
                                <p className="font-bold text-danger">₹ {Math.round(totalAmount)}/-</p>
                            </div>
                            <button className="btn btn-primary w-100 my-3">Checkout</button>
                        </div>
                    )
                }
                {cartAllProduct.length == 0 && (
                    <div className="col-12 ">
                        <h1 className="text-center fs-3 my-5 text-danger"><i class="fa-regular fa-face-frown"></i> No Products Available in Cart <i class="fa-regular fa-face-frown"></i></h1>
                        <div className="d-flex justify-content-center align-items-center">
                            <NavLink to="/" className="list-unstyled text-light pointer text-bg-primary text-decoration-none p-2 rounded shadow font-bold">Shop More</NavLink>
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    )
};

export default Cart;