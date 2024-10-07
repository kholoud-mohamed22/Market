
function ContactUs(){
    return (<div className="rounded-5" style={{backgroundColor:'#fffefb',width:'90%',height:'100%',margin:'auto'}}>
         <div style={{margin:20,marginTop:30,textDecorationLine:'underline',textDecorationStyle:'solid',textDecorationColor:'#e0a70f' }}><h2>Contact Us</h2></div>
    <div className="row" >   

    <div className="card rounded-5 text-center mx-auto mt-5"style={{ margin:20 ,width: 600,borderBlockColor:"#e0a70f",borderBlockWidth:10 }}>
    <div className="card-body m-3 ">
      <h4><i class="bi bi-geo-alt"></i></h4>
      <h5 className="card-title">Adress</h5>
      <p className="card-text">Head Office Building - Ring Road - Mearaj City.</p>
 
    </div>
    </div>
    
    <div className="card rounded-5 text-center mx-auto mt-5 "style={{ margin:30 ,width: 600 ,borderBlockColor:"#e0a70f",borderBlockWidth:10}}>
    <div className="card-body m-3 ">
        <h4><i class="bi bi-envelope"></i></h4>
      <h5 className="card-title">Email / Phone</h5>
      <p className="card-text">market@gmail.com  +2011478930</p>
      
    </div>
    </div>
  </div> </div>);
}
export default ContactUs;

