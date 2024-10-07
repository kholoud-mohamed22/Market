import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteProduct(){


    let[product,setProduct]=useState({id:0,name:'',description:'',price:0,imageUrl:''})
    
    let{id}=useParams();

    let navigate=useNavigate();

    async function getProduct(){
        let pro =await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(pro.data); 
    }                     
    useEffect(() =>{getProduct()},[]);

    function deletepro(){
        axios.delete(`http://localhost:3000/products/${product.id}`);
        navigate('/categories');
    }

    return(<div>

            <h1 className="alert alert-danger text-center m-3">Are you sure you want to delete {product.description}?</h1>

            <p style={{ margin:'auto' ,marginTop:25,width:'300' ,borderBlockColor:"#e0a70f",borderBlockWidth:10}} 
        className=" card rounded-5 text-center w-50 p-3 ">
        <p>
        <img style={{height:150,width:150}} src={product.imageUrl} /><p>id: {product.id}</p><p>Category: {product.name}</p><p>Pice: {product.price} EGP</p><p>{product.description}</p></p>
             

        </p>
        <Link to="/categories" className="btn btn-warning m-2"><i class="bi bi-arrow-left"></i></Link>
        <button className="btn btn-danger" onClick={deletepro}>confirm delete</button>

            

    </div>)
}
export default DeleteProduct;