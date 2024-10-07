import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditProduct(){

    let[product,setProduct]=useState({name:'',description:'',price:0,imageUrl:''});
    let{id}=useParams();
    async function getProduct(){
        let pro =await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(pro.data); 
    }                     
    useEffect(() =>{getProduct()},[]);

    let navigate=useNavigate();

    function handleChange(event){
        setProduct({...product,[event.target.name]:event.target.value});
    }
    function handleSubmit(){
        axios.put(`http://localhost:3000/products/${id}`,product);
        navigate("/categories")
    }

    return(<div>
        <h1 className="alert text-center m-3">Edit Product</h1>
        <form className="col-4" onSubmit={handleSubmit}>
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Name</label>
                <input type="text" name="name" value={product.name} className="form-control" onChange={handleChange}/>
            </div>
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Description</label>
                <input type="text" name="description" value={product.description} className="form-control alert-warning" onChange={handleChange}/>
            </div >
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Price</label>
                <input type="number" name="price" value={product.price} className="form-control" onChange={handleChange}/>
            </div>
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Image</label>
                <input type="text" name="imageUrl" value={product.imageUrl} className="form-control" onChange={handleChange}/>
            </div>
            <Link to="/categories" className="btn btn-warning m-2"><i class="bi bi-arrow-left"></i></Link>
            <button type="submit" className="btn btn-warning m-2">Edit</button>
            
        </form>


    </div>)
}
export default EditProduct;