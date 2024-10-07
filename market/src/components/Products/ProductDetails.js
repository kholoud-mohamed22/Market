import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails(){

    
    let[product,setProduct]=useState({id:0,name:'',description:'',price:0,imageUrl:''})
    
    let{id}=useParams();
    async function getProduct(){
        let pro =await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(pro.data); 
    }                     
    useEffect(() =>{getProduct()},[]);

    
    return(<div>
         <p style={{ margin:'auto' ,marginTop:25,width:'300' ,borderBlockColor:"#e0a70f",borderBlockWidth:10}} 
        className=" card rounded-5 text-center w-50 p-3 ">
        <p>
        <img style={{height:150,width:150}} src={product.imageUrl} /><p>Category: {product.name}</p><p>Price: {product.price} EGP</p><p>Description: {product.description}</p></p>
             

        </p>
        <Link to="/categories" className="btn btn-warning m-2"><i class="bi bi-arrow-left"></i></Link>
    </div>)
}
export default ProductDetails;
