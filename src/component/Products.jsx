import React, {useEffect, useState} from "react";
import productList from "./data";
import toast, { Toaster } from "react-hot-toast";
import { use } from "react";

// 
const Products = ({setProductId}) => {
    const [items, setItems] = useState(productList);
// 

    useEffect(() => {
                document.title = "Products";
    }, []);

    const handleAddToCart = (id) => {
        setProductId(id);
        toast.success("Product Added to Cart");
    }

// 
    const filterItems = () => { 
                const updateItems = productList.filter((curItem) =>{
                    return curItem.category === "curItem";
                } );
                setItems(updateItems);
            }
// 
    return(
        <div className="container-fluid " style={{marginTop:"80px"}}>
            {/*  */}
            <div className="px-5 py-3 d-flex justify-content-between align-items-center">
                <h1>All Products</h1>
                <button type="button" className="btn btn-danger me-3" onClick={()=>setItems(productList)}>All Products</button>
                <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("Mobile")}>Mobiles</button>
                <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("Laptops")}>Laptops</button>
                <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("Gadgets")}>Gadgets</button>
                <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("Fashion")}>Fashion</button>
            </div>
            <hr />
            {/*  */}
            <div className="row gap-4 justify-content-center">
                <Toaster />
                {
                    productList?.map((product, index)=>{
                        return(
                            <div className="col-md-2 col-sm-4 md-4 shadow border rounded my-2" key={product?.id}>
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <img src={product?.img} alt="" className="product-size"/>
                                </div>
                                <div className="py-2">
                                    <div className="d-flex justify-content-between px-2">
                                        <p className="m-0 font-bold font-size-12">{product?.brand}</p>
                                        <p className="m-0 font-bold font-size-12">{product?.model}</p>
                                    </div>
                                    <div className="px-2">
                                        <p className="m-0 bg-warning text-dark border rounded p-1 d-inline-block my-1"><span className="font-bold">₹</span> {product?.price}</p>
                                        <p className="m-0 text-hiding"> {product?.space}</p>
                                    </div>
                                    <div className="px-2">
                                        <button className="btn btn-primary p-1 w-100" onClick={()=>handleAddToCart(product?.id)}><i class="fa-solid fa-cart-plus"></i> Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
};



export default Products;


// export default function Products({setProductId}) {
//     const [items, setItems] = useState(productList);

//     useEffect(() => {
//         document.title = "Products";
//     }, []);

//     const filterItems = () => { 
//         const updateItems = productList.filter((curItem) =>{
//             return curItem.category === "curItem";
//         } );
//         setItems(updateItems);
//     }
//     return(
//         <div className="container-fluid " style={{marginTop:"80px"}}>
//         <h1>All Products</h1>
//         <button type="button" className="btn btn-danger me-3" onClick={()=>setItems(productList)}>All Products</button>
//         <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("Mobile")}>Mobiles</button>
//         <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("")}>Laptops</button>
//         <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("")}>Gadgets</button>
//         <button type="button" className="btn btn-danger me-3" onClick={()=>filterItems("")}>Fashion</button>
        
//         <hr />
//         <div className="row gap-4 justify-content-center">
//         <Toaster />
//         {
//                             productList?.map((product, index)=>{
//                                 return(
//                                     <div className="col-md-2 col-sm-4 md-4 shadow border rounded my-2" key={product?.id}>
//                                         <div className="d-flex justify-content-between align-items-center p-2">
//                                             <img src={product?.img} alt="" className="product-size"/>
//                                         </div>
//                                         <div className="py-2">
//                                             <div className="d-flex justify-content-between px-2">
//                                                 <p className="m-0 font-bold font-size-12">{product?.brand}</p>
//                                                 <p className="m-0 font-bold font-size-12">{product?.model}</p>
//                                             </div>
//                                             <div className="px-2">
//                                                 <p className="m-0 bg-warning text-dark border rounded p-1 d-inline-block my-1"><span className="font-bold">₹</span> {product?.price}</p>
//                                                 <p className="m-0 text-hiding"> {product?.space}</p>
//                                             </div>
//                                             <div className="px-2">
//                                                 <button className="btn btn-primary p-1 w-100" onClick={()=>handleAddToCart(product?.id)}><i class="fa-solid fa-cart-plus"></i> Add To Cart</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }
                        
//                     </div>
//                 </div>
//             );
//     }