import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddProduct(){


    let product={name:'',description:'',price:0,imageUrl:''};

    let navigate=useNavigate();

    function handleChange(event){
        product[event.target.name]=event.target.value;
    }
    function handleSubmit(){
        axios.post('http://localhost:3000/products',product);
        navigate("/categories")
    }

    return(<div className=" mx-auto">
        <h1 className="alert text-center m-3">Add New Product</h1>
        <form className="col-4 mx-auto" onSubmit={handleSubmit}>
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Name</label>
                <input type="text" name="name" className="form-control" onChange={handleChange}/>
            </div>
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Description</label>
                <input type="text" name="description" className="form-control alert-warning" onChange={handleChange}/>
            </div >
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Price</label>
                <input type="number" name="price" className="form-control" onChange={handleChange}/>
            </div>
            <div style={{margin:30}}>
                <label className="form-label" style={{float:"left"}}>Image</label>
                <input type="text" name="imageUrl" className="form-control" onChange={handleChange}/>
            </div>
            <Link to="/categories" className="btn btn-warning m-2"><i class="bi bi-arrow-left"></i></Link>
            <button type="submit" className="btn btn-warning m-2">Add</button>
            
        </form>

    </div>)
}
export default AddProduct;