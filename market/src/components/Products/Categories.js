import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Categories(){

    let[products,setProducts]=useState([]);

    async function getAllProducts(){
        let allproducts =await axios.get('http://localhost:3000/products');
        setProducts(allproducts.data);
    }
    useEffect(()=>{getAllProducts()},[]);

    
    const filterItems=(cat)=>{
        const newarr = products.filter((item)=>item.name===cat)
        setProducts(newarr);
    }
    useEffect(()=>{filterItems()},[]);
    const onFilter=(cat)=>{
        filterItems(cat)
    }
   
   useEffect(()=>{onFilter()},[]);

   let[searchText,setSearchText]=useState('');
    function handleSearch(event){
        setSearchText(event.target.value);
    }

    
    async function search(){
       let searchresult=await axios.get(`http://localhost:3000/products?q=${searchText}`);
       setProducts(searchresult.data);  
    }
   

    function showProducts(){
        if(products.length >0){
            return(<div className="row" style={{margin:20}}>
                  
                    {products.map((pro)=> <p style={{ margin:30 ,width:200 ,borderBlockColor:"#e0a70f",borderBlockWidth:10}} 
                    className=" card rounded-5 text-center mx-auto mt-5"
                     key={pro.id}> <img style={{height:150,width:150}} src={pro.imageUrl} /><p>{pro.description}</p><p><h6>{pro.price} EGP</h6></p>
                     <p>
                     <div>
                        <Link to={`/categories/details/${pro.id}`} title="Details"><i style={{color:"black"}} className=" bi bi-list-ul"></i></Link>
                        <Link to={`/categories/edit/${pro.id}`} title="Edit"><i style={{color:"black"}} className=" bi bi-pencil-square"></i></Link>
                        <Link to={`/categories/delete/${pro.id}`} title="Delete"><i style={{color:"black"}} className=" bi bi-trash"></i></Link>
                        
                    </div>
                                        
                            
                    </p></p>)};
                    
            </div>)
        }
    }

   
    return(<div>
    
                <p >
                    <button style={{border:"1px #000"}} onClick={()=>getAllProducts()} className="btn mx-2 btn-outline-dark">All</button>
                    <button style={{border:"1px #000"}} onClick={()=>onFilter('meets')}  className="btn mx-2 btn-outline-dark">Meets</button>
                    <button style={{border:"1px #000"}} onClick={()=>onFilter('fruits')} className="btn mx-2 btn-outline-dark">Fruits</button>
                    <button style={{border:"1px #000"}} onClick={()=>onFilter('vegetables')} className="btn mx-2 btn-outline-dark">Vegetables</button>
                    <button style={{border:"1px #000"}} onClick={()=>onFilter('pulses')} className="btn mx-2 btn-outline-dark">Pulses</button>
                </p>
                <Link to='/categories/add' className="btn btn-warning m-2 ">Add New Product</Link>
                <div className="input-group m-3 mx-auto" style={{width:'40%'}}>
                     <input type="text" className="form-control" onClick={handleSearch}/>
                     <button className="btn btn-dark" onClick={search}><i className="bi bi-search"></i></button>

                </div>
           
       {showProducts()}
    </div>)
    
}
export default Categories;