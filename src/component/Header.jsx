import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({cartAllProduct}) => {

    return (
        <div className="container-fluid position-fixed top-0 ">
            <div className="row">
                <div className="col-12 bg-primary d-flex justify-content-between align-items-center px-5">
                    <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3">
                        <NavLink to="/" className="list-unstyled text-light p-0 pointer text-decoration-none font-bold">HOME</NavLink>
                        <NavLink to="/products" className="list-unstyled text-light p-0 pointer text-decoration-none font-bold">PRODUCTS</NavLink>
                        <NavLink to="/about" className="list-unstyled text-light p-0 pointer text-decoration-none font-bold">ABOUT</NavLink>
                        <NavLink to="/contact" className="list-unstyled text-light p-0 pointer text-decoration-none font-bold">CONTACT</NavLink>
                    </ul>
                    <ul className="m-0 p-0 py-3 position-relative">
                        <NavLink to="/cart" className="list-unstyled text-light p-0 pointer"><i class="fa-solid fa-cart-shopping fs-3"></i>
                            <span className="text-decoration-none count text-dark rounded-pill position-absolute top-0 right mt-1" 
                            style={{backgroundColor:'orange', right:'-45%'}}> {cartAllProduct?.length} </span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default Header;